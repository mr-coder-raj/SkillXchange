"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { auth, useUser } from "@clerk/nextjs";

import 'stream-chat-react/dist/css/v2/index.css';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
    const apiKey = 'd4y9q7tsmern';
    const userId = clerkUser.id;
    const userName = clerkUser.name;
    const userToken = clerkUser.token;

    console.log("Clerk User:", clerkUser);


    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };

    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });


//     const client = userToken
//     ? useCreateChatClient({
//         apiKey,
//         tokenOrProvider: userToken,
//         userData: user,
//     })
//     : null;

// if (!userToken) {
//     return <div>Error: Missing user token</div>;
// }


    useEffect(() => {
        if (!client) return;

        const channel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(slug) + "Discussion",
        });

        setChannel(channel);
        // channel.addMembers([userId])
    }, [client]);

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
}

export default ChatForum
