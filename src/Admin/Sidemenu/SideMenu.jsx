/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const SideMenu = () => {
  const { theme } = useTheme();

  return (
    
<>
<nav className="bg-white dark:bg-gray-900 w-64 h-screen mt-32">
      <div className="px-8 py-4">
        <ul>
          <li>
            <Link
              to="/dashboard"
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
              Course List
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/ecourse"
              className="block text-gray-800 dark:text-white py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Enroll Course
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/accountsettings"
              className="block text-gray-800 dark:text-white py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Account Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
</>
  );
};

export default SideMenu;
