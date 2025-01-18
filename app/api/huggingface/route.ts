/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  // Validate the prompt
  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Invalid prompt' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/gpt-3', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_HUGGINGFACE_API_KEY`, // Use your Hugging Face API key here
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'Error from Hugging Face API' }, { status: 500 });
    }

    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json({ error: 'Error processing the request' }, { status: 500 });
  }
}
