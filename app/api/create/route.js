
// import { StreamChat } from "stream-chat";
// import { clerkClient } from '@clerk/nextjs/server'

// const api_key = "d4y9q7tsmern";
// const api_secret = "hazkhgma3smgbzpbspsbpdzkgdp3n2k9hp2ebwtntrfrnkbf97zuudv6rn6jugng";
// const user_id = "user_2txAM0zJxWR7CoGCcmzvKq68udG";


// export async function POST(request) {
//     const serverClient = StreamChat.getInstance(api_key, api_secret);
//     const user = await request.json()

//     function capitalize(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }


//     // Create User Token
//     const token = serverClient.createToken(user.data.id);
//     console.log("A NEW USER HAS BEEN CREATED", token)
//     const client = await clerkClient
//     await serverClient.upsertUser({ id: user.data.id })

//     // await client.users.updateUserMetadata(user.data.id, {
//     //     privateMetadata: {
//     //         token: token,
//     //     },
//     // })

//     //give access to this user for all chats
//     const slugs = ['Python', 'JS', 'React', 'Node', 'HTMLCSS', 'DataScience']
//     slugs.forEach(async (item) => {
//         const channel = serverClient.channel('messaging', item, {
//             image: 'https://getstream.io/random_png/?name=react',
//             name: capitalize(item) + "Discussion",
//             created_by_id: user.data.id
//         });
//         await channel.create()
//         channel.addMembers([user.data.id])
//     })
//     return Response.json({ message: 'Hello World' })
// }

import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "d4y9q7tsmern";
const api_secret = "hazkhgma3smgbzpbspsbpdzkgdp3n2k9hp2ebwtntrfrnkbf97zuudv6rn6jugng";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    if (!user?.data?.id) {
        return Response.json({ error: "User ID is missing" }, { status: 400 });
    }
    

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token);

    // Ensure user has required fields
    await serverClient.upsertUser({
        id: user.data.id,
        name: user.data.name || "Anonymous User",
    });

    // Update Clerk metadata
    await clerkClient.users.updateUser(user.data.id, {
        privateMetadata: { token },
    });

    // Add user to all chat channels
    const slugs = ["Python", "JS", "React", "Node", "HTMLCSS", "DataScience"];
    for (const item of slugs) {
        const channel = serverClient.channel("messaging", item, {
            image: "https://getstream.io/random_png/?name=react",
            name: capitalize(item) + " Discussion",
            created_by_id: user.data.id,
        });

        await channel.create();
        await channel.addMembers([user.data.id]);
    }

    return Response.json({ message: "User successfully added to chats" });
}
