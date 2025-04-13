"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function AboutSpeakSpace() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-blue-800">
          Empowering You to Speak with Confidence
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          SpeakSpace is your personal practice zone for mastering Group Discussions and Interviews through real-time collaboration and constructive feedback.
        </p>
      </motion.div>

      {/* What is SpeakSpace */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">What is SpeakSpace?</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          SpeakSpace is an online platform designed to help students, freelancers, and professionals improve their communication and interview skills through real-time group discussions, mock interviews, and structured feedback sessions. It includes roles like Moderator, Participant, and Evaluator, allowing immersive practice in a judgment-free zone.
        </p>
      </section>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To build confident communicators by offering a space where people can practice, improve, and shine in real-world conversations and interviews.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become the go-to platform for GD and interview preparation across educational institutions, professional upskilling platforms, and peer-learning communities.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Key Features</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700 text-base">
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Real-time Group Discussions</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Mock Interview Practice Rooms</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Feedback from Peers & Evaluators</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Star Ratings and Progress Tracking</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Resume Tips & Resources</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Leaderboards to Gamify Learning</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Personalized Dashboard</li>
          <li className="bg-blue-50 p-4 rounded-xl shadow-sm">🔹 Editable Profile with Skill Tags</li>
        </ul>
      </section>

      {/* Value Proposition */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-14 rounded-2xl mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Why SpeakSpace?</h2>
          <p className="mb-8 text-gray-700">
            Traditional methods fall short. SpeakSpace lets you practice anytime, anywhere with realistic simulations and real-time feedback.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left text-gray-800">
            <div>✨ Practice anytime, anywhere</div>
            <div>✨ No need to wait for real interviews to improve</div>
            <div>✨ Feedback-driven sessions</div>
            <div>✨ Peer-based learning – Grow together!</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[{
            name: "Raj Ribadiya",
            role: "MERN Stack Developer",
            img: "https://randomuser.me/api/portraits/men/44.jpg",
          }, {
            name: "Ankit Baradva",
            role: "AI/ML",
            img: "https://randomuser.me/api/portraits/men/46.jpg",
          }, {
            name: "Divy Patel",
            role: "UI/UX Designer",
            img: "https://randomuser.me/api/portraits/men/48.jpg",
          }].map((member, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-200"
              />
              <h4 className="font-semibold text-lg text-blue-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Get Involved</h2>
        <p className="mb-5 text-gray-700">
          Want to partner, contribute, or use SpeakSpace for your college?
        </p><Link href="/contact">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 text-lg rounded-full">
          Contact Us
        </Button></Link>
        <p className="text-sm text-gray-500 mt-3">📩 connect@speakspace.com</p>
      </section>
    </div>
  );
}