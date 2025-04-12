export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end("Method Not Allowed");
  
    const { message } = req.body;
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: message }] }],
          }),
        }
      );
  
      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
      res.status(200).json({ reply });
    } catch (error) {
      console.error("Gemini API error:", error);
      res.status(500).json({ reply: "There was an error processing your request." });
    }
  }
  