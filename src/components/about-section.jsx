"use client"

import { motion } from "framer-motion"
import { ElegantShape } from "./elegant-shape"

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/[0.05] dark:from-slate-800/[0.05] via-transparent to-yellow-200/[0.05] dark:to-yellow-400/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={400}
          height={100}
          rotate={-10}
          gradient="from-slate-800/[0.1] dark:from-yellow-400/[0.1]"
          className="left-[5%] top-[10%]"
        />
        <ElegantShape
          delay={0.2}
          width={300}
          height={80}
          rotate={15}
          gradient="from-yellow-400/[0.1] dark:from-slate-700/[0.1]"
          className="right-[10%] bottom-[20%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Revolutionizing Real Estate Outreach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            We combine cutting-edge AI technology with deep real estate industry knowledge to create a solution that
            transforms how agents connect with potential clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Circle for light mode (yellow) and dark mode (white) */}
              <div className="absolute -top-6 left-6 w-64 h-64 bg-yellow-300 dark:bg-white/20 rounded-full filter blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-300 dark:bg-white/20 rounded-full filter blur-3xl" />
              <div className="text-center relative z-10">
                <div className="h-[300px] w-full">{/* Space for animated robot */}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-justify">
              At NexusAI, we're on a mission to empower real estate professionals with AI technology that handles the
              time-consuming aspects of lead generation and outreach, allowing them to focus on what they do best:
              building relationships and closing deals.
            </p>
            <div className="space-y-4">
              {[
                "Established in 2020 with a focus on AI for real estate",
                "Developed proprietary natural language processing for real estate conversations",
                "Expanded to serve over 5,000 agents nationwide",
                "Continuously improving our AI models with industry-specific data",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-black to-black dark:from-white dark:to-white mt-2 mr-3 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

