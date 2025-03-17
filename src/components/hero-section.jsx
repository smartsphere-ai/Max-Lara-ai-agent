'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ElegantShape } from './elegant-shape';
import { PhoneCall, BarChart3, Users, Calendar } from 'lucide-react';

export function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/[0.05] dark:from-slate-800/[0.05] via-transparent to-yellow-200/[0.05] dark:to-yellow-400/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-slate-800/[0.15] dark:from-yellow-400/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-yellow-400/[0.15] dark:from-slate-700/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-slate-700/[0.15] dark:from-slate-600/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-yellow-300/[0.15] dark:from-yellow-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-slate-500/[0.15] dark:from-yellow-200/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight dark:text-white">
                Supercharge Your Real Estate
                <span
                  className="text-[#041671] dark:text-[#EBF212] pl-1"
                  style={{ fontFamily: 'Pacifico, cursive' }}
                >
                  Outreach
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto lg:mx-0">
                Our AI-powered calling agent automatically scrapes leads,
                performs outreach, and qualifies prospects - all while you focus
                on closing deals.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <Button
                  size="lg"
                  className="rounded-full bg-[#EBF212] text-black hover:bg-white px-10 py-4 font-bold text-base hover:text-black dark:bg-[#EBF212] dark:text-black dark:border-[#EBF212]"
                >
                  Get Started
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-700 text-black bg-white px-10 py-4 font-bold text-base"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: PhoneCall, text: '24/7 AI Calling' },
                  { icon: BarChart3, text: '98% Lead Accuracy' },
                  { icon: Users, text: '10x More Contacts' },
                  { icon: Calendar, text: 'Auto Scheduling' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 rounded-xl bg-slate-100/[0.3] dark:bg-slate-800/[0.3] border border-[#ffc800] dark:border-slate-700"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-800/20 to-yellow-400/20 dark:from-slate-700/20 dark:to-yellow-300/20 flex items-center justify-center mb-2">
                      <item.icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 text-center">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="h-[500px] w-[300px]">
              {/* Space for animated robot */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 dark:from-slate-900 dark:via-transparent dark:to-slate-900/80 pointer-events-none" />
    </div>
  );
}
