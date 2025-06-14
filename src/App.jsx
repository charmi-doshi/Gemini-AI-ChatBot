import React, { useState } from "react";
import { Send, X, MessageSquare } from "lucide-react";
import axios from "axios";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const apiKey = import.meta.env.VITE_GEMINI_KEY;
    if (!apiKey) {
      setResponse("Missing Gemini API key. Please set VITE_GEMINI_KEY in your .env file.");
      return;
    }

    setLoading(true);
    setResponse("Generating response...");

    try {
      const geminiRes = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",
        {
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        },
        {
          params: { key: apiKey },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const text = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      setResponse(text);
    } catch (error) {
      console.error("Gemini Error:", error);
      setResponse("Error fetching response from Gemini.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-t-xl p-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              Gemini ChatBot
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-green-400 text-sm">
              Connected
            </span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-lg p-4 md:p-6 min-h-[400px] flex flex-col gap-4">
          {/* Prompt Section */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-300 mb-2">
              Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Type your message here..."
            />
          </div>

          {/* Response Section */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-purple-300 mb-2">
              Response
            </label>
            <div className="w-full min-h-32 bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-slate-300">
              {loading ? "Loading..." : response || "Response will appear here..."}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white/5 backdrop-blur-lg rounded-b-xl p-4 flex items-center justify-between gap-4 border-t border-white/10">
          <button
            onClick={() => {
              setPrompt("");
              setResponse("");
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            <X className="w-4 h-4" />
            <span className="hidden md:inline">Clear</span>
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            disabled={loading}
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
