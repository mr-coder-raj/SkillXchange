"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ExploreSkillXChange = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const allSuggestions = [
        "Web Development", "Data Structures", "React Tutorials",
        "Video Calls", "Forums", "Feedbacks",
        "Connect with Mentors", "Java Basics", "DSA with Java",
        "Node.js Backend", "MongoDB Database", "Express.js API",
        "JavaScript ES6", "Frontend Design", "Tailwind CSS",
        "Git & GitHub", "REST APIs", "Authentication Systems",
        "OAuth 2.0", "Socket.io Chat", "Problem Solving",
        "Competitive Coding", "Python for Beginners", "Machine Learning",
        "Next.js Routing", "Firebase Integration", "UI/UX Design",
        "Debugging Techniques", "Agile Development", "Project Deployment",
        "Unit Testing", "React Hooks", "Java OOPs",
        "Binary Trees", "Graph Algorithms", "Linked Lists"
    ];


    const handleChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if (value.length > 0) {
            const filtered = allSuggestions.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            )
            setSuggestions(filtered)
        } else {
            setSuggestions([])
        }
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white px-6 py-20 pt32">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-10 text-center text-white drop-shadow-xl">Explore SpeakSpace</h1>

                <div className="flex gap-4 max-w-3xl mx-auto relative">
                    <input
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search for forums, people, videos..."
                        className="flex-1 p-4 rounded-l-full text-black shadow-md focus:outline-none"
                    />
                    <button className="px-5 bg-blue-500 hover:bg-blue-700 rounded-r-full transition duration-300 shadow-md">
                        <Image src="/Search.svg" width={24} height={24} alt="Search" />
                    </button>

                    {suggestions.length > 0 && (
                        <ul className="absolute top-16 left-0 bg-white text-black w-full rounded-lg shadow-lg z-10">
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        setSearchTerm(item)
                                        setSuggestions([])
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <Link href="/forums">
                        <div className="bg-purple-700 hover:bg-purple-900 p-4 rounded-xl shadow-lg text-center font-semibold cursor-pointer transition-all duration-300">
                            Forums
                        </div>
                    </Link>
                    
                </div>

                <div className="mt-16 bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Live Activity</h2>
                    <p>This area will display forum activity, messages, or user interactions.</p>
                </div>
            </div>
        </section>
    )
}

export default ExploreSkillXChange
