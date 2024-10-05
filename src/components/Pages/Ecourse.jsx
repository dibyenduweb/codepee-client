import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Ecourse = () => {
    const enrollments = useLoaderData(); // Assuming this returns an array of enrollments
    const { user } = useAuth();
    const userEmail = user?.email;
    console.log(userEmail);
    const [statusMessage, setStatusMessage] = useState('');

    // Function to send data to MongoDB
    const sendDataToMongoDB = async (data) => {
        try {
            const response = await fetch("your-mongodb-server-url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
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
    const handleRemove = (transactionID) => {
        // Logic to remove enrollment from UI or state (not implemented here)
        // You might want to filter the enrollments based on transactionID or manage state accordingly
        console.log(`Remove enrollment with ID: ${transactionID}`);
        // Update status message if needed
        setStatusMessage(`Enrollment with ID ${transactionID} has been removed.`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ecourse</h1>
            {statusMessage && <div className="text-red-600 mb-4">{statusMessage}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {enrollments.map((enrollment) => (
                    <div key={enrollment.transactionID} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src={enrollment.image_link} alt={enrollment.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Course: {enrollment.title}</div>
                            <div className="font-bold text-xl mb-2">Email: {enrollment.email}</div>
                            <div className="font-bold text-xl mb-2">Id: {enrollment.transactionID}</div>
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
                                    onClick={() => handleRemove(enrollment.transactionID)}
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

