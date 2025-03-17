"use client"

import { motion } from "framer-motion"
import { ElegantShape } from "./elegant-shape"
import { Play } from "lucide-react"
import { Button } from "./ui/button"

export function DemoSection() {
  return (
    <section id="demo" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/[0.05] dark:from-yellow-400/[0.05] via-transparent to-slate-100/[0.05] dark:to-slate-800/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={350}
          height={90}
          rotate={8}
          gradient="from-yellow-400/[0.1] dark:from-yellow-300/[0.1]"
          className="left-[5%] top-[15%]"
        />
        <ElegantShape
          delay={0.2}
          width={250}
          height={70}
          rotate={-12}
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
            Watch Our AI Agent in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Experience how our AI-powered calling agent engages with leads, qualifies prospects, and schedules
            appointments - all without human intervention.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-slate-200/50 dark:bg-slate-800/50 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-300/30 dark:bg-yellow-400/20 rounded-full filter blur-3xl" />

            <div className="relative aspect-video w-full bg-gradient-to-br from-slate-100 to-yellow-200/20 dark:from-slate-800 dark:to-yellow-400/20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 hover:from-slate-700 hover:to-yellow-500 dark:hover:from-slate-800 dark:hover:to-yellow-400 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                <h3 className="text-xl font-semibold text-white mb-2">AI Calling Agent Demo</h3>
                <p className="text-white/60">
                  Watch how our AI engages with potential clients naturally and effectively
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {["Lead Scraping Process", "Automated Calling System", "Appointment Scheduling"].map((title, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-800/20 to-yellow-400/20 dark:from-slate-700/20 dark:to-yellow-300/20 flex items-center justify-center mr-3">
                    <Play className="w-4 h-4 text-slate-800 dark:text-yellow-300 ml-0.5" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">{title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">1:45</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

