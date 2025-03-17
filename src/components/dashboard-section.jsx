"use client"

import { motion } from "framer-motion"
import { ElegantShape } from "./elegant-shape"
import { Button } from "./ui/button"

export function DashboardSection() {
  return (
    <section id="dashboard" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/[0.05] dark:from-yellow-400/[0.05] via-transparent to-slate-100/[0.05] dark:to-slate-800/[0.  dark:from-yellow-400/[0.05] via-transparent to-slate-100/[0.05] dark:to-slate-800/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={350}
          height={90}
          rotate={15}
          gradient="from-yellow-400/[0.1] dark:from-yellow-300/[0.1]"
          className="left-[5%] top-[15%]"
        />
        <ElegantShape
          delay={0.2}
          width={250}
          height={70}
          rotate={-10}
          gradient="from-slate-800/[0.1] dark:from-slate-700/[0.1]"
          className="right-[10%] bottom-[10%]"
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
            Real-Time AI Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Monitor your AI outreach performance with our comprehensive analytics dashboard.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Performance Overview</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 py-2 px-4 rounded-lg"
              >
                This Week
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 py-2 px-4 rounded-lg"
              >
                This Month
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 py-2 px-4 rounded-lg"
              >
                This Year
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Total Calls", value: "1,247", change: "+12.5%" },
              { label: "Appointments Set", value: "128", change: "+8.3%" },
              { label: "Conversion Rate", value: "10.3%", change: "+2.1%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6"
              >
                <div className="text-slate-500 dark:text-slate-400 mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-green-500 dark:text-green-400">{stat.change} from last period</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

