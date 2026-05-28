"use client";

import { useState } from 'react';

export default function Chatbot() {
  // State to remember if the chat window is open or closed
  const [isOpen, setIsOpen] = useState(false);
  
  // State to store our chat messages. We start with a greeting!
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hari Om! I am the NanakPanth AI assistant. How can I help you explore the historical manuscripts today?' }
  ]);
  
  // State to remember what the user is currently typing
  const [input, setInput] = useState('');

  // Function to handle sending a message
  // Function to handle sending a message to our new API
  const handleSend = async () => {
    if (!input.trim()) return; 

    // 1. Add the user's message to the chat UI immediately
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput(''); // Clear the input box

    try {
      // 2. Send the message to our Next.js backend API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // 3. Add the server's reply to the chat UI
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Apologies, I am having trouble connecting to the server right now.' }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* The Chat Window (Only visible if isOpen is true) */}
      {isOpen && (
        <div className="bg-white border border-stone-200 w-80 md:w-96 h-[30rem] rounded-2xl shadow-2xl mb-4 flex flex-col overflow-hidden">
          
          {/* Chat Header */}
          <div className="bg-stone-800 text-stone-50 px-5 py-4 flex justify-between items-center">
            <h3 className="font-serif font-medium tracking-wide">NanakPanth Scholar AI</h3>
            <button onClick={() => setIsOpen(false)} className="text-stone-300 hover:text-white text-xl leading-none">
              ×
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-grow p-5 overflow-y-auto bg-stone-50 space-y-4 text-sm">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${msg.role === 'user' ? 'bg-stone-200 text-stone-800 rounded-tr-sm' : 'bg-white border border-stone-200 text-stone-700 shadow-sm rounded-tl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Area */}
          <div className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..." 
              className="flex-grow px-4 py-2 bg-stone-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-stone-300 text-sm text-stone-800"
            />
            <button 
              onClick={handleSend}
              className="bg-stone-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              Send
            </button>
          </div>

        </div>
      )}

      {/* The Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-stone-800 text-white p-4 rounded-full shadow-xl hover:bg-stone-700 hover:scale-105 transition-all duration-200 flex items-center justify-center float-right"
      >
        {isOpen ? (
          <span className="text-xl leading-none px-1">↓</span> // Arrow down when open
        ) : (
          <span className="text-lg font-serif italic px-2">Ask AI</span> // Text when closed
        )}
      </button>

    </div>
  );
}