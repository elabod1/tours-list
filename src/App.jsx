import { useState, useEffect } from "react";
import ListTours from "./components/ListTours";
import axios from "axios";

function App() {
  const [tours, setTours] = useState([]);
  const [originalTours, setOriginalTours] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedTours, setExpandedTours] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://www.course-api.com/react-tours-project");
        setTours(response.data);
        setOriginalTours(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (tour) => {
    setTours((prevTours) => prevTours.filter((t) => t.id !== tour.id));
    try {
      axios.delete("https://www.course-api.com/react-tours-project/${tour.id}");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleToggleReadMore = (id) => {
    setExpandedTours((prevExpandedTours) => {
      if (prevExpandedTours.includes(id)) {
        return prevExpandedTours.filter((tourId) => tourId !== id); 
      } else {
        return [...prevExpandedTours, id]; 
      }
    });
  };

  const refresh = () => {
    setTours([...originalTours]);
  };

  return (
    <ListTours
      tours={tours}
      isLoading={isLoading}
      error={error}
      handleDelete={handleDelete}
      refresh={refresh}
      expandedTours={expandedTours}  
      handleToggleReadMore={handleToggleReadMore}  
    />
  );
}

export default App;