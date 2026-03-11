"use client";

import { useState, useRef, useEffect, useCallback, FormEvent } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const PROACTIVE_MESSAGES = [
  "👋 Hi! Curious about how Modaash can simplify your recruitment workflow?",
  "🤔 Not sure if Modaash is right for your agency? Ask me anything!",
  "💡 Want to know how we help manpower agencies manage 1000+ workers effortlessly?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [teaserText, setTeaserText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const teaserTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasInitialized = useRef(false);

  /* ── Proactive popup after 30 seconds ── */
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    teaserTimerRef.current = setTimeout(() => {
      const msg =
        PROACTIVE_MESSAGES[Math.floor(Math.random() * PROACTIVE_MESSAGES.length)];
      setTeaserText(msg);
      setShowTeaser(true);
      setHasUnread(true);

      // Inject as the first AI message so it appears in chat when opened
      setMessages((prev) =>
        prev.length === 0 ? [{ role: "assistant", content: msg }] : prev,
      );
    }, 30000);

    return () => {
      if (teaserTimerRef.current) clearTimeout(teaserTimerRef.current);
    };
  }, []);

  /* Auto-scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  /* Focus input on open, clear unread */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setHasUnread(false);
      setShowTeaser(false);
    }
  }, [isOpen]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setShowTeaser(false);
    setHasUnread(false);

    setMessages((prev) =>
      prev.length === 0
        ? [
            {
              role: "assistant",
              content:
                "Hi there! 👋 I'm the Modaash assistant. How can I help you today?",
            },
          ]
        : prev,
    );
  }, []);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const dismissTeaser = useCallback(() => setShowTeaser(false), []);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res.ok
            ? data.reply
            : "Sorry, something went wrong. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error. Please check your connection.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* Quick-reply helper */
  const handleQuickReply = (q: string) => {
    setInput(q);
    setTimeout(() => {
      document
        .getElementById("chatbot-form")
        ?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }, 50);
  };

  return (
    <>
      {/* ── Teaser popup bubble ── */}
      {showTeaser && !isOpen && (
        <div className="fixed bottom-[88px] right-3 sm:right-6 z-[9999] chatbot-anim-slide-up">
          <div className="relative max-w-[272px] sm:max-w-[300px] rounded-2xl rounded-br-md bg-white px-4 py-3.5 shadow-xl border border-gray-100">
            <button
              onClick={dismissTeaser}
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors shadow-sm"
              aria-label="Dismiss"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-[13px] font-medium text-foreground leading-relaxed">
                  {teaserText}
                </p>
                <button
                  onClick={handleOpen}
                  className="mt-2 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Chat with us →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FAB ── */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-[9999]">
        {/* Pulse ring */}
        {!isOpen && !showTeaser && (
          <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-primary/20 pointer-events-none" />
        )}

        {/* Unread dot */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-0.5 -right-0.5 z-10 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 border-2 border-white" />
          </span>
        )}

        <button
          onClick={() => (isOpen ? handleClose() : handleOpen())}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 active:scale-95 ${
            isOpen
              ? "bg-gray-700 hover:bg-gray-800"
              : "bg-primary hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
          }`}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <span
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
            }`}
          >
            <X className="h-6 w-6 text-white" />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              isOpen ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </span>
        </button>
      </div>

      {/* ── Chat Window ── */}
      <div
        className={`chatbot-window fixed z-[9999] flex flex-col bg-white shadow-2xl transition-all duration-300 ease-out
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"}
          inset-0
          sm:inset-auto sm:bottom-[88px] sm:right-4 md:right-6
          sm:w-[380px] sm:rounded-2xl sm:border sm:border-gray-200`}
      >
        {/* ── Header ── */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-blue-700 px-4 py-3.5 sm:px-5 sm:py-4 shrink-0 sm:rounded-t-2xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              Modaash Assistant
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
              <p className="text-xs text-white/70">Online · Powered by AI</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ── Messages ── */}
        <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 space-y-3 bg-gradient-to-b from-slate-50 to-white chatbot-scrollbar">
          {/* Info banner */}
          {messages.length <= 1 && (
            <div className="mb-2 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 text-center">
              <p className="text-[11px] text-muted leading-relaxed">
                Ask me anything about Modaash — features, pricing, or how to get started!
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 chatbot-anim-fade-in ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                  msg.role === "assistant"
                    ? "bg-primary/10 text-primary"
                    : "bg-primary text-white"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Bot className="h-3.5 w-3.5" />
                ) : (
                  <User className="h-3.5 w-3.5" />
                )}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-md bg-primary text-white"
                    : "rounded-bl-md bg-white text-foreground shadow-sm border border-gray-100"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="chatbot-prose">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}

          {/* Typing dots */}
          {isLoading && (
            <div className="flex items-end gap-2 chatbot-anim-fade-in">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Bot className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm border border-gray-100">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ── Quick suggestions ── */}
        {messages.length <= 1 && !isLoading && (
          <div className="flex gap-2 overflow-x-auto px-3 py-2 sm:px-4 border-t border-gray-50 bg-white shrink-0 chatbot-scrollbar-x">
            {["What is Modaash?", "Show me features", "Pricing plans"].map(
              (q) => (
                <button
                  key={q}
                  onClick={() => handleQuickReply(q)}
                  className="shrink-0 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-medium text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap"
                >
                  {q}
                </button>
              ),
            )}
          </div>
        )}

        {/* ── Input bar ── */}
        <form
          id="chatbot-form"
          onSubmit={sendMessage}
          className="flex items-center gap-2 border-t border-gray-100 bg-white px-3 py-3 sm:px-4 shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            disabled={isLoading}
            className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-slate-50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md transition-all hover:bg-primary-dark active:scale-95 disabled:opacity-40 disabled:hover:bg-primary"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </form>

        {/* ── Footer branding ── */}
        <div className="border-t border-gray-50 bg-gray-50/50 py-1.5 text-center shrink-0 sm:rounded-b-2xl">
          <p className="text-[10px] text-gray-400">Powered by Modaash AI</p>
        </div>
      </div>
    </>
  );
}
