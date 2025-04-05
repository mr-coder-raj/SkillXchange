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
            Welcome to SkillXchange
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Learn, Share and Grow Together!
          </p>
          <Link href="/explore">
            <button className="bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
          </Link>

        </div>
      </header>

      {/* KEy features 1 */}
      <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold mb-12 text-purple-800 tracking-tight leading-tight">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                ),
                title: "Real-time Messaging",
                text: "Experience instant communication with our lightning-fast messaging."
              },
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </>
                ),
                title: "Secure and Private",
                text: "Your privacy is our priority. Enjoy secure and encrypted conversations."
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

      <section className="pb-20 bg-white">
        <div className="container mx-auto text-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <>
                    <circle cx="12" cy="6" r="4"></circle>
                    <circle cx="6" cy="18" r="4"></circle>
                    <circle cx="18" cy="18" r="4"></circle>
                    <line x1="8" y1="15" x2="12" y2="10"></line>
                    <line x1="16" y1="15" x2="12" y2="10"></line>
                  </>
                ),
                title: "Connect",
                text: "You can connect by search or by your Experience to user or tutor."
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

      {/* Nichenu section skilll walu */}
      <section className="relative bg-gradient-to-br from-[#f0f4ff] to-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Image src="/sec1.jpg" width={450} height={450} alt="Accelerate Learning" className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Accelerate <span className="text-indigo-600">Learning</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At SkillXchange, we boost learning with personalized AI-based assessments, identifying skill gaps and recommending growth paths for your team.
            </p>
            <Link href="/learn-more">
              <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gray-200"></div>

      <section className="relative bg-gradient-to-br from-white to-[#f5f7ff] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Optimize Your <span className="text-indigo-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SkillXchange helps you assess and develop employee skills while identifying critical skill gaps, aligning your workforce with business goals to improve efficiency.
            </p>
            <Link href="/learn-more">
              <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
          <Image src="/sec3.jpg" width={450} height={450} alt="Team Skills" className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
        </div>
      </section>

      <div className="h-[1px] bg-gray-200"></div>

      <section className="relative bg-gradient-to-br from-[#f6f8ff] to-white py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-30 -z-10"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Image src="/sec2.jpg" width={450} height={450} alt="Find Talent" className="rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Find Top <span className="text-indigo-600">Talent</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SkillXchange optimizes hiring by enhancing job descriptions, custom assessments, and syndication across job boards to connect with top talent faster.
            </p>
            <Link href="/learn-more">
              <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                Learn More
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
          <Image src="/mainlogo.png" width={300} height={300} alt="SkillXchange Logo" className="mx-auto rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md" />
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
  title: 'SkillXChange - Exchange Knowledge, Empower Yourself',
  description: 'PieChat helps you connect with people of your choice',
}