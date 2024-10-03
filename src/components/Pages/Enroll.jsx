// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import upi from "../../assets/images/upi.png";
// import useAuth from "../../Hooks/useAuth";

// const Enroll = () => {
//   const enrollData = useLoaderData();
//   const [isModalOpen, setModalOpen] = useState(false); 
//   const [uniqueCode, setUniqueCode] = useState(""); 
//   const { user } = useAuth();
//   const userEmail = user.email;
//   console.log(userEmail);


//   const handlePayAndEnrollClick = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   const handleCodeChange = (e) => {
//     setUniqueCode(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Unique Code Submitted:", uniqueCode);
//     // Add logic for submission here
//     setModalOpen(false); // Close modal after submit
//   };

//   return (
//     <>
//       <div className="max-w-md mx-auto p-4 mt-4 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Course Details</h1>

//         {/* Card to show data */}
//         <div className="p-4 border border-gray-300 rounded-lg space-y-4">
//           <div>
//             <p className="text-gray-700 font-bold">{enrollData.title}</p>
//           </div>



import { useLoaderData, useNavigate } from "react-router-dom"; // useNavigate for redirection
import { useState } from "react";
import upi from "../../assets/images/upi.png";
import axios from "axios"; // Import axios
import useAuth from "../../Hooks/useAuth";

const Enroll = () => {
  const enrollData = useLoaderData();
  const [isModalOpen, setModalOpen] = useState(false);
  const [uniqueCode, setUniqueCode] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate(); // Hook to handle navigation after form submission
  const userEmail = user.email;

  const handlePayAndEnrollClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCodeChange = (e) => {
    setUniqueCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      title: enrollData.title,
      image_link: enrollData.image_link,
      price: enrollData.price,
      short_description: enrollData.short_description,
      description: enrollData.description,
      email: userEmail, // Email from auth system
      transactionID: uniqueCode, // Include transaction ID
    };

    try {
      // Send data to the backend
      const response = await axios.post("https://codepee-server.vercel.app/mycourse", courseData);
      console.log("Data sent successfully:", response.data);

      // Close modal and reset form after successful submission
      setModalOpen(false);
      
      // Redirect to home page after submission
      navigate("/");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 mt-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Course Details</h1>

        {/* Card to show data */}
        <div className="p-4 border border-gray-300 rounded-lg space-y-4">
          <div>
            <p className="text-gray-700 font-bold">{enrollData.title}</p>
          </div>

          <div>
            <img
              src={enrollData.image_link}
              alt={enrollData.title}
              className="w-full object-cover rounded-md"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Price</h2>
            <p className="font-bold text-red-400">₹{enrollData.price}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Details</h2>
            <p className="text-gray-700">{enrollData.description}</p>
          </div>
          <button
            className="bg-blue-700 text-white p-2 px-4 rounded-lg hover:bg-red-500"
            onClick={handlePayAndEnrollClick}
          >
            Pay and Enroll
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-center">
              Pay and Enroll
            </h2>
            <img
              src={upi}
              alt="Payment"
              className="w-full object-cover rounded-md mb-4"
            />
            <div className="mb-4">
              <p className="text-lg font-bold">{enrollData.title}</p>
              <p className="font-bold text-red-400">Price: ₹{enrollData.price}</p>
              <p>After pay enter your transaction ID</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter transaction code"
                value={uniqueCode}
                onChange={handleCodeChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 text-white p-2 w-full rounded-lg hover:bg-blue-500"
              >
                Submit
              </button>
            </form>
            <button
              className="mt-4 w-full text-center text-red-500"
              onClick={handleModalClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Enroll;
