"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch("/api/huggingface", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.message);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray900 textwhite bg-[#def1d5] dark:bg-[#121212] flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Chat with VETRIC_AI</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            className="w-full p-4 textblack rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={5}
          />
          <button
            type="submit"
            className="w-full bg-green-500 textblack font-semibold py-2 rounded-md hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Submit"}
          </button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {response && (
          <div className="mt-6 p-4 border rounded-md border-gray-700 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
