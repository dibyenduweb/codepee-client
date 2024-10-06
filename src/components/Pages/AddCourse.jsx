/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import SideMenu from '../../Admin/sidemenu/SideMenu';

const AddCourse = () => {
    const [formData, setFormData] = useState({
        title: '',
        image_link: '',
        price: '',
        short_description: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/course', formData);
            console.log('Course added:', response.data);
            // Reset form or show success message
            setFormData({
                title: '',
                image_link: '',
                price: '',
                short_description: '',
                description: '',
            });
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <>
        <div className="max-w-md mx-auto p-4 mt-4">
            <h1 className="text-2xl font-bold mb-4">Add Course</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="image_link"
                    placeholder="Image Link"
                    value={formData.image_link}
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
                    value={formData.short_description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
        </>
    );
};


export default AddCourse;
