"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Dummy team data
const teamMembers = [
  {
    name: "Raj Ribadiya",
    role: "MERN Stack Developer",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Ankit Baradva",
    role: "AI/ML Engineer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Shreya Patel",
    role: "Community Outreach",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Trushti Parmar",
    role: "Product Designer",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const features = [
  "🔁 Skill Exchange Marketplace",
  "🧑‍💻 Project-based Learning Rooms",
  "💬 In-platform Chat & Video Collaboration",
  "📈 Profile Badges & Endorsements",
  "👥 Community-driven Feedback System",
  "📁 Verified Project Portfolios",
  "🏆 Contribution Leaderboard",
  "📌 Personalized Learning Path",
];

export default function AboutSkillXchange() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800 pt-32 overflow-x-hidden">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-800">
          Unlock Opportunities Through Skill Exchange
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          SkillXchange is a collaborative platform where learners and professionals exchange skills, collaborate on real-world projects, and grow together.
        </p>
      </motion.div>

      {/* What is SkillXchange */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">What is SkillXchange?</h2>
        <p className="text-gray-700 leading-relaxed">
          SkillXchange is a peer-to-peer platform that enables users to offer and learn new skills through direct exchange. Whether you're a designer looking to learn coding or a developer eager to learn video editing, SkillXchange helps you grow through community-driven learning.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
        {[
          {
            title: "Our Mission",
            desc: "To empower learners by enabling equal and practical access to skill-building through mutual collaboration.",
          },
          {
            title: "Our Vision",
            desc: "To become the world’s most trusted peer-to-peer learning and collaboration hub.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-700">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-4 rounded-xl shadow-sm text-gray-800"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Value Prop */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-100 to-blue-50 py-14 rounded-2xl mb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Why SkillXchange?</h2>
          <p className="mb-8 text-gray-700">
            Traditional learning platforms focus on one-way teaching. SkillXchange builds real collaboration and growth through value-based exchange and portfolio creation.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left text-gray-800 px-6">
            <div>✨ Connect and learn together</div>
            <div>✨ Build real project portfolios</div>
            <div>✨ Learn without financial barriers</div>
            <div>✨ Feedback and endorsements from peers</div>
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-200"
              />
              <h4 className="font-semibold text-lg text-blue-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-2 text-blue-700">Get Involved</h2>
        <p className="mb-5 text-gray-700">
          Want to join SkillXchange or partner with us for your institution?
        </p>
        <Link href="/contact">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 text-lg rounded-full">
            Contact Us
          </Button>
        </Link>
        <p className="text-sm text-gray-500 mt-3">📩 connect@skillxchange.com</p>
      </motion.section>
    </div>
  );
}
