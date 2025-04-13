"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

function AssistantBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
          className="fixed bottom-0 right-0 sm:bottom-24 sm:right-6 z-50 w-full sm:w-96 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-h-[80vh]"
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 font-bold flex justify-between items-center">
            SpeakSpace Assistant
            <button onClick={() => setOpen(false)} className="text-white">✕</button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
            style={{ scrollBehavior: "smooth" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 max-w-[80%] text-sm rounded-xl ${msg.role === "assistant"
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

      {/* Assistant Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
        aria-label="Assistant"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </>
  );
}

export default AssistantBot;
