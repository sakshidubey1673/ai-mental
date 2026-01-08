
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Heart, ShieldAlert } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello, I'm Serenity. I'm here to listen, support, and help you through whatever's on your mind today. How are you feeling?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      text: m.content
    }));

    const responseText = await getGeminiResponse(input, history);
    
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseText || "I'm here for you, but I'm having a small technical glitch. Could you say that again?",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Serenity Support</h2>
            <div className="flex items-center text-xs text-green-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Online & Listening
            </div>
          </div>
        </div>
        <div className="hidden sm:flex text-xs text-gray-500 items-center">
          <ShieldAlert className="w-3 h-3 mr-1" />
          Always Confidential
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto space-y-6 mb-4 pr-2 scrollbar-thin scrollbar-thumb-pink-200"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-pink-600 ml-2' : 'bg-pink-100 mr-2'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-pink-600" />}
              </div>
              <div 
                className={`p-4 rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-pink-600 text-white rounded-tr-none' 
                    : 'bg-white border border-pink-100 text-gray-800 rounded-tl-none'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                <span className={`text-[10px] block mt-2 opacity-60 text-right`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-pink-100 p-4 rounded-2xl flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="relative group">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Type your message here... (Shift+Enter for new line)"
          className="w-full bg-white border border-pink-100 rounded-2xl p-4 pr-16 shadow-sm focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all outline-none resize-none h-24"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="absolute right-4 bottom-6 bg-pink-600 text-white p-3 rounded-xl hover:bg-pink-700 disabled:opacity-50 disabled:hover:bg-pink-600 transition-colors shadow-md"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-2">
        Serenity is an AI companion, not a replacement for professional clinical care.
      </p>
    </div>
  );
};

export default Chat;
