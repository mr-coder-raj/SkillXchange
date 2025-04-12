import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

const Forums = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-20 min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800 drop-shadow-sm">Discussion Forums</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default Forums;