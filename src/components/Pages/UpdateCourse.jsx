import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { toast} from 'react-hot-toast'; 

const UpdateCourse = () => {
  const updateData = useLoaderData();
  const [formData, setFormData] = useState({
    title: updateData?.title || "",
    image_link: updateData?.image_link || "",
    price: updateData?.price || "",
    short_description: updateData?.short_description || "",
    description: updateData?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://codepee-server.vercel.app/course/${updateData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Course updated successfully");
      } else {
        console.error(result);
        alert("Failed to update course");
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Update Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title} // Change from defaultValue to value
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="image_link"
          placeholder="Image Link"
          value={formData.image_link} // Change from defaultValue to value
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="short_description"
          placeholder="Short Description"
          value={formData.short_description} // Change from defaultValue to value
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description} // Change from defaultValue to value
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update Data
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
