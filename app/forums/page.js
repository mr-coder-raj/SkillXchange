import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Users, Brain } from 'lucide-react';

const topics = [
  {
    text: 'Python',
    img: '/python.png',
    desc: 'Let’s discuss everything related to Python.',
    slug: 'PythonNew',
  },
  {
    text: 'JavaScript',
    img: '/javascript.png',
    desc: 'A place to talk about all things JavaScript.',
    slug: 'JSNew',
  },
  {
    text: 'React',
    img: '/react.png',
    desc: 'Discuss React.js, React Native, and related technologies.',
    slug: 'ReactNew',
  },
  {
    text: 'Node.js',
    img: '/nodejs.png',
    desc: 'Backend JavaScript development with Node.js.',
    slug: 'NodeNew',
  },
  {
    text: 'HTML/CSS',
    img: '/htmlcss.png',
    desc: 'Front-end development with HTML and CSS.',
    slug: 'HTMLCSSNew',
  },
  {
    text: 'Data Science',
    img: '/datascience.png',
    desc: 'Discussions on data analysis, machine learning, and AI.',
    slug: 'DataScienceNew',
  },
];

const resources = [
  { title: 'Interview Tips', icon: <BookOpen className="w-8 h-8 text-indigo-700" /> },
  { title: 'Resume Builder', icon: <Users className="w-8 h-8 text-indigo-700" /> },
  { title: 'Soft Skills Guide', icon: <Brain className="w-8 h-8 text-indigo-700" /> },
];

const Forums = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-20 min-h-screen pt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-5xl font-extrabold text-blue-800 mb-8 text-center">
          🌐 Explore SpeakSpace
        </header>

        {/* Forum Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {topics.map((topic) => (
            <div
              key={topic.slug}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col items-center text-center"
            >
              <Image
                src={topic.img}
                width={70}
                height={70}
                alt={topic.text}
                className="rounded-full mb-4 shadow-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{topic.text}</h2>
              <p className="text-gray-600 mb-4 text-sm">{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
                <Button className="bg-indigo-600 hover:bg-indigo-800 text-white rounded-full px-6 py-2 text-sm shadow-md">
                  Discuss Now
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Mock Interviews Section */}
        <section className="mb-24">
          <div className="bg-gradient-to-r from-indigo-200 to-indigo-300 p-10 rounded-3xl shadow-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-indigo-900 mb-4">🎤 Mock Interviews</h2>
            <p className="text-gray-800 mb-6 text-md">
              Practice real-time mock interviews with peers or mentors. Boost your confidence, improve communication, and get feedback.
            </p>
            <Button className="bg-indigo-700 hover:bg-indigo-900 text-white px-8 py-3 rounded-full text-sm shadow-lg">
              Start a Mock Interview
            </Button>
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-10">📚 Premium Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 bg-indigo-100 rounded-full">{res.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{res.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forums;
