"use client"

import { motion } from "framer-motion"
import { ElegantShape } from "./elegant-shape"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (800) 123-4567",
      gradient: "from-slate-800 to-yellow-400",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@nexusai.com",
      gradient: "from-yellow-400 to-slate-700",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 AI Boulevard, San Francisco, CA",
      gradient: "from-slate-700 to-yellow-300",
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/[0.05] dark:from-slate-800/[0.05] via-transparent to-yellow-200/[0.05] dark:to-yellow-400/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={400}
          height={100}
          rotate={-5}
          gradient="from-slate-800/[0.1] dark:from-yellow-400/[0.1]"
          className="right-[5%] top-[20%]"
        />
        <ElegantShape
          delay={0.2}
          width={300}
          height={80}
          rotate={15}
          gradient="from-yellow-400/[0.1] dark:from-slate-700/[0.1]"
          className="left-[10%] bottom-[15%]"
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
            Ready to Transform Your Outreach?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Contact us today to learn how our AI-powered solution can revolutionize your real estate business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 dark:text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg resize-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 dark:text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (123) 456-7890"
                    className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700 dark:text-white">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg resize-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 dark:text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs..."
                  className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 min-h-[120px] rounded-lg resize-none"
                />
              </div>

              <Button className="w-full rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 hover:from-slate-700 hover:to-yellow-500 dark:hover:from-slate-800 dark:hover:to-yellow-400 text-white">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} dark:${item.gradient} p-[1px] mb-4`}
                >
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[7px] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-slate-800 dark:text-yellow-300" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">{item.details}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-100 to-yellow-100/30 dark:from-slate-700 dark:to-yellow-400/10 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Schedule a Demo</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                See our AI-powered calling agent in action with a personalized demo.
              </p>
              <Button className="w-full rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 hover:from-slate-700 hover:to-yellow-500 dark:hover:from-slate-800 dark:hover:to-yellow-400 text-white">
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

