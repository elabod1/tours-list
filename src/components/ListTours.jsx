const ListTours = ({ tours, isLoading, error, handleDelete, refresh, expandedTours, handleToggleReadMore }) => {
    return (
      <>
        {isLoading ? (
           <div className="flex justify-center items-center mt-20" role="status ">
           <svg
             aria-hidden="true"
             className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-gray-400"
             viewBox="0 0 100 101"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
               fill="currentColor"
             />
             <path
               d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
               fill="currentFill"
             />
           </svg>
           <span className="sr-only">Loading...</span>
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