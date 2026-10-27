import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ChatMessage } from '../types';
import { 
  Bot, Send, User, Trash2, Copy, Check, RotateCcw, 
  Sparkles, AlertCircle, Info, Key, Shield, HelpCircle 
} from 'lucide-react';

export const AIAssistantPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('maktab50_chat_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fall back to default
      }
    }
    return [
      {
        id: 'msg-init',
        role: 'assistant',
        content: t.aiPage.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [lastError, setLastError] = useState<string | null>(null);
  const [isMissingKey, setIsMissingKey] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    localStorage.setItem('maktab50_chat_history', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (messageToSend?: string) => {
    const text = (messageToSend || input).trim();
    if (!text || isLoading) return;

    setLastError(null);
    setIsMissingKey(false);

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const history = newMessages
        .filter((m) => !m.error)
        .map((m) => ({
          role: m.role,
          content: m.content
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: history.slice(-10),
          language
        })
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.missingKey || res.status === 503) {
          setIsMissingKey(true);
        }
        throw new Error(data.error || t.aiPage.errorGeneric);
      }

      const assistantMsg: ChatMessage = {
        id: `ast-${Date.now()}`,
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      setLastError(err.message || t.aiPage.errorGeneric);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: err.message || t.aiPage.errorGeneric,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        error: true
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClear = () => {
    const defaultMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'assistant',
      content: t.aiPage.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([defaultMsg]);
    localStorage.removeItem('maktab50_chat_history');
    setLastError(null);
    setIsMissingKey(false);
  };

  const handleRetry = () => {
    // Find the last user message
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'user') {
        const text = messages[i].content;
        // remove subsequent error message
        setMessages(messages.slice(0, i));
        handleSend(text);
        return;
      }
    }
  };

  const sampleQuestions = [
    t.aiPage.sample1,
    t.aiPage.sample2,
    t.aiPage.sample3,
    t.aiPage.sample4,
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070c18] pb-16">
      <Breadcrumbs items={[{ label: t.nav.ai }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-[#0d1f3d] to-[#0a1628] rounded-3xl p-6 sm:p-8 text-white mb-6 border border-blue-500/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{t.aiPage.badge}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.aiPage.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.aiPage.subtitle}
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={handleClear}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all border border-white/10"
                title={t.aiPage.clearChat}
              >
                <Trash2 className="w-3.5 h-3.5 text-slate-300" />
                <span>{t.aiPage.clearChat}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Missing API Key Warning Box if applicable */}
        {isMissingKey && (
          <div className="mb-6 bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/30 rounded-2xl p-4 text-xs sm:text-sm text-amber-800 dark:text-amber-200 space-y-2">
            <div className="flex items-center space-x-2 font-bold text-amber-900 dark:text-amber-100">
              <Key className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{t.aiPage.errorMissingKey}</span>
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              Vercel Project Settings &gt; Environment Variables &gt; Add <code>GEMINI_API_KEY</code> with your Google AI Studio key.
            </p>
          </div>
        )}

        {/* Chat Container Card */}
        <div className="bg-white dark:bg-[#0c1424] rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col h-[650px] overflow-hidden">
          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    msg.error 
                      ? 'bg-rose-500/20 text-rose-500 border border-rose-500/30' 
                      : 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`flex flex-col max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none shadow-md shadow-blue-500/10'
                        : msg.error
                        ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800 rounded-bl-none'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700/60 rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>

                  <div className="flex items-center space-x-2 mt-1 px-1 text-[10px] text-slate-400">
                    <span>{msg.timestamp}</span>
                    {msg.role === 'assistant' && !msg.error && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.content)}
                        className="hover:text-blue-500 transition-colors flex items-center space-x-1"
                        title={t.aiPage.copyResponse}
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">{t.aiPage.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{t.aiPage.copyResponse}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-200">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Pulsing Loading Bubble */}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2 border border-slate-200 dark:border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]"></div>
                  <span className="text-xs text-slate-400 ml-1">{t.common.loading}</span>
                </div>
              </div>
            )}

            {lastError && !isLoading && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-blue-500" />
                  <span>{t.aiPage.retry}</span>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Question Chips */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#0a101d] border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
              <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">
                {t.aiPage.suggestedQuestions}
              </span>
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box Area */}
          <div className="p-4 bg-white dark:bg-[#0c1424] border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.aiPage.inputPlaceholder}
                  rows={2}
                  disabled={isLoading}
                  className="w-full resize-none rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all disabled:opacity-50"
                />
              </div>

              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="h-12 w-12 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-2 flex items-center justify-center space-x-1">
              <Shield className="w-3 h-3 text-emerald-500" />
              <span>{t.aiPage.disclaimer}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
