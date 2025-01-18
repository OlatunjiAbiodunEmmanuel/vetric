'use client'
import { useState } from "react";

export default function Chat() {
  const [prompt, setPrompt] = useState(""); 
  const [chatHistory, setChatHistory] = useState<
    { sender: string; message: string }[]
  >([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    
    setChatHistory((prev) => [...prev, { sender: "user", message: prompt }]);

    setLoading(true);
    setError("");

    try {
     
      const response = await fetch("/api/wit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: prompt,
          history: chatHistory.map((item) => item.message), 
        }),
      });

      const data = await response.json();

     
      setChatHistory((prev) => [...prev, { sender: "bot", message: data.reply }]);
      setPrompt("");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#def1d5] dark:bg-[#121212] flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Chat with VETRIC_AI</h1>
        <div className="mb-4">
          <div className="space-y-2">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  chat.sender === "user"
                    ? "bg-green-200 text-black text-right"
                    : "bg-gray-200 text-black text-left"
                }`}
              >
                {chat.message}
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={3}
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-black font-semibold py-2 rounded-md hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Send"}
          </button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
}

