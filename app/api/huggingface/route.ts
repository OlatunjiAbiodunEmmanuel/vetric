import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  // Check if prompt is valid
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Invalid prompt' });
  }

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/gpt-3', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_HUGGINGFACE_API_KEY`, // Use your Hugging Face API key
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: 'Error from Hugging Face API' });
    }

    // Send the response back to the client
    return res.status(200).json({ message: data });
  } catch (error) {
    return res.status(500).json({ error: 'Error processing the request' });
  }
}
