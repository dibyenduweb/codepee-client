/* eslint-disable no-unused-vars */
// src/components/Assignment.js

import React, { useState } from 'react';

const Assignment = () => {
    const [assignments, setAssignments] = useState([
        { name: 'Assignment HTML', link: 'https://forms.gle/hZJTVbTuDnufdpy97', total: "60", score: "00" },
      
    ]);

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [score, setScore] = useState(0);

    const handleAddAssignment = () => {
        if (name && link && score >= 60 && score <= 100) {
            setAssignments([
                ...assignments,
                { name, link, total: 100, score }
            ]);
            setName('');
            setLink('');
            setScore(0);
        } else {
            alert("Please fill in all fields and ensure score is between 60 and 100");
        }
    };

    return (
        <div className="max-w-2xl mt-14 mx-auto p-4 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Assignments</h1>
            {/* <div className="mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Assignment Name"
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Assignment Link"
                    className="border p-2 mr-2"
                />
                <input
                    type="number"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                    placeholder="Score (60-100)"
                    className="border p-2 mr-2"
                />
                <button
                    onClick={handleAddAssignment}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Assignment
                </button>
            </div> */}
            <ul>
                {assignments.map((assignment, index) => (
                    <li key={index} className="mb-2">
                        <a href={assignment.link} target="_blank" rel="noopener noreferrer"  className="text-blue-500">
                            {assignment.name} - Total Score: {assignment.score}/60
                        </a>
                    </li>
                ))}
                <h2>Assignment CSS - Coming Soon</h2>
                <h2>Assignment WordPress - Coming Soon</h2>
                <h1 className='text-red-700 font-bold'>Total marks: 200/000 </h1>
            </ul>
        </div>
    );
};

export default Assignment;
