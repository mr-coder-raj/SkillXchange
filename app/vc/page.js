// pages/mock-interviews.js
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SkillXChangePage = () => {
  return (
    <section className="h-[88vh] flex justify-center items-center py-12 mb-24">
      <div className="bg-gradient-to-r from-indigo-200 to-indigo-300 p-10 rounded-3xl shadow-2xl text-center max-w-4xl mx-auto">
        <button>
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">🚀 SkillXChange</h2>
        </button>
        <p className="text-gray-800 mb-6 text-md">
          SkillXChange is a dynamic platform where you can exchange skills, engage in collaborative learning, and enhance your knowledge by interacting with experts and peers. Whether you're looking to improve your technical skills, develop soft skills, or mentor others, SkillXChange provides the perfect environment to grow.
        </p>
        <Link href="/videochat">
          <Button className="bg-indigo-700 hover:bg-indigo-900 text-white px-8 py-3 rounded-full text-sm shadow-lg">
            Start a SkillXchange
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SkillXChangePage;
