'use client';

import React, { useState } from 'react';
import Link from 'next/link'

export default function UserProfile() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        education: '',
        experience: '',
        skills: '',
        role: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // You can send this data to your database here
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">User Profile</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Education</label>
                    <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows={3}
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <input
                        type="text"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Role</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Select Role</option>
                        <option value="participant">Participant</option>
                        <option value="moderator">Moderator</option>
                        <option value="evaluator">Evaluator</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full mt-3 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    <Link href="/yourprofile">
                        Save Profile

                    </Link>
                </button>


            </form>
        </div>
    );
}