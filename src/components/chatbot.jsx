"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi there! I'm your AI assistant. How can I help you with real estate outreach today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Thanks for your message! Our AI system can help automate your real estate lead generation and outreach. Would you like to schedule a demo to see it in action?",
        },
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 h-96 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-100 to-yellow-100/30 dark:from-slate-800 dark:to-yellow-400/10">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="font-medium text-slate-900 dark:text-white">AI Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 h-[calc(100%-8rem)] overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="rounded-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 hover:from-slate-700 hover:to-yellow-500 dark:hover:from-slate-800 dark:hover:to-yellow-400"
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-14 w-14 rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 hover:from-slate-700 hover:to-yellow-500 dark:hover:from-slate-800 dark:hover:to-yellow-400 shadow-lg"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  )
}

