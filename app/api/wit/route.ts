import { NextRequest, NextResponse } from "next/server";

const WIT_AI_TOKEN = process.env.WIT_AI_TOKEN;

const intentReplies: Record<string, string[]> = {
  general: [
    "Hi there! How can I assist you today?",
    "Hello! What can I do for you?",
    "Hey! How’s it going?",
  ],
  help: [
    "Sure, what do you need help with?",
    "I'm here to assist you. Please tell me more.",
    "Let me know how I can help you!",
  ],
  goodbye: [
    "Goodbye! Have a great day!",
    "See you later!",
    "Take care! Bye for now!",
  ],
};


export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  const fullContext = history ? history.join(". ") + ". " + message : message;

  try {
    const response = await fetch("https://api.wit.ai/message?v=20220120&q=" + encodeURIComponent(fullContext), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${WIT_AI_TOKEN}`,
      },
    });

    const witResponse = await response.json();
    console.log("Wit.ai Response:", witResponse);

    const detectedIntent = witResponse.intents[0];
    let reply = "I couldn’t quite catch that. Can you rephrase it?";

    if (detectedIntent && detectedIntent.confidence > 0.7) {
      const intentName = detectedIntent.name;


      if (intentReplies[intentName]) {
        const responses = intentReplies[intentName];

        reply = responses[Math.floor(Math.random() * responses.length)];
      } else {
        reply = `I understood your intent as "${intentName}", but I don't have a specific response for it yet.`;
      }
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error communicating with Wit.ai:", error);
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 500 });
  }
}



