import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SkillXChange - Exchange Knowledge, Empower Yourself</title>
        <meta name="description" content="SkillXchange - Your modern chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-16 pt-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to SpeakSpace
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Space to grow, learn and succeed!
          </p>
          <Link href="/explore">
            <button className="bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </Link>

        </div>
      </header>



      <section className="pb-20 pt-10 bg-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold mb-12 text-purple-800 tracking-tight leading-tight">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                ),
                title: "Group Chats",
                text: "Stay connected with multiple Experienced persons in group chats."
              },
              {
                icon: (
                  <>
                    <rect x="3" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    <polygon points="16 10 21 7 21 17 16 14"></polygon>
                  </>
                ),
                title: "Video Chats",
                text: "People can do live video chat as they scheduled."
              },
              {
                icon: (
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"></path>
                ),
                title: "Ratings and Overview",
                text: "People can give rating to a user on SkillXchange as his/her Experience"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-200"
              >
                <svg
                  className="w-14 h-14 mx-auto mb-5 text-purple-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[2px] bg-gray-900"></div>

      <section className="relative bg-gradient-to-br from-[#f0f4ff] to-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Image src="/practice.jpg" width={450} height={450} alt="Live GD Practice" className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Practice <span className="text-indigo-600">Live</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SpeakSpace lets you practice real-time Group Discussions and Interviews with actual participants, evaluators, and moderators to mimic real-world settings.
            </p>
            <Link href="/practice">
              <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                Start Practicing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gray-200"></div>

      {/* Section 2: AI Feedback */}
      <section className="relative bg-gradient-to-br from-white to-[#f5f7ff] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Real-Time <span className="text-indigo-600">Feedback</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Receive instant feedback from evaluators and AI on confidence, logic, and communication skills — helping you improve with each session.
            </p>
            <Link href="/feedback">
              <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                View Feedback
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
          <Image src="/feedback.jpg" width={450} height={450} alt="AI Feedback" className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
        </div>
      </section>

      <div className="h-[1px] bg-gray-200"></div>

      {/* Section 3: Track Progress */}
      <section className="relative bg-gradient-to-br from-[#f6f8ff] to-white py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Image src="/progress.jpg" width={450} height={450} alt="Progress Tracking" className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Track <span className="text-indigo-600">Your Growth</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Analyze your skill development with detailed performance charts, leaderboards, and resume tips to showcase your progress effectively.
            </p>
            <Link href="/yourprofile">
              <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                Go to Dashboard
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gray-200"></div>

      <section className="relative bg-gradient-to-br from-white via-indigo-50 to-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-transparent to-purple-100 opacity-10 blur-[100px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-7xl text-blue-700 font-extrabold">SpeakSpace</h1>
          <h2 className="text-5xl font-extrabold text-gray-900 mt-8 mb-4">Ready to Build a Better Workforce?</h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Taking a skills inventory aligns your team’s strengths and roles to enhance productivity and drive success.
          </p>
          <Link href="/explore">
            <button className="mt-8 bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>





      <footer className="bg-gray-900 text-white py-5 text-center flex justify-around items-center">
        <p>&copy; {new Date().getFullYear()} SkillXChange. All rights reserved.</p>
        <div className="cursor-pointer">
          <Image src="/image.png" width={250} height={60} alt='' className='rounded-full mr-2' />
        </div>

      </footer>
      

    </div>
    
  );
}

export const metadata = {
  title: 'SpeakSpace',
  description: 'SpeakSpace',
}