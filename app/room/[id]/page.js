"use client"

import { useParams } from 'next/navigation'
import React, { useRef, useEffect } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Page = () => {
    const { id } = useParams()
    const containerRef = useRef()

    let myMeeting = async (element) => {
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
    }

    useEffect(() => {
        if (!containerRef.current) {
            console.log('Container not found')
            return
        }
        if (containerRef.current && id) {
            myMeeting(containerRef.current);
        }
    }, [id])

    return (
        <div style={{ height: '100vh', width: '100vw' }} ref={containerRef} />
    )
}

export default Page
