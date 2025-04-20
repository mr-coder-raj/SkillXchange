"use client"

import { useParams } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Page = () => {
    const { id } = useParams()
    const containerRef = useRef()
    const [isJoined, setIsJoined] = useState(false)  // Track whether the meeting is joined or not

    let myMeeting = async (element) => {
        if (isJoined) return  // If already joined, don't join again

        const appID = 1766688893
        const serverSecret = "f0881e4a767ad6852272720a0b4d474f"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id?.toString(),
            Date.now().toString(),
            'Raj Ribadiya'
        )

        const zp = ZegoUIKitPrebuilt.create(kitToken)

        // Ensure the zp instance exists before trying to join the room
        if (zp) {
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url:
                            window.location.protocol + '//' +
                            window.location.host + window.location.pathname,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            })
            setIsJoined(true)  // Set to true once the meeting is joined
        }
    }

    useEffect(() => {
        if (!containerRef.current) {
            console.log('Container not found')
            return
        }

        // Ensure the id exists and the meeting is not already joined
        if (containerRef.current && id && !isJoined) {
            myMeeting(containerRef.current)
        }
    }, [id, isJoined])  // Add isJoined to dependency array

    return (
        <div className='pt-14' style={{ height: '100vh', width: '100vw' }} ref={containerRef} />
    )
}

export default Page
