"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function ExploreSkillXChange() {
    const [searchTerm, setSearchTerm] = useState('');
    const [topMentors, setTopMentors] = useState([]);
    const [sessions, setSessions] = useState([]);

    const categories = ["Web Dev", "Design", "Marketing", "Music", "AI", "Speaking"];
    const trendingSkills = ["Web3", "Prompt Engineering", "Freelance Branding", "AI Tools", "Storytelling"];

    const handleChange = (e) => setSearchTerm(e.target.value);

    useEffect(() => {
        // ✅ DEMO Data
        setTopMentors([
            { id: '1', name: 'Raj Patel', skill: 'Web Development', rating: '4.8' },
            { id: '2', name: 'Sneha Shah', skill: 'UX/UI Design', rating: '4.9' },
            { id: '3', name: 'Amit Verma', skill: 'Digital Marketing', rating: '4.7' },
        ]);

        setSessions([
            { id: 'a', title: 'React Basics for Beginners', time: 'Today • 6:00 PM' },
            { id: 'b', title: 'Freelancing Tips & Tricks', time: 'Tomorrow • 4:30 PM' },
            { id: 'c', title: 'Intro to Prompt Engineering', time: 'Friday • 5:00 PM' },
        ]);
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white px-6 py-20 pt-32 transition-all duration-500">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <lord-icon
                        src="https://cdn.lordicon.com/cadyhyeo.json"
                        trigger="loop"
                        state="loop-roll"
                        colors="primary:#4030e8,secondary:#ffffff,tertiary:#4bb3fd"
                        style={{ width: '120px', height: '120px' }}>
                    </lord-icon>
                    <h1 className="text-5xl font-extrabold text-center drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                        Explore SkillXchange
                    </h1>
                </div>


                {/* Forums + VC Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                    <Link href="/forums">
                        <div className="bg-blue-500 hover:bg-indigo-600 px-6 py-3 rounded-xl shadow-lg text-center font-semibold cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:translate-y-1 flex gap-4 justify-center items-center">
                            <lord-icon
                                src="https://cdn.lordicon.com/abhwievu.json"
                                trigger="hover"
                                colors="primary:#2516c7,secondary:#ffc738,tertiary:#4bb3fd,quaternary:#ebe6ef"
                                style={{ width: '50px', height: '50px' }}>
                            </lord-icon>
                            Discussion Forums
                        </div>
                    </Link>
                    <Link href="/vc">
                        <div className="bg-blue-500 hover:bg-indigo-600 px-6 py-3 rounded-xl shadow-lg text-center font-semibold cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:translate-y-1 flex gap-4 justify-center items-center">
                            <lord-icon
                                src="https://cdn.lordicon.com/vqkaxtlm.json"
                                trigger="hover"
                                colors="primary:#ffc738,secondary:#ebe6ef,tertiary:#f24c00,quaternary:#4030e8,quinary:#4bb3fd,senary:#ffffff,septenary:#f28ba8,octonary:#92140c"
                                style={{ width: '50px', height: '50px' }}>
                            </lord-icon>
                            Video Chat
                        </div>
                    </Link>
                    <Link href="/subexplore">
                        <div className="bg-blue-500 hover:bg-indigo-600 px-6 py-3 rounded-xl shadow-lg text-center font-semibold cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:translate-y-1 flex gap-4 justify-center items-center">
                            <lord-icon
                                src="https://cdn.lordicon.com/xmoniccu.json"
                                trigger="hover"
                                state="hover-rotate-up-to-down"
                                style={{ width: '50px', height: '50px' }}>
                            </lord-icon>
                            Find skillXchanger
                        </div>
                    </Link>

                </div>

                {/* Trending Skills */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-4">🔥 Trending Skills</h2>
                    <div className="flex gap-2 flex-wrap">
                        {trendingSkills.map((skill, i) => (
                            <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                                #{skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-4">✨ Categories</h2>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat, i) => (
                            <span key={i} className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm hover:bg-opacity-30 cursor-pointer">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Top Mentors */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold mb-4">🏆 Top Mentors</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topMentors.map((mentor, i) => (
                            <motion.div
                                key={mentor.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-5 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-md hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
                            >
                                <h3 className="font-semibold text-lg text-white">{mentor.name}</h3>
                                <p className="text-indigo-200">{mentor.skill}</p>
                                <p className="text-yellow-400 mt-1">⭐ {mentor.rating}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Live & Upcoming Sessions */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-4">📅 Live & Upcoming Sessions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sessions.map((s, i) => (
                            <div
                                key={s.id}
                                className="p-5 bg-indigo-400 bg-opacity-40 backdrop-blur-lg rounded-2xl hover:bg-indigo-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                            >
                                <h3 className="font-semibold text-white">{s.title}</h3>
                                <p className="text-indigo-100 text-sm">{s.time}</p>
                                <button className="mt-3 px-3 py-1 bg-indigo-700 text-white rounded-full text-sm hover:bg-indigo-800">
                                    Join Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-3">Start your Skill Journey Now</h2>
                    <p className="text-indigo-200 mb-6">Set your interests & connect instantly.</p>

                    <Link href="/dashboard">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                            Set Preferences
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
