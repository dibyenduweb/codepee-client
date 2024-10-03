/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import useTheme from "../../Hooks/useTheme";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("You are logged out now"))
      .catch((error) => console.log(error));
  };

  const isAdmin = user?.email === "admin@codepee.com"; // Check if the user is admin

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-green-100 dark:bg-gray-800 fixed w-full z-20 top-0 shadow-md dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="w-52">
            <img src={logo} alt="Logo" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Search bar with icon */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses"
                className="border rounded px-4 py-1 focus:outline-none pl-10 dark:bg-gray-700 dark:text-white"
              />
              <FiSearch className="absolute right-2 top-2 text-gray-500 dark:text-white" size={20} />
            </div>
            <a href="/" className="text-gray-800 hover:text-green-600 dark:text-gray-300">Home</a>
            <a href="/course" className="text-gray-800 hover:text-green-600 dark:text-gray-300">Courses</a>
           
           {isAdmin && (
  <>
    <a href="/dashboard" className="text-gray-800 hover:text-green-600 dark:text-gray-300">
      Dashboard
    </a>
   
  </>
)}

            <a href="/community" className="text-gray-800 hover:text-green-600 dark:text-gray-300">Tech community</a>
            <a href="/support" className="text-gray-800 hover:text-green-600 dark:text-gray-300">Support</a>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
                  <img className="w-10 h-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                  <span>{user.displayName} </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-2">
                      <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white">My Profile</a>
                      <a href="/mycourse" className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white">My Courses</a>
                      <a href="/test" className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white">Assignments</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white">Notice</a>
                      <a href="/file" className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white">Files</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-grhover:bg-green-400 hover:bg-green-400 hover:text-white">Certificate</a>
                      <button onClick={handleLogOut} className="m-2 text-left p-2 rounded-lg bg-blue-500 text-cyan-50 hover:bg-emerald-600">
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded-md">Sign in</a>
            )}

            {/* Dark/Light mode toggle button */}
            <button className="text-2xl ml-4" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-600 dark:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-100 dark:bg-gray-800 w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <input
              type="text"
              placeholder="Search courses"
              className="border rounded w-full px-2 py-1 focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            <a href="/" className="block text-gray-800 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
            <a href="/course" className="block text-gray-800 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">Courses</a>
            {isAdmin && (
              <a href="/addcourse" className="block text-gray-800 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">Add Courses</a>
            )}
            <a href="#" className="block text-gray-800 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">Blogs</a>
            <a href="#" className="block text-gray-800 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">Notice</a>

            {user ? (
              <div className="flex items-center space-x-2">
                <img className="w-14 h-10 rounded-full" src={user.photoURL} alt="User" />
                <span>{user.displayName}</span>
                <button onClick={handleLogOut} className="block bg-green-600 text-white px-4 py-2 rounded-md text-center">Sign out</button>
              </div>
            ) : (
              <a href="/login" className="block bg-green-600 text-white px-4 py-2 rounded-md text-center">Sign in</a>
            )}

            <button className="text-2xl ml-4" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "dark" ? <FiSun /> : <IoMoonOutline />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;