import React from "react";
import {
  BookOpen,
  Users,
  Brain,
  Code,
  Globe,
  LineChart,
  Network,
  Hammer,
} from "lucide-react";


const discussionTopics = [
  { title: "DSA", icon: <Code className="text-blue-600" /> },
  { title: "Web Development", icon: <Globe className="text-blue-600" /> },
  { title: "AI", icon: <Brain className="text-blue-600" /> },
  { title: "Marketing", icon: <LineChart className="text-blue-600" /> },
  { title: "Startups", icon: <Hammer className="text-blue-600" /> },
  { title: "Blockchain", icon: <Network className="text-blue-600" /> },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 pt-20">
      <header className="text-4xl font-extrabold text-blue-800 mb-8 text-center">
        🌐 Explore SpeakSpace
      </header>

      {/* Discussion Forums Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">💬 Discussion Forums</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {discussionTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 cursor-pointer"
            >
              <div className="w-10 h-10">{topic.icon}</div>
              <span className="text-lg font-medium text-blue-800">{topic.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mock Interview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">🎤 Mock Interviews</h2>
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-2xl shadow-lg text-gray-700 hover:scale-105 transition-transform">
          <p className="text-lg mb-4">
            Practice mock interviews in real-time with peers or mentors. Improve your speaking skills, body language and confidence.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl hover:bg-blue-700 transition-all ease-in-out duration-300">
            Start a Mock Interview
          </button>
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">📚 Resources</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ResourceCard title="Interview Tips" icon={<BookOpen />} />
          <ResourceCard title="Resume Builder" icon={<Users />} />
          <ResourceCard title="Soft Skills Guide" icon={<Brain />} />
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ title, icon }) {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl shadow-lg flex items-center gap-6 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300 transition-all transform hover:scale-105">
      <div className="text-blue-600 w-12 h-12">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      </div>
    </div>
  );
}
