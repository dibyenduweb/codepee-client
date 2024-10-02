/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEnvelope, FaPhone, FaRegSadTear, FaCommentDots } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="mb-2">For any support, you can reach out to us via the following methods:</p>
      
      <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-blue-600" />
          Email: <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>
        </li>
        <li className="flex items-center">
          <FaPhone className="mr-2 text-blue-600" />
          Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a>
        </li>
      </ul>

      <p className="mt-4">We are here to help you!</p>
      
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            <FaCommentDots className="mr-2" />
            Support
          </button>
        </a>
        <a href="https://example.com/complaint" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200">
            <FaRegSadTear className="mr-2" />
            Complaint
          </button>
        </a>
      </div>
    </div>
  );
};

export default Support;
