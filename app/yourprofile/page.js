"use client"

import React, { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UserProfileDashboard() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "+91-9876543210",
    dob: "2000-01-12",
    interests: "Public Speaking, AI, Leadership",
    skills: ["Communication", "Python", "Problem Solving", "React"],
    experience: "Participated in 10+ mock interviews and 5 group discussions. Led team projects and hosted events.",
    rating: 4,
    review: "Excellent speaker and quick learner!",
    profilePhoto: null
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      <header className="bg-black text-white text-xl font-semibold p-4 rounded-md mb-6">
        Dashboard
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Profile */}
        <div className="col-span-1 p-4 bg-white rounded-md shadow-md">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={userData.profilePhoto || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full px-2 py-1 text-xs cursor-pointer">
                  ✎
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>

            {isEditing ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="text-lg font-bold text-center bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <h2 className="text-lg font-bold text-center">{userData.name}</h2>
            )}
            {isEditing ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="text-sm text-gray-600 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-600">{userData.email}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="text-sm text-gray-600 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-600">{userData.phone}</p>
            )}
            {isEditing ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="text-sm text-gray-600 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-sm text-gray-600">DOB: {userData.dob}</p>
            )}
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="col-span-2 space-y-4">
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Interest</h3>
            {isEditing ? (
              <textarea
                value={userData.interests}
                onChange={(e) => handleChange("interests", e.target.value)}
                className="w-full text-sm text-gray-700 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p>{userData.interests}</p>
            )}
          </div>

          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            {isEditing ? (
              <input
                type="text"
                value={userData.skills.join(", ")}
                onChange={(e) => handleChange("skills", e.target.value.split(", "))}
                className="w-full text-sm text-gray-700 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            {isEditing ? (
              <textarea
                value={userData.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className="w-full text-sm text-gray-700 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p>{userData.experience}</p>
            )}
          </div>

          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Rating</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 cursor-pointer ${
                    i < userData.rating ? "text-blue-500 fill-blue-500" : "text-gray-300"
                  } ${isEditing ? "hover:scale-110" : "pointer-events-none"}`}
                  onClick={() => isEditing && handleChange("rating", i + 1)}
                />
              ))}
            </div>
            {isEditing ? (
              <textarea
                value={userData.review}
                onChange={(e) => handleChange("review", e.target.value)}
                className="w-full text-sm text-gray-700 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p>{userData.review}</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Button at the End */}
      <div className="mt-6 flex justify-center">
        <Button onClick={toggleEdit} className="bg-blue-600 hover:bg-blue-700 text-white">
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>
    </div>
  );
}
