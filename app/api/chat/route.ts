// 'use server'

// import {ChatOpenAI} from "@langchain/openai"

// const chatModal = new ChatOpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// })

// export async function generateRecipes(prompt: string) {
//     prompt = `Generate three recipes for ${prompt} dish. the output should be in JSON array and each object should contain a recipe name field named 'name' description field named 'description', array of ingridents named 'ingrdents' and array of step by step instructions named 'instructions'.`
//     const response = await chatModal.invoke(prompt)
//     return JSON.parse(response.content as string)
// }

import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        { status: 400 }
      );
    }

    const formattedPrompt = `Generate three recipes for ${prompt} dish. The output should be in JSON array and each object should contain a recipe name field named 'name', description field named 'description', array of ingredients named 'ingredients', and array of step-by-step instructions named 'instructions'.`;
    const response = await chatModel.invoke(formattedPrompt);
    const recipes = JSON.parse(response.content as string);

    return new Response(JSON.stringify(recipes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating recipes:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate recipes" }),
      { status: 500 }
    );
  }
}
