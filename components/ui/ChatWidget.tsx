'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Minimize2, RollerCoaster } from 'lucide-react';
import axios from 'axios';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export function FloatingChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hello! How can I help you explore our products and capabilities today?',
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom when new messages arrive
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        const { data } = await axios.post("/api/chat", {
            messages: [...messages.map(msg => ({ role: msg.role, content: msg.content })), {role: "user", content: userMessage.content}]
        })

        if (!data.success) {
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'assistant',
                content: "Error while generating response",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }])

            return;
        }

        const aiMessage: Message = {id: new Date().toString(), role: "assistant", content: data?.response.text}
        setMessages(prev => [...prev, aiMessage])
        setIsTyping(false)
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Floating Chat Modal Container */}
            <div
                className={`w-[360px] sm:w-[400px] h-[520px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out origin-bottom-right mb-4 ${isOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute'
                    }`}
            >
                {/* Chat Header */}
                <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                <Bot className="w-5 h-5" />
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-1.5">
                                AI Assistant <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                            </h3>
                            <p className="text-[11px] text-slate-400">Usually replies instantly</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                        aria-label="Close chat"
                    >
                        <Minimize2 className="w-4 h-4" />
                    </button>
                </div>

                {/* Message Stream */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/80">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                                }`}
                        >
                            {/* Avatar */}
                            <div
                                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                                    }`}
                            >
                                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>

                            {/* Message Content Bubble */}
                            <div
                                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-xs'
                                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-xs'
                                    }`}
                            >
                                <p>{msg.content}</p>
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-900 border border-slate-800/80 w-fit px-3 py-2 rounded-2xl rounded-tl-xs">
                            <Bot className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                            <span className="flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                            </span>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your question..."
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white transition-all duration-200 shrink-0"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group cursor-pointer relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Toggle chat widget"
            >
                {isOpen ? (
                    <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
                ) : (
                    <MessageSquare className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                )}
            </button>
        </div>
    );
}