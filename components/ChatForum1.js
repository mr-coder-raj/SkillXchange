"use client"

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

// your Stream app information
const apiKey = 'd4y9q7tsmern';
// const userId = 'user_2tZyPbcf8F0Gxpmf0JB36Ex0K2u';
// const userName = 'Raj';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8ydFp5UGJjZjhGMEd4cG1mMEpCMzZFeDBLMnUifQ.nmz7WuXyxxGr_4OFdEsb1ca1ymNSQgLPmX_z0t2MNvg';


export default function ChatForum({ slug }) {
    const { isLoaded, clerkUser } = useUser()
    const [user, setuser] = useState()

    useEffect(() => {
        const userId = clerkUser?.id;
        const userName = clerkUser?.firstName;
        if (isLoaded) {
            const user = {
                id: userId,
                name: userName,
                image: `https://getstream.io/random_png/?name=${userName}`,
            };
            setuser(user)
        }

    }, [isLoaded])


    function toTitleCase(str) {
        return str.replace(
            /\b[a-z]/g,
            (char) => char.toUppercase()
        )
    }
    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(() => {
        if (!client) return;

        const channel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: toTitleCase(slug.replace(/-/g, " ")) + ' Discussion',
            members: [userId],
        });

        setChannel(channel);
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
};
