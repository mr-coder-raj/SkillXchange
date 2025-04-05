"use client";

import { useState, useEffect } from "react";
import { FaRegSmile } from "react-icons/fa";
import { FiSend, FiPhone, FiVideo } from "react-icons/fi";
import { IoCheckmark, IoCheckmarkDone } from "react-icons/io5";

const randomReplies = [
  "That's interesting!", "Wow, really?", "Haha, that's funny!", "Tell me more!",
  "I totally agree!", "Hmm, I'm not sure about that.", "That sounds great!",
  "Kya baat kar rahe ho?", "Sach me?!", "Bahut accha!", "Mujhe yeh pasand aaya!",
  "Aur batao?", "Really amazing!", "Unexpected response!", "Sahi baat hai!"
];

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { text: "Hey! How are you?", sender: "other", seen: true },
    { text: "I'm good! What about you?", sender: "me", seen: true },
    { text: "Working on some projects.", sender: "other", seen: true },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages((msgs) =>
        msgs.map((msg) => (msg.sender === "me" ? { ...msg, seen: true } : msg))
      );
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "me", seen: false }];
    setMessages(newMessages);
    setInput("");
    setTimeout(() => {
      const reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
      setMessages([...newMessages, { text: reply, sender: "other", seen: true }]);
    }, 1800);
  };

  return (
    <div className="w-full h-[90.5vh] bg-gradient-to-br from-white to-indigo-50 flex flex-col rounded-3xl shadow-xl overflow-hidden pt-16">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <img src="/user.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-500" />
          <span className="font-bold text-gray-800 text-lg">Cristiano Ronaldo</span>
        </div>
        <div className="flex gap-4 text-indigo-500 text-xl">
          <FiPhone className="cursor-pointer hover:text-indigo-700" />
          <FiVideo className="cursor-pointer hover:text-indigo-700" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`relative px-5 py-3 max-w-sm rounded-2xl shadow-md text-sm transition-all duration-300 
              ${msg.sender === "me"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-br-none"
                : "bg-gray-100 text-gray-800 rounded-bl-none"}`}
            >
              {msg.text}
              {msg.sender === "me" && (
                <span className="absolute -bottom-4 right-2 text-xs text-white flex items-center">
                  {msg.seen ? <IoCheckmarkDone className="text-white" /> : <IoCheckmark className="text-white" />}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white flex items-center gap-3 border-t">
        <FaRegSmile className="text-2xl text-gray-400 cursor-pointer hover:text-yellow-400" />
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-gray-100 rounded-full border border-gray-300 text-gray-800 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full shadow-md"
        >
          <FiSend className="text-xl" />
        </button>
      </div>
    </div>
  );
}