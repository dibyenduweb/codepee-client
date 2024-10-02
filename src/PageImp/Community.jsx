/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
const Community = () => {
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setQuestions([...questions, input]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Community Q&A</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Ask your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-2">Questions:</h2>
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li key={index} className="p-4 bg-white border border-gray-300 rounded-md shadow-sm">
            {question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;