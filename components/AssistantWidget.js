"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

function AssistantBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Dragging logic (Y-axis only)
  const [positionY, setPositionY] = useState(24);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const y = window.innerHeight - e.clientY - 32;
    const maxY = window.innerHeight - 120;
    const clampedY = Math.max(24, Math.min(y, maxY));
    setPositionY(clampedY);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply || "No response." },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong!" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Chat Box */}
      {open && (
        <div
          className="fixed z-50 w-[90%] sm:w-96 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-h-[80vh]"
          style={{
            bottom: positionY + 64, // chatbox above the icon (icon is ~64px)
            right: 24,
          }}
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 font-bold flex justify-between items-center">
            SkillXchange Assistant
            <button onClick={() => setOpen(false)} className="text-white">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
            style={{ scrollBehavior: "smooth" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 max-w-[80%] text-sm rounded-xl ${
                  msg.role === "assistant"
                    ? "bg-white text-left text-gray-700 shadow border"
                    : "bg-indigo-100 text-right ml-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="animate-pulse text-gray-400 text-sm">
                Assistant is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center border-t p-3 bg-white">
            <input
              className="flex-1 text-sm p-2 border rounded-l-md outline-none"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-md text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Draggable Assistant Icon */}
      <button
        onClick={() => setOpen(!open)}
        onMouseDown={handleMouseDown}
        style={{
          position: "fixed",
          bottom: positionY,
          right: 24,
          zIndex: 50,
          cursor: "grab",
        }}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
        aria-label="Assistant"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </>
  );
}

export default AssistantBot;
