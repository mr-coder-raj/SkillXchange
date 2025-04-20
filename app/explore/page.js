"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ExploreSkillXChange = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white px-6 py-20 pt-32 transition-all duration-500">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-2xl transition-all duration-500 transform hover:scale-105">
                    Explore SkillXchange
                </h1>

                <div className="flex gap-4 max-w-3xl mx-auto relative">
                    <input
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search for forums, people, videos..."
                        className="flex-1 p-4 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                    />
                    <button className="px-5 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all duration-300 shadow-md transform hover:scale-105">
                        <Image src="/Search.svg" width={24} height={24} alt="Search" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12 transition-all duration-300 ease-in-out">
                    <Link href="/forums">
                        <div className="bg-indigo-500 hover:bg-indigo-600 p-6 rounded-xl shadow-lg text-center font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1">
                            Forums
                        </div>
                    </Link>
                    <Link href="/vc">
                        <div className="bg-blue-500 hover:bg-blue-600 p-6 rounded-xl shadow-lg text-center font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1">
                            Video Chat
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExploreSkillXChange;
