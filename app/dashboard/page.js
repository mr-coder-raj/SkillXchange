"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/firebaseConfig";
import { collection, doc, setDoc, getDoc, getDocs, addDoc } from "firebase/firestore";
import { StarIcon } from "@heroicons/react/24/solid";

// Replace with actual logic to get the user ID (e.g., from Firebase Auth)
const USER_ID = "user-id"; // Replace 'user-id' with the actual user ID

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`} />
    );
  }
  return stars;
};

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
    profilePhoto: null,
    role: "Professional", // Default role
  });

  const [userReviewsGiven, setUserReviewsGiven] = useState([
    { rating: 5, comment: "Excellent service! Highly recommended.", timestamp: { seconds: Date.now() / 1000 - 86400, nanoseconds: 0 } }, // Yesterday
    { rating: 4, comment: "Good experience, met expectations.", timestamp: { seconds: Date.now() / 1000 - 172800, nanoseconds: 0 } }, // Two days ago
    { rating: 5, comment: "Another great interaction. Will use again.", timestamp: { seconds: Date.now() / 1000 - 259200, nanoseconds: 0 } }, // Three days ago
    { rating: 3, comment: "It was okay, some areas for improvement.", timestamp: { seconds: Date.now() / 1000 - 345600, nanoseconds: 0 } }, // Four days ago
  ]);
  const [userReviewsReceived, setUserReviewsReceived] = useState([
    { rating: 5, comment: "A pleasure to work with. Very professional.", reviewer: "Client A", timestamp: { seconds: Date.now() / 1000 - 43200, nanoseconds: 0 } }, // Half a day ago
    { rating: 5, comment: "Delivered high-quality work on time.", reviewer: "Client B", timestamp: { seconds: Date.now() / 1000 - 259200, nanoseconds: 0 } }, // Three days ago
    { rating: 4, comment: "Good communication and skills.", reviewer: "Client C", timestamp: { seconds: Date.now() / 1000 - 604800, nanoseconds: 0 } }, // A week ago
    { rating: 5, comment: "Exceptional talent and dedication.", reviewer: "Client D", timestamp: { seconds: Date.now() / 1000 - 691200, nanoseconds: 0 } }, // Eight days ago
    { rating: 4, comment: "Overall satisfied with the outcome.", reviewer: "Client E", timestamp: { seconds: Date.now() / 1000 - 777600, nanoseconds: 0 } }, // Nine days ago
  ]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", USER_ID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }

        // Fetch user's given reviews from Firebase
        const reviewsGivenRef = collection(db, "users", USER_ID, "reviewsGiven");
        const reviewsGivenSnap = await getDocs(reviewsGivenRef);
        const givenReviewsFromDb = reviewsGivenSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Combine demo reviews with fetched reviews (demo reviews will be shown initially)
        setUserReviewsGiven([...userReviewsGiven, ...givenReviewsFromDb]);

        // Fetch user's received reviews from Firebase
        const reviewsReceivedRef = collection(db, "users", USER_ID, "reviewsReceived");
        const reviewsReceivedSnap = await getDocs(reviewsReceivedRef);
        const receivedReviewsFromDb = reviewsReceivedSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Combine demo reviews with fetched reviews (demo reviews will be shown initially)
        setUserReviewsReceived([...userReviewsReceived, ...receivedReviewsFromDb]);

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
        const docRef = doc(db, "users", USER_ID);
        await setDoc(docRef, userData);
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
        <header className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-2xl font-semibold p-6 rounded-xl shadow-lg mb-8 text-center">
          Dashboard
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
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
              {/* Email */}
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

              {/* Phone */}
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

              {/* DOB */}
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

              {/* Bio */}
              <div>
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

          {/* Profile Details */}
          <div className="col-span-2 space-y-6">
            {/* Interests */}
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Interests</h3>
              {isEditing ? (
                <textarea
                  value={userData.interests || ""}
                  onChange={(e) => handleChange("interests", e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md"
                />
              ) : (
                <p>{userData.interests || "Not Provided"}</p>
              )}
            </div>

            {/* Skills */}
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={userData.skills.join(", ")}
                  onChange={(e) =>
                    handleChange("skills", e.target.value.split(",").map((s) => s.trim()))
                  }
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md"
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

            {/* Experience */}
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Experience</h3>
              {isEditing ? (
                <textarea
                  value={userData.experience || ""}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  className="w-full text-sm text-gray-700 border border-gray-300 p-4 rounded-md"
                />
              ) : (
                <p>{userData.experience || "Not Provided"}</p>
              )}
            </div>

            {/* Feedback History (Reviews Received) */}
            <div className="p-6 bg-white rounded-xl shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Feedback Received</h3>
              <div className="space-y-4 overflow-y-auto max-h-64"> {/* Added scrollbar */}
                {userReviewsReceived.length > 0 ? (
                  userReviewsReceived.map((review, idx) => (
                    <div key={idx} className="border-b pb-4">
                      <div className="flex items-center mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="font-semibold">{review.comment}</p>
                      {review.reviewer && <p className="text-xs text-gray-500">- {review.reviewer}</p>}
                      {review.timestamp && (
                        <p className="text-xs text-gray-500">
                          {new Date(review.timestamp.seconds * 1000).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No feedback received yet.</p>
                )}
              </div>
            </div>

            {/* Reviews Given by Client */}
      
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center">
          <Button className="mt-8" onClick={toggleEdit}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      </div>
    </div>
  );
}