/* eslint-disable no-unused-vars */
import React from "react";
import ReactPlayer from "react-player/vimeo";
import useAuth from "../../Hooks/useAuth";


const Video = () => {
  const { user } = useAuth();
  const userEmail = user.email;
  console.log(userEmail);


  // Video data with the Vimeo link
  const videoList = [
    { title: "Design in Photoshop", time: "01:00:00", link: "https://player.vimeo.com/video/1014654232" },
    { title: "Interface Introduction", time: "03:42", link: "https://player.vimeo.com/video/1014470251" },
   
  ];
  return (
    <div className="flex flex-col lg:flex-row w-full h-full mt-16">
      {/* Left Section - Video & Description */}
      <div className="w-full lg:w-3/4 p-4">
        {/* Video Section */}
        <div className="relative">
          <ReactPlayer
            url="https://player.vimeo.com/video/1014470251"
        
            controls
            className="react-player"
          />
        </div>

        {/* Video Description */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">
            Learn Photoshop, Web Design & Profitable Freelancing
          </h1>
          <p className="text-gray-600 mt-2">
            Explore the fundamentals of web design and freelancing with this comprehensive course.
          </p>
        </div>
      </div>

      {/* Right Section - Class List */}
      <div className="w-full lg:w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">All Classes (15)</h2>
        <ul className="mt-4 space-y-3">
          {videoList.map((classItem, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-2 rounded shadow">
              <div>
                <h3>{classItem.title}</h3>
                <p className="text-gray-500">{classItem.time}</p>
              </div>
              {/* Each list item can trigger the video play in the main section */}
              <a
                href={classItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Play
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Video;
