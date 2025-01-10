const ListTours = ({ tours, isLoading, error, handleDelete, refresh, expandedTours, handleToggleReadMore }) => {
    return (
      <>
        {isLoading ? (
          <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-400 ">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-gray-900 dark:text-blue-200">
              loading...
            </div>
          </div>
        ) : (
          <div className="container-css flex items-center justify-center flex-col mt-9 w-screen">
            <h1 className="text-3xl font-medium">
              {tours.length !== 0 ? "Our Tours" : "No Tours Left"}
            </h1>
            {tours.length !== 0 ? (
              <span className="w-[190px] h-[10px] bg-gray-400 mt-3"></span>
            ) : (
              <button
                onClick={refresh}
                type="button"
                className="text-white mt-4 bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Refresh
              </button>
            )}
            <div className="container-card flex flex-wrap max-w-[1200px] gap-5 max-[1200px]:justify-center ">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="flex flex-col shadow border border-gray-200 rounded-lg my-6 w-96 bg-gray-400 "
                >
                  <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center relative ">
                    <img
                      className="w-full h-full object-cover"
                      src={tour.image}
                      alt="profile-picture"
                    />
                    <span className="absolute top-0 right-0 bg-gray-500 text-white p-2">
                      ${tour.price}
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="mb-1 text-xl font-semibold text-gray-800">
                      {tour.name}
                    </h4>
                    <span className="text-base text-gray-600 mt-4 font-light ">
                    {expandedTours.includes(tour.id)
                      ? tour.info
                      : `${tour.info.substring(0, 200)}`}
                  </span>

  
                    <button
                      onClick={() => handleToggleReadMore(tour.id)}
                      className="text-gray-500 font-bold"
                    >
                      {expandedTours.includes(tour.id) ? "Show Less" : "... Read More"}
                    </button>
                  </div>
                  <div className="flex justify-center p-6 pt-2 gap-7">
                    <button
                      onClick={() => handleDelete(tour)}
                      className="min-w-full rounded-md bg-white py-2 px-4 border border-gray-500 border-transparent text-center text-sm text-gray-700 transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-500 hover:text-white duration-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Not Interacted
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default ListTours;