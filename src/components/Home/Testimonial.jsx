/* eslint-disable no-unused-vars */
import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Software Engineer',
      text: 'KnowledgePulse helped me gain in-depth knowledge and provided an excellent learning experience.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      title: 'Project Manager',
      text: 'The courses are very well structured and have improved my skills significantly!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Johnson',
      title: 'Data Analyst',
      text: 'I highly recommend KnowledgePulse to anyone looking to upgrade their professional skills.',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-12">What Our Users Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
