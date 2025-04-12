'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [userRating, setUserRating] = useState(4.2);
  const [sessionRatings, setSessionRatings] = useState([4, 5, 4, 5, 3, 4, 4, 4, 5, 4]);

  const handleRatingChange = (rating) => {
    const updatedRatings = [...sessionRatings.slice(1), rating];
    const average = updatedRatings.reduce((a, b) => a + b, 0) / updatedRatings.length;
    setSessionRatings(updatedRatings);
    setUserRating(average.toFixed(1));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Join Live GD / Interview</h2>
          <p className="text-gray-600 mb-4">Participate in ongoing sessions as a participant, evaluator or moderator.</p>
          <Link href="/join-session" className="text-indigo-600 font-medium hover:underline">Join Now →</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Your Feedback</h2>
          <p className="text-gray-600 mb-4">Check recent feedback on your sessions. Improve with AI-based insights.</p>
          <Link href="/feedback" className="text-indigo-600 font-medium hover:underline">View Feedback →</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Progress Overview</h2>
          <p className="text-gray-600 mb-4">Monitor your weekly improvements in confidence, communication, and logic.</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-700">Confidence: ⭐⭐⭐⭐☆</p>
            <p className="text-sm text-gray-700">Communication: ⭐⭐⭐⭐☆</p>
            <p className="text-sm text-gray-700">Logic: ⭐⭐⭐☆☆</p>
          </div>
          <Link href="/progress" className="block mt-2 text-indigo-600 font-medium hover:underline">Detailed Analytics →</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Your Rating</h2>
          <p className="text-gray-600 mb-4">Average session rating based on evaluator feedback.</p>
          <div className="text-3xl font-bold text-indigo-600">{userRating} / 5 ⭐</div>
          <p className="text-sm text-gray-500 mt-2">Based on last {sessionRatings.length} sessions</p>
          <div className="mt-4 flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`text-2xl ${star <= Math.round(userRating) ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
          <p className="text-gray-600 mb-4">See how you rank among others and stay motivated.</p>
          <Link href="/leaderboard" className="text-indigo-600 font-medium hover:underline">View Leaderboard →</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Resume Tips</h2>
          <p className="text-gray-600 mb-4">Get personalized resume building suggestions based on your sessions.</p>
          <Link href="/resume" className="text-indigo-600 font-medium hover:underline">Get Tips →</Link>
        </div>
      </div>
    </div>
  );
}
