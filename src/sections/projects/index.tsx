/**
 * Projects Section — Click-Driven Chapter Experience
 *
 * Three category cards are shown initially.
 * Clicking any card morphs it into a fullscreen chapter using Framer Motion layoutId.
 * Inside the chapter you can navigate between projects.
 * Pressing the back button / Escape collapses back to the card grid.
 */

import { useState, useEffect, useCallback } from 'react'
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from 'framer-motion'
import {
  MonitorSmartphone,
  Server,
  Layers,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'
import { frontendProjects, backendProjects, fullStackProjects } from '../../data/portfolioData'
import type { Project } from '../../data/portfolioData'
import ProjectCard from './ProjectCard'

/* ─── types ──────────────────────────────────────────────────────── */

type Category = 'frontend' | 'backend' | 'fullstack' | null

type CategoryConfig = {
  id: Category & string
  label: string
  sublabel: string
  icon: typeof MonitorSmartphone
  accentHex: string
  accentBg: string
  projects: Project[]
}

/* ─── config ─────────────────────────────────────────────────────── */

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    sublabel: 'React • Motion • Tailwind',
    icon: MonitorSmartphone,
    accentHex: '#61DAFB',
    accentBg: 'from-sky-500/8 to-cyan-400/5',
    projects: frontendProjects,
  },
  {
    id: 'backend',
    label: 'Backend',
    sublabel: 'FastAPI • Redis • Postgres',
    icon: Server,
    accentHex: '#009688',
    accentBg: 'from-teal-500/8 to-emerald-400/5',
    projects: backendProjects,
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    sublabel: 'Perplexity • React • Node',
    icon: Layers,
    accentHex: '#F59E0B',
    accentBg: 'from-amber-500/8 to-orange-400/5',
    projects: fullStackProjects,
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

/* ─── GateCard ───────────────────────────────────────────────────── */

type GateCardProps = {
  config: CategoryConfig
  onClick: () => void
  index: number
}

function GateCard({ config, onClick, index }: GateCardProps) {
  const { id, label, sublabel, icon: Icon, accentHex, accentBg } = config

  return (
    <motion.div
      layoutId={`card-${id}`}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
      onClick={onClick}
      className="relative h-[190px] rounded-[2rem] border border-stone-200/60 dark:border-white/8 bg-white/70 dark:bg-stone-900/60 backdrop-blur-xl overflow-hidden cursor-pointer select-none group shadow-xl hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* gradient backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* subtle grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* glow border */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accentHex}30` }}
      />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8">
        <div className="flex items-center justify-between">
          <motion.span
            layoutId={`eyebrow-${id}`}
            className="text-[10px] font-bold uppercase tracking-[0.32em] text-amber-500"
          >
            {sublabel}
          </motion.span>
          <div
            className="h-10 w-10 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 dark:text-stone-400 group-hover:border-amber-500/40 group-hover:text-amber-500 transition-colors duration-300"
          >
            <Icon size={18} />
          </div>
        </div>

        <div>
          <motion.h3
            layoutId={`title-${id}`}
            className="text-2xl font-semibold text-stone-900 dark:text-white mb-2"
          >
            {label}
          </motion.h3>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-stone-400 dark:text-stone-500">Click to explore</span>
            <ChevronRight size={12} className="text-amber-500" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── ChapterView ─────────────────────────────────────────────────── */

type ChapterViewProps = {
  config: CategoryConfig
  onClose: () => void
}

function ChapterView({ config, onClose }: ChapterViewProps) {
  const { id, label, sublabel, icon: Icon, accentHex, accentBg, projects } = config
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = useCallback(() => setActiveIdx((i) => Math.max(0, i - 1)), [])
  const next = useCallback(() => setActiveIdx((i) => Math.min(projects.length - 1, i + 1)), [projects.length])

  // keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, next, prev])

  return (
    <motion.div
      layoutId={`card-${id}`}
      className="fixed inset-0 z-50 bg-stone-50 dark:bg-[#0c0a09] overflow-hidden"
      style={{ borderRadius: 0 }}
    >
      {/* ambient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accentBg} pointer-events-none`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute -top-1/3 -left-1/4 w-3/4 h-3/4 rounded-full blur-[160px] pointer-events-none" style={{ background: `${accentHex}07` }} />
      <div className="absolute -bottom-1/3 -right-1/4 w-3/4 h-3/4 rounded-full blur-[160px] pointer-events-none" style={{ background: `${accentHex}05` }} />

      {/* ── Top bar ── */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-5 border-b border-stone-200/40 dark:border-white/5 backdrop-blur-sm">
        {/* Back button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors group/back"
        >
          <ArrowLeft size={16} className="transition-transform group-hover/back:-translate-x-1" />
          All categories
        </button>

        {/* Chapter label */}
        <div className="flex items-center gap-3">
          <motion.span layoutId={`eyebrow-${id}`} className="text-[10px] font-bold uppercase tracking-[0.32em] text-amber-500">
            {sublabel}
          </motion.span>
          <span className="h-4 w-px bg-stone-300 dark:bg-white/10" />
          <motion.span layoutId={`title-${id}`} className="text-sm font-semibold text-stone-900 dark:text-white">
            {label}
          </motion.span>
          <div className="h-8 w-8 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-400 dark:text-stone-500">
            <Icon size={15} />
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="h-9 w-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:border-red-400/40 hover:text-red-500 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* ── Project slides ── */}
      <div className="absolute inset-0 pt-[68px] pb-[72px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            transition={{ duration: 0.45, ease: EASE }}
            className="h-full w-full"
          >
            <ProjectCard
              project={projects[activeIdx]}
              index={activeIdx}
              total={projects.length}
              category={label}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom navigation bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-4 border-t border-stone-200/40 dark:border-white/5 backdrop-blur-sm">
        {/* Progress */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-stone-900 dark:text-white tabular-nums">
            {String(activeIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <div className="w-32 h-[2px] bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-500 rounded-full"
              animate={{ width: `${((activeIdx + 1) / projects.length) * 100}%` }}
              transition={{ duration: 0.35, ease: EASE }}
            />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? 'w-6 h-2 bg-amber-500'
                  : 'w-2 h-2 bg-stone-300 dark:bg-white/20 hover:bg-amber-400/60'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={activeIdx === 0}
            className="h-9 w-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:border-amber-500/40 hover:text-amber-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={activeIdx === projects.length - 1}
            className="h-9 w-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:border-amber-500/40 hover:text-amber-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main export ─────────────────────────────────────────────────── */

export default function Projects() {
  const [active, setActive] = useState<Category>(null)

  // prevent body scroll when a chapter is open
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  const activeConfig = CATEGORIES.find((c) => c.id === active) ?? null

  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-500 mb-3">Featured Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Selected work by category
          </h2>
          <p className="mt-3 text-stone-500 dark:text-stone-400 text-sm max-w-md">
            Click any category to explore its projects in fullscreen.
          </p>
        </motion.div>

        {/* Gate grid */}
        <LayoutGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CATEGORIES.map((cat, i) => (
              <GateCard
                key={cat.id}
                config={cat}
                onClick={() => setActive(cat.id as Category)}
                index={i}
              />
            ))}
          </div>

          {/* Fullscreen chapter overlay */}
          <AnimatePresence>
            {activeConfig && (
              <ChapterView
                key={activeConfig.id}
                config={activeConfig}
                onClose={() => setActive(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>

      </div>
    </section>
  )
}
