"use client"

import { motion } from "framer-motion"
import { ElegantShape } from "./elegant-shape"
import { Lightbulb, Computer, BarChartIcon as ChartNoAxesCombined, Eye, BrainCircuit } from "lucide-react"
import { useState } from "react"

export function ServicesSection() {
  const services = [
    {
      icon: <Lightbulb color="#f35469" size={30} />,
      title: "Always-on AI Sales Agent",
      description:
        "Our AI bots work 24/7 to engage with leads, never missing an opportunity to connect with potential clients.",
      gradient: "from-slate-800 to-yellow-400",
      bg_color: "#f354694a",
    },
    {
      icon: <Computer color="#159387" size={30} />,
      title: "Automated Outreach Calls",
      description:
        "AI-driven lead conversion through natural-sounding voice calls that engage prospects in meaningful conversations.",
      gradient: "from-yellow-400 to-slate-700",
      bg_color: "#00958a4f",
    },
    {
      icon: <ChartNoAxesCombined color="#4605e5" />,
      title: "Real-Time Lead Analysis",
      description:
        "AI predicts success rates and prioritizes high-potential leads, ensuring you focus on the most promising opportunities.",
      gradient: "from-slate-700 to-yellow-300",
      bg_color: "#2310523b",
    },
    {
      icon: <Eye color="#ffb100" />,
      title: "Instant AI Answers",
      description:
        "Chatbots & voice bots provide immediate responses to client inquiries, ensuring no question goes unanswered.",
      gradient: "from-yellow-300 to-slate-800",
      bg_color: "#ffb10069",
    },
    {
      icon: <BrainCircuit color="#00529b" />,
      title: "Human-Like Conversations",
      description:
        "NLP-powered conversations that feel natural and engaging, creating a positive experience for potential clients.",
      gradient: "from-slate-800 to-yellow-400",
      bg_color: "#00529b45",
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    if (currentIndex < services.length - 2) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section id="services" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/[0.05] dark:from-yellow-400/[0.05] via-transparent to-slate-100/[0.05] dark:to-slate-800/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={350}
          height={90}
          rotate={12}
          gradient="from-yellow-400/[0.1] dark:from-yellow-300/[0.1]"
          className="right-[5%] top-[15%]"
        />
        <ElegantShape
          delay={0.2}
          width={250}
          height={70}
          rotate={-8}
          gradient="from-slate-800/[0.1] dark:from-slate-700/[0.1]"
          className="left-[10%] bottom-[10%]"
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
            AI-Powered Solutions for Real Estate Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Our cutting-edge AI technology automates your outreach process, from lead generation to qualification,
            allowing you to focus on closing deals.
          </motion.p>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="relative">
            <div className="overflow-hidden px-2">
              <motion.div
                className="flex flex-wrap md:flex-nowrap" // Allow items to wrap on smaller screens
                initial={{ x: 0 }}
                animate={{ x: `-${currentIndex * 100}%` }} // Use percentage based width calculation
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-full md:w-1/2 bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex-shrink-0 mx-0 md:mx-2" // Full width on small screens, half-width on larger
                  >
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-lg mb-4`}
                      style={{ background: service.bg_color }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 w-full">
              <button
                onClick={prev}
                className={`px-4 py-2 rounded-lg bg-slate-800 text-white ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentIndex === 0}
              >
                Prev
              </button>
              <button
                onClick={next}
                className={`px-4 py-2 rounded-lg bg-slate-800 text-white ${
                  currentIndex >= services.length - 2 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentIndex >= services.length - 2}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

