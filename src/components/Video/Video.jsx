/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/vimeo";
import useAuth from "../../Hooks/useAuth";

// Import video data from JSON file
import videoData from "../../../public/videoData.json" 

const Video = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  console.log(userEmail);


  // State to track the current video index and the video link
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Start with the first video
  const videoList = videoData; 

  // Get the current video from the videoList using the currentVideoIndex
  const currentVideo = videoList[currentVideoIndex];

  // Function to handle playing the next video
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < videoList.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Function to handle playing the previous video
  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videoList.length - 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl m-auto h-full mt-16">
      {/* Left Section - Video & Description */}
      <div className="w-full lg:w-3/4 p-4">
        {/* Video Section */}
        <div className="relative">
          <ReactPlayer
            url={currentVideo.link}
            controls
            className="react-player"
          />
        </div>

        {/* Video Description */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">{currentVideo.title}</h1>
          <p className="text-gray-600 mt-2">
            Fundamentals of web design and freelancing with this comprehensive course.
          </p>
        </div>

        {/* Next & Previous Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={handlePreviousVideo}
            className="bg-gray-500 text-white px-4 py-2 rounded shadow"
          >
            Previous Video
          </button>
          <button
            onClick={handleNextVideo}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            Next Video
          </button>
        </div>

        {/* Details Section */}
        <div className="mt-4">
          <details>
            <summary>Copyright Information</summary>
            <p className="text-gray-500 mt-2">
              This video is copyrighted by its respective creators. Unauthorized
              distribution is prohibited.
            </p>
          </details>
        </div>
      </div>

      {/* Right Section - Class List */}
      <div className="w-full lg:w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">All Classes ({videoList.length})</h2>
        <ul className="mt-4 space-y-3">
          {videoList.map((classItem, index) => (
            <li
              key={index}
              className={`flex justify-between items-center bg-white p-2 rounded shadow ${
                currentVideoIndex === index ? "bg-blue-100" : ""
              }`}
            >
              <div>
                <h3>{classItem.title}</h3>
                <p className="text-gray-500">{classItem.time}</p>
              </div>
              {/* Change video dynamically on click */}
              <button
                onClick={() => setCurrentVideoIndex(index)}
                className="text-blue-500"
              >
                Play
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Video;
