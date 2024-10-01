import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import useAuth from "../../Hooks/useAuth"; // Custom hook for authentication
import useTheme from "../../Hooks/useTheme"; // Custom hook for theme toggle
import logo from "../../assets/images/logo.png"; // Import your logo
import SideMenu from "../sidemenu/SideMenu";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const { user, logOut } = useAuth(); // Authentication hook
  const { theme, toggleTheme } = useTheme(); // Theme toggle hook
  const navigate = useNavigate(); // Hook for navigation

  const isAdmin = user?.email === "admin@codepee.com"; // Check if the user is admin

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
        navigate("/"); // Redirect to home page after logout
      })
      .catch((error) => console.log(error));
  };

  // Conditional rendering: Only show the dashboard if user is admin
  if (!isAdmin) {
    return <div>You are not authorized to view this dashboard.</div>;
  }

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} className="h-10 w-auto" alt="Logo" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-800 hover:text-green-600 dark:text-gray-300">
            Home
              </a>
             
              <button onClick={toggleTheme} className="text-2xl">
                {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
              </button>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                  <span>{user?.displayName}</span>
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-green-400"
                    >
                      Profile
                    </a>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-green-400"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 dark:text-white focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50"
        >
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when clicking a menu item
              className="block text-gray-800 dark:text-white"
            >
              Dashboard
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when clicking a menu item
              className="block text-gray-800 dark:text-white"
            >
              Orders
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when clicking a menu item
              className="block text-gray-800 dark:text-white"
            >
              Products
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when clicking a menu item
              className="block text-gray-800 dark:text-white"
            >
              Account Settings
            </button>
            <button
              onClick={handleLogOut} // Log out button
              className="block text-left text-gray-800 dark:text-white"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
