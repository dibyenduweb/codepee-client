import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast'; 

const CourseList = () => {
  const courseData = useLoaderData(); // Loader data fetched from server
  const [updateCourse, setUpdateCourse] = useState(courseData); // Local state for course data

  // Delete function
  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`http://localhost:5000/course/${_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete course");
      }

      const result = await response.json();
      console.log(result);

      // Show toast notification using react-hot-toast
      toast.success("Course deleted successfully");

      // Update local state to remove deleted course
      const filteredData = updateCourse.filter((item) => item._id !== _id);
      setUpdateCourse(filteredData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete course");
    }
  };

  return (
    <div className="container mx-auto p-8 mt-16">
      <Toaster /> {/* Add Toaster component here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {updateCourse.map((course) => (
          <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <img
              src={course.image_link}
              alt={course.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">Price: {course.price}</p>
            <div className="flex justify-between">
             
             <Link to={`/dashboard/courseupdate/${course._id}`}>
             <button  type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition duration-300">
                Edit
              </button>
             </Link>
              <button
                onClick={() => handleDelete(course._id)}
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;