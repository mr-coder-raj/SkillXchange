"use client"

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const roomId = useRef(null)
    const router = useRouter()

    return (
        <div className="h-[92vh] w-[100vw] flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Join a Meeting</h1>
                <input
                    type="text"
                    ref={roomId}
                    placeholder="Enter Meeting ID"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={() => router.push(`/room/${roomId.current?.value}`)}
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Join Meeting
                </button>
            </div>
        </div>
    )
}

export default Page
