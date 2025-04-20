import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import AssistantWidget from "@/components/AssistantWidget";

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <Head>
        <title>SkillXChange - Exchange Knowledge, Empower Yourself</title>
        <meta name="description" content="SkillXchange - Your modern chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-32 animate-slideIn">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-500 px-3 md:px-0" >
            Welcome to SkillXchange
          </h1>
          <p className="text-lg md:text-2xl mb-8 transition-opacity duration-500 opacity-90">
            Learn, Share and Grow Together!
          </p>
          <Link href="/explore">
            <button className="bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform">
              Get Started
            </button>
          </Link>
        </div>
      </header>



      <div className="h-[1px] bg-gray-900"></div>

      {/* Practice Live */}
      <section className="relative bg-gradient-to-br from-[#f0f4ff] to-white py-24 overflow-hidden animate-slideIn">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <Image
            src="/GD.png"
            width={450}
            height={550}
            alt="Live GD Practice"
            className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Group <span className="text-indigo-600">Discussion</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SkillXChange connects you with real learners and mentors for live.group discussions collaborative environment designed to accelerate growth.
            </p>
            <Link href="/forums">
              <button className="mt-8 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                Start Discussion
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>

        </div>
      </section>

      <div className="h-[1px] bg-gray-900"></div>
      {/* Feedback Section */}
      <section className="relative bg-gradient-to-br from-white to-[#f5f7ff] py-24 overflow-hidden animate-fadeIn">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Accelerate <span className="text-indigo-600">Learning</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SkillXChange empowers you to accelerate your learning through hands-on practice, peer interaction, and expert guidance. Experience fast-tracked growth by engaging in live discussions, mock interviews, and collaborative challenges—all in real time.
            </p>
            <Link href="/explore">
              <button className="mt-8 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                Start Learning                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
          <Image
            src="/AL.jpg"
            width={450}
            height={450}
            alt="AI Feedback"
            className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      <div className="h-[1px] bg-gray-900"></div>
      {/* Growth Section */}
      <section className="relative bg-gradient-to-br from-[#f6f8ff] to-white py-24 overflow-hidden animate-slideIn">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <Image
            src="/Growth.jpg"
            width={450}
            height={450}
            alt="Progress Tracking"
            className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Track <span className="text-indigo-600">Your Growth</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Analyze your skill development with detailed performance charts, leaderboards, and resume tips to showcase your progress effectively.
            </p>
            <Link href="/dashboard">
              <button className="mt-8 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                Go to Dashboard
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gray-900"></div>
      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-white via-indigo-50 to-white py-24 overflow-hidden animate-fadeIn">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-transparent to-purple-100 opacity-10 blur-[100px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-7xl text-blue-700 font-extrabold">SkillXchange</h1>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-8 mb-4">
            Build Skills. Bridge Gaps. Empower Growth.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SkillXChange helps individuals and teams identify strengths, develop in-demand skills, and collaborate on real-world projects—turning potential into performance.
          </p>

          <Link href="/explore">
            <button className="mt-8 bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <AssistantWidget />

      <footer className="bg-gray-900 text-white py-5 text-center flex justify-around items-center">
        <p>&copy; {new Date().getFullYear()} SkillXchange. All rights reserved.</p>
        <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <Image src="/image.png" width={250} height={60} alt='' className='rounded-full mr-2' />
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'SkillXchange - Exchange Knowledge, Empower Yourself',
  description: 'SkillXchange',
} 
