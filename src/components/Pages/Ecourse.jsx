import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast'; 

const Ecourse = () => {
    const enrollmentsData = useLoaderData(); 
    const { user } = useAuth();
    const [enrollments, setEnrollments] = useState(enrollmentsData);
    const [statusMessage, setStatusMessage] = useState('');

    // Function to send enrollment data to MongoDB
    const sendDataToMongoDB = async (data) => {
        try {
            const response = await fetch("http://localhost:5000/enrollcourse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log("Data sent to MongoDB:", result);
            setStatusMessage("Data successfully sent to the server.");
        } catch (error) {
            console.error("Error sending data to server:", error);
            setStatusMessage("Error sending data to the server.");
        }
    };

    // Function to handle approval of an enrollment
    const handleApprove = (enrollment) => {
        sendDataToMongoDB(enrollment);
    };

    // Function to handle removal of an enrollment
    const handleRemove = async (_id) => {
        try {
            const response = await fetch(`http://localhost:5000/mycourse/${_id}`, {
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
            const filteredData = enrollments.filter((item) => item._id !== _id);
            setEnrollments(filteredData);
          } catch (error) {
            console.error(error);
            toast.error("Failed to delete course");
          }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ecourse</h1>
            {statusMessage && <div className="text-red-600 mb-4">{statusMessage}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {enrollments.map((enrollment) => (
                    <div key={enrollment._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={enrollment.image_link} alt={enrollment.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Course: {enrollment.title}</div>
                            <div className="font-bold text-xl mb-2">Email: {enrollment.email}</div>
                            <div className="font-bold text-xl mb-2">Id: {enrollment._id}</div>
                            <p className="text-green-600 font-bold mt-2">Price: ₹{enrollment.price}</p>
                            <div className="mt-4">
                                <button 
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2" 
                                    onClick={() => handleApprove(enrollment)}
                                >
                                    Check & Approve
                                </button>
                                <button 
                                    className="bg-red-500 text-white font-bold py-2 px-4 rounded" 
                                    onClick={() => handleRemove(enrollment._id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ecourse;
