"use client"

import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "AI Calling", href: "#services" },
        { name: "Lead Generation", href: "#services" },
        { name: "Appointment Setting", href: "#services" },
        { name: "Analytics", href: "#dashboard" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#results" },
        { name: "FAQ", href: "#faq" },
        { name: "Support", href: "#support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "GDPR Compliance", href: "#gdpr" },
        { name: "TCPA Compliance", href: "#tcpa" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ]

  return (
    <footer className="relative pt-20 pb-10 bg-white dark:bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="#hero" className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 flex items-center justify-center">
                <div className="absolute w-6 h-6 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300"></div>
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-400 dark:to-yellow-300">
                NexusAI
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
              Revolutionizing real estate outreach with AI-powered calling agents that automate lead generation and
              qualification.
            </p>
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900 dark:text-white">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email address"
                  className="rounded-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
                <Button className="rounded-full bg-gradient-to-r from-slate-800 to-yellow-400 dark:from-slate-700 dark:to-yellow-300 hover:from-slate-700 hover:to-yellow-500 dark:hover:from-slate-800 dark:hover:to-yellow-400 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg text-slate-900 dark:text-white">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NexusAI. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

