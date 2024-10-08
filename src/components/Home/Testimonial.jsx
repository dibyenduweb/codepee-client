/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Replace this URL with your actual API endpoint
        const response = await fetch('/review.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTestimonials(data.reviews); // Adjust based on your API structure
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="text-center">Loading testimonials...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-12">What Our Students Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 italic mb-4">{testimonial.review.english}</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
