"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/firebaseConfig";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

// Replace with actual logic to get the user ID (e.g., from Firebase Auth)
const USER_ID = "user-id"; // Replace 'user-id' with the actual user ID

export default function UserProfileDashboard() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "+91-",
    dob: "",
    bio: "",
    interests: "",
    skills: [""],
    experience: "",
    location: "",
    status: "Active",
    linkedIn: "",
    gitHub: "",
    profilePhoto: null
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", USER_ID); // Fetch data using user ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error fetching document:", e);
      }
    };

    fetchUserData();
  }, []);

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

  const toggleEdit = async () => {
    if (isEditing) {
      try {
        const docRef = doc(db, "users", USER_ID); // Use USER_ID to update data
        await setDoc(docRef, userData); // Use setDoc to overwrite or create the document
        console.log("Document updated with ID: ", USER_ID);
      } catch (e) {
        console.error("Error saving document: ", e);
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24 transition-all ease-in-out duration-500 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-2xl space-y-8">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-2xl font-semibold p-6 rounded-xl shadow-lg mb-8 text-center">
          Dashboard
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Profile */}
          <div className="col-span-1 p-6 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={userData.profilePhoto || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover shadow-xl transition-all duration-300 hover:scale-105"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full px-4 py-2 text-xs cursor-pointer transition-all ease-in-out hover:scale-105">
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
                  value={userData.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="text-xl font-semibold text-center bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <h2 className="text-xl font-semibold text-center">{userData.name || ""}</h2>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 font-medium">Email:</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={userData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="text-sm text-gray-600 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <p className="text-sm text-gray-600">{userData.email || "Not Provided"}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 font-medium">Phone:</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.phone || "+91-"}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="text-sm text-gray-600 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <p className="text-sm text-gray-600">{userData.phone || "+91-"}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 font-medium">DOB:</p>
                {isEditing ? (
                  <input
                    type="date"
                    value={userData.dob || ""}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    className="text-sm text-gray-600 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <p className="text-sm text-gray-600">{userData.dob || "Not Provided"}</p>
                )}
              </div>

              {/* Bio Section */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 font-medium">Bio:</p>
                {isEditing ? (
                  <textarea
                    value={userData.bio || ""}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    className="w-full text-sm text-gray-600 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <p className="text-sm text-gray-600">{userData.bio || "Not Provided"}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Other Info */}
          <div className="col-span-2 space-y-6">
            <div className="p-6 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-4">Interests</h3>
              {isEditing ? (
                <textarea
                  value={userData.interests || ""}
                  onChange={(e) => handleChange("interests", e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <p>{userData.interests || "Not Provided"}</p>
              )}
            </div>

            <div className="p-6 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={userData.skills.join(", ") || ""}
                  onChange={(e) => handleChange("skills", e.target.value.split(", ").map(s => s.trim()))}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {userData.skills.length > 0
                    ? userData.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs">
                          {skill}
                        </span>
                      ))
                    : "No skills added"}
                </div>
              )}
            </div>

            <div className="p-6 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-4">Experience</h3>
              {isEditing ? (
                <textarea
                  value={userData.experience || ""}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <p>{userData.experience || "Not Provided"}</p>
              )}
            </div>

            <div className="p-6 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={userData.location || ""}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                />
              ) : (
                <p>{userData.location || "Not Provided"}</p>
              )}
            </div>

            <div className="p-6 bg-white rounded-xl shadow-2xl transform transition-all hover:scale-105">
              <h3 className="text-lg font-semibold mb-4">Profile Status</h3>
              {isEditing ? (
                <select
                  value={userData.status || "Active"}
                  onChange={(e) => handleChange("status", e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              ) : (
                <p>{userData.status || "Active"}</p>
              )}
            </div>
          </div>
        </div>

        {/* Edit Button at the End */}
        <div className="mt-8 flex justify-center">
          <Button onClick={toggleEdit} className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l text-white px-8 py-3 rounded-xl shadow-lg transform transition-all hover:scale-105">
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      </div>
    </div>
  );
}
