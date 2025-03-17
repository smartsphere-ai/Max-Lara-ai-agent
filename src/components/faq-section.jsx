"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ElegantShape } from "./elegant-shape"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How do AI agents help in property buying and selling?",
      answer:
        "Our AI calling agent uses advanced natural language processing to conduct human-like conversations. It automatically scrapes leads from various platforms, initiates outreach calls, qualifies prospects based on their responses, and schedules appointments for qualified leads—all without human intervention.",
    },
    {
      question: "What role does AI play in real estate lead generation?",
      answer:
        "AI plays a crucial role in lead generation by automating outreach, qualification, and follow-up processes. It enables real estate agents to identify high-quality leads faster and more efficiently by analyzing large datasets and engaging prospects with human-like conversations.",
    },
    {
      question: "Can AI agents help in real estate marketing?",
      answer:
        "Yes, AI agents can significantly enhance real estate marketing efforts by automating outreach and lead nurturing processes. They allow agents to focus more on closing deals by reducing the time spent on repetitive tasks like cold calling and lead qualification.",
    },
    {
      question: "How do AI-powered virtual tours work?",
      answer:
        "AI-powered virtual tours use machine learning and 3D modeling to create interactive, immersive property views. Buyers can explore properties remotely, guided by AI that can answer questions and highlight key features, making the experience as close to in-person as possible.",
    },
    {
      question: "What are the security concerns with AI in real estate?",
      answer:
        "AI in real estate raises security concerns related to data privacy and compliance. Our platform follows strict regulations such as TCPA, maintaining do-not-call lists, respecting calling hours, and updating protocols regularly to ensure legal compliance and protect sensitive data.",
    },
    {
      question: "Can AI agents replace human real estate agents?",
      answer: "No, AI can assist with tasks but can't replace human agents' personal touch and expertise.",
    },
    {
      question: "How do AI chatbots improve customer experience in real estate?",
      answer: "AI chatbots offer 24/7 support, quick responses, and help with scheduling and property details.",
    },
    {
      question: "What are the benefits of using AI in property management?",
      answer: " AI helps with predictive maintenance, automates rent collection, and simplifies tenant screening.",
    },
    {
      question: "Can AI predict real estate market trends?",
      answer: "Yes, AI can analyze data to predict trends, helping agents make informed decisions.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/[0.05] dark:from-yellow-400/[0.05] via-transparent to-slate-100/[0.05] dark:to-slate-800/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={350}
          height={90}
          rotate={10}
          gradient="from-yellow-400/[0.1] dark:from-yellow-300/[0.1]"
          className="left-[5%] top-[15%]"
        />
        <ElegantShape
          delay={0.2}
          width={250}
          height={70}
          rotate={-15}
          gradient="from-slate-800/[0.1] dark:from-slate-700/[0.1]"
          className="right-[10%] bottom-[10%]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Find answers to common questions about our AI-powered real estate outreach solution.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/70 transition-colors"
                >
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-slate-600 dark:text-slate-400">{faq.answer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

