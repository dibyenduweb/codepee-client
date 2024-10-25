// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const courseData = useLoaderData();
//   console.log(courseData);

//   return (
//     <div className="container mx-auto p-8 gap-3 mt-16">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {courseData.map((course, id) => (
//           <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={course.image_link} alt={course.title} className="w-full" />
//             <div className="p-4">
//               <h5 className="text-lg font-semibold mb-2">{course.title}</h5>
//               <h5 className="text-lg font-semibold mb-2">Price:₹{course.price}</h5>
//               <Link>
//               <button

//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
//               >
//                 Enroll
//               </button>
//               </Link>
//               <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//                 Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const courseData = useLoaderData();
  console.log(courseData);

  return (
    <div className="container mx-auto p-8 gap-3 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courseData.map((course, id) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={course.image_link}
              alt={course.title}
              className="w-full"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">
                {course.title}{" "}
                <span className="text-sm bg-red-600 text-white px-2 rounded-xl">
                  Bengali
                </span>{" "}
              </h5>
              <h5 className="text-lg font-semibold mb-2">
                Price:₹{course.price}
              </h5>
              <Link to={`/enroll/${course._id}`}>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Enroll
                </button>
              </Link>
              <button
                disabled
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
