/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MyCourses = () => {
  const myCourse = useLoaderData();
  const { user } = useAuth();
  const userEmail = user.email;
  console.log(userEmail);

  // Filter courses based on the logged-in user's email
  const userCourses = myCourse.filter((course) => course.email === userEmail);

  return (
    <div className="container mx-auto p-8 gap-3 mt-16 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userCourses.length > 0 ? (
          userCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={course.image_link}
                alt={course.title}
                className="w-full"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">{course.title} </h5> 
                <p className="text-blue-700 text-xl font-bold mb-4">Price:₹{course.price}<span className="text-sm bg-red-600 px-1 rounded-md text-white">Pending</span></p>
               <Link to="/videos">
               <button
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Go to Course
                </button>
               </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">
            No courses found for this user.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
