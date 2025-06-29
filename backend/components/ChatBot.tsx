// components/ChatBot.tsx
'use client';
import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Fetch bot response (replace with your backend or OpenAI)
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    const botMsg = { sender: 'bot', text: data.reply };

    setMessages((prev) => [...prev, botMsg]);
    setInput('');
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <div className="h-64 overflow-y-auto border-b mb-4 p-2 ">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-${msg.sender === 'user' ? 'right' : 'left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-800' : 'bg-red-800'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="bg-blue-500 text-white px-4" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
