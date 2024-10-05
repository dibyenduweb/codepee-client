/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Brand and Social Icons */}
          <div className="flex flex-col">
            <img className="w-44 p-2" src={logo} alt="" />
            <p className="text-sm mb-4">
              Join now to receive personalized recommendations from the full
              course catalog.
            </p>
            <div className="flex space-x-4">
              <FaInstagram
                className="text-gray-400 hover:text-white"
                size={24}
              />
              <FaTwitter className="text-gray-400 hover:text-white" size={24} />
              <FaFacebook
                className="text-gray-400 hover:text-white"
                size={24}
              />
              <FaYoutube className="text-gray-400 hover:text-white" size={24} />
            </div>
          </div>

          {/* Middle Section - Company Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <a href="#" className="text-sm text-gray-400 hover:text-white mb-1">
              About us
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white mb-1">
              We are Hiring
            </a>
         
         
          
            
          </div>

          {/* Right Section - Support Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <a href="/support" className="text-sm text-gray-400 hover:text-white mb-1">
              Help center
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white mb-1">
              Terms of service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white mb-1">
              Refund Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white mb-1">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400 text-sm">
            Designed by @Dibyendu, 2023, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
