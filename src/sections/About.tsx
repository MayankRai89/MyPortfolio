import { motion, AnimatePresence } from 'framer-motion'
import { BrainCircuit, ChevronDown, Sparkles, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/portfolioData'

export default function About() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() =>
    timeline.reduce((acc, item) => ({ ...acc, [item.title]: true }), {})
  )

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const allOpen = Object.values(openItems).every(Boolean)
  const toggleAll = () => {
    const nextState = !allOpen
    setOpenItems(
      timeline.reduce((acc, item) => ({ ...acc, [item.title]: nextState }), {})
    )
  }

  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <SectionHeading
          eyebrow="About"
          title="Full-stack engineer building scalable, product-ready systems"
          description="My work is rooted in solving real problems with systems that are elegant, scalable, and product-ready."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <GlassCard className="p-8 h-full min-h-[430px] flex flex-col justify-center">
            <p className="text-lg leading-8 text-stone-700 dark:text-stone-300">
              I started in web development because I loved turning ideas into tools that people could actually use. Over time that curiosity expanded into backend engineering, distributed systems, and AI-powered experiences that feel intuitive and dynamic.
            </p>
            <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-stone-400">
              Today, I focus on building delightful products with a thoughtful blend of performance, architecture, and modern interfaces.
            </p>
          </GlassCard>

          <GlassCard className="p-8 flex flex-col h-[440px]">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200/40 dark:border-white/10 shrink-0">
              <div className="flex items-center gap-3 text-amber-500 dark:text-amber-400">
                <BrainCircuit size={22} />
                <h3 className="text-xl font-semibold text-stone-900 dark:text-white">Journey in motion</h3>
              </div>
              <button
                type="button"
                onClick={toggleAll}
                className="text-xs font-medium text-amber-600 transition hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
              >
                {allOpen ? 'Collapse All' : 'Expand All'}
              </button>
            </div>

            <div data-lenis-prevent className="no-scrollbar mt-4 flex-1 overflow-y-auto pl-6 pr-2 py-1 overscroll-contain">
              <div className="relative space-y-4 pl-6 border-l-2 border-amber-500/40 dark:amber-500/50 ml-1">
                {timeline.map((item) => {
                  const isOpen = !!openItems[item.title]
                  return (
                    <div key={item.title} className="relative group">
                      {/* Timeline Node Bullet */}
                      <div className="absolute -left-[31px] top-4 h-3.5 w-3.5 rounded-full border-2 border-amber-500 bg-stone-100 dark:bg-stone-900 transition-transform duration-300 group-hover:scale-125 group-hover:bg-amber-500 shadow-sm shadow-amber-500/40" />

                      <div
                        onClick={() => toggleItem(item.title)}
                        className="cursor-pointer rounded-2xl border border-stone-200/60 bg-stone-100/50 p-4 transition-all duration-300 hover:border-amber-500/40 dark:border-white/10 dark:bg-stone-900/40 dark:hover:border-amber-500/40"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-600 dark:text-amber-400">
                              {item.year}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-stone-400 group-hover:text-amber-500"
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </div>

                        <div className="mt-1 text-lg font-semibold text-stone-900 dark:text-white">
                          {item.title}
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">
                                {item.detail}
                              </p>

                              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200/40 dark:border-white/5">
                                {item.tags && item.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
                                      >
                                        <Sparkles size={10} />
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {item.link && (
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline"
                                  >
                                    Live Link <ExternalLink size={12} />
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  )
}
