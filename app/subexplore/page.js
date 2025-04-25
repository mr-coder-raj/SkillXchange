"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SubExplore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            const userList = [
                { id: '1', name: 'Raj Patel', skills: ['Web Development', 'JavaScript'] },
                { id: '2', name: 'Sneha Shah', skills: ['UX/UI Design', 'Figma'] },
                { id: '3', name: 'Amit Verma', skills: ['Digital Marketing', 'SEO'] },
                { id: '4', name: 'Maya Iyer', skills: ['Data Science', 'Python', 'Machine Learning'] },
                { id: '5', name: 'Ravi Desai', skills: ['Mobile App Development', 'Flutter'] },
                { id: '6', name: 'Kiran Mehta', skills: ['Product Management', 'Agile'] },
                { id: '7', name: 'Pooja Singh', skills: ['Graphic Design', 'Adobe Photoshop'] },
                { id: '8', name: 'Siddharth Kumar', skills: ['Web Development', 'React', 'Node.js'] },
                { id: '9', name: 'Tanvi Joshi', skills: ['Content Writing', 'Blogging'] },
                { id: '10', name: 'Vikram Sharma', skills: ['Social Media Marketing', 'Facebook Ads'] },
                { id: '11', name: 'Neha Patel', skills: ['Web Design', 'HTML', 'CSS'] },
                { id: '12', name: 'Anil Kumar', skills: ['Blockchain', 'Ethereum'] },
                { id: '13', name: 'Sonali Gupta', skills: ['Photography', 'Video Editing'] },
                { id: '14', name: 'Harshit Verma', skills: ['Java', 'Android Development'] },
                { id: '15', name: 'Meera Sharma', skills: ['Public Speaking', 'Leadership'] },
                { id: '16', name: 'Ajay Reddy', skills: ['Database Management', 'SQL'] },
                { id: '17', name: 'Gaurav Singh', skills: ['SEO', 'Google Analytics'] },
                { id: '18', name: 'Nina Gupta', skills: ['Email Marketing', 'Copywriting'] },
                { id: '19', name: 'Rakesh Yadav', skills: ['App Development', 'Swift'] },
                { id: '20', name: 'Jatin Patel', skills: ['Cybersecurity', 'Penetration Testing'] },
                { id: '21', name: 'Chandan Kumar', skills: ['Networking', 'CCNA'] },
                { id: '22', name: 'Aarohi Soni', skills: ['HR Management', 'Recruitment'] },
                { id: '23', name: 'Yashika Jain', skills: ['Sales', 'Customer Support'] },
                { id: '24', name: 'Rohan Aggarwal', skills: ['React', 'Redux', 'JavaScript'] },
                { id: '25', name: 'Shubham Mehra', skills: ['Content Strategy', 'Social Media'] },
                { id: '26', name: 'Sanya Bhagat', skills: ['Photography', 'Photo Editing'] },
                { id: '27', name: 'Aman Khurana', skills: ['PHP', 'Laravel'] },
                { id: '28', name: 'Tanuja Patil', skills: ['Product Design', 'Wireframing'] },
                { id: '29', name: 'Jaspreet Kaur', skills: ['UI/UX Design', 'Adobe XD'] },
                { id: '30', name: 'Rajesh Kumar', skills: ['Python', 'Data Analysis'] },
                { id: '31', name: 'Poojan Mehta', skills: ['Digital Art', 'Illustrator'] },
                { id: '32', name: 'Suman Agarwal', skills: ['Business Strategy', 'Marketing'] },
                { id: '33', name: 'Tanu Garg', skills: ['JavaScript', 'Vue.js'] },
                { id: '34', name: 'Vanshika Singh', skills: ['Public Relations', 'Event Management'] },
                { id: '35', name: 'Kunal Desai', skills: ['Artificial Intelligence', 'Deep Learning'] },
                { id: '36', name: 'Vishal Verma', skills: ['iOS Development', 'Objective-C'] },
                { id: '37', name: 'Suman Pandey', skills: ['Project Management', 'Scrum'] },
                { id: '38', name: 'Arun Kumar', skills: ['DevOps', 'Docker'] },
                { id: '39', name: 'Alisha Shah', skills: ['Video Production', 'Final Cut Pro'] },
                { id: '40', name: 'Rajiv Soni', skills: ['E-commerce', 'Shopify'] },
                { id: '41', name: 'Sandeep Kumar', skills: ['Angular', 'Typescript'] },
                { id: '42', name: 'Kriti Mehra', skills: ['Social Media', 'Branding'] },
                { id: '43', name: 'Vivek Mishra', skills: ['Mobile App', 'React Native'] },
                { id: '44', name: 'Aarti Sharma', skills: ['Event Planning', 'Coordination'] },
                { id: '45', name: 'Nishant Reddy', skills: ['Google Ads', 'PPC'] },
                { id: '46', name: 'Shivendra Kumar', skills: ['AWS', 'Cloud Computing'] },
                { id: '47', name: 'Kavita Sharma', skills: ['SEO', 'Content Writing'] },
                { id: '48', name: 'Manish Chauhan', skills: ['Flutter', 'Dart'] },
                { id: '49', name: 'Neelam Verma', skills: ['Email Campaigns', 'Marketing'] },
                { id: '50', name: 'Ankush Patel', skills: ['Marketing Automation', 'HubSpot'] }
            ];

            setUsers(userList);
            setFilteredUsers(userList);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        const sortedUsers = filtered.sort((a, b) => a.name.localeCompare(b.name));
        setFilteredUsers(sortedUsers);
    }, [searchTerm, users]);

    return (
        <div className="h-[100vh] bg-gradient-to-br from-purple-600 to-indigo-800 text-white px-6 py-20 pt-32 transition-all duration-500">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-extrabold mb-10 text-center drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                    Explore Exchangers
                </h1>

                <div className="flex gap-4 max-w-3xl mx-auto relative mb-12">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for forums, people, skills..."
                        className="flex-1 p-4 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 transform hover:scale-105"
                    />

                    <button
                        // onClick={handleSearch} // make sure you define this function
                        className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <lord-icon
                                   src="https://cdn.lordicon.com/yudxjmzy.json"
                                   trigger="hover"
                                   state="hover-rotation"
                            style={{ width: '35px', height: '35px' }}>
                        </lord-icon>
                    </button>
                </div>


                <div className="mb-14">
                    {filteredUsers.length > 0 ? (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">🔍 Users Found</h2>
                            <div className="max-h-[490px] overflow-y-auto px-16 custom-scrollbar">
                                <div className="flex flex-col gap-6">
                                    {filteredUsers.map(user => (
                                        <div key={user.id} className="p-5 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-md hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                                            <h3 className="font-semibold text-lg text-white">{user.name}</h3>
                                            <p className="text-indigo-200">Skills: {user.skills.join(', ')}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-lg text-indigo-300">No users found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubExplore;
