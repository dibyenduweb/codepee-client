/* eslint-disable no-unused-vars */


import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import useTheme from "../../Hooks/useTheme"; // Custom hook for theme toggle

const SideMenu = () => {
  const { theme } = useTheme(); // Theme toggle hook
  
  return (
    <nav className="bg-white dark:bg-gray-900 w-64">
      <div className="px-8 py-4">
        <ul>
          <li>
            <Link
              to="http://localhost:5173/dashboard"
              className="block text-gray-800 dark:text-white py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/addcourse"
              className="block text-gray-800 dark:text-white py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Add Course
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/courselist"
              className="block text-gray-800 dark:text-white py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
             CourseList
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block text-gray-800 dark:text-white py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Account Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};






export default SideMenu;