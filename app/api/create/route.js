import { clerkClient } from "@clerk/nextjs/server";
import { StreamChat } from "stream-chat"

const api_key = "qshfzk7b6unm";
const api_secret = "v2bjpggnd3txerdpnm63pugw363nsgzhsv2bgj9k26huxz6tkwcyy7vatadz5rma";
// const user_id = "user_2vcMuCjCYNsygCM1AzNl5WMmca7";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //create user token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED", token)
    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id })

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        }
    })


    //Give access to this user for all chats
const slugs = ["DSA", "Development", "AI", "Marketing", "Startups", "BlockChain"]
    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item) + " Discussion",
            // members: [userId],
            created_by_id: user.data.id
        });
        await channel.create();
        channel.addMembers([user.data.id])
    });

    return Response.json({ message: "Success" })
}