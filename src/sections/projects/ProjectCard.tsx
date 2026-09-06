import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Rocket, MonitorSmartphone } from 'lucide-react'
import { skillDetailsMap } from '../../data/portfolioData'
import type { Project } from '../../data/portfolioData'
import { motion } from 'framer-motion'

type Props = { project: Project; index: number; total: number; category: string }

export default function ProjectCard({ project, index, total, category }: Props) {
  return (
    <div className="relative h-full w-full flex flex-col lg:flex-row items-center gap-10 px-8 md:px-20 py-10 max-w-7xl mx-auto">
      
      <div className="flex-1 flex flex-col justify-center">
          
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-amber-500">{category}</span>
          <span className="h-px w-6 bg-amber-500/40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-400">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-white leading-[1.05] mb-5">
          {project.title}
        </h3>

        <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed mb-7 max-w-lg">
          {project.description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
              <MonitorSmartphone size={13} className="text-amber-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

       
        <div className="flex flex-wrap gap-2 mb-9">
          {project.stack.map((tag) => {
            const detail = skillDetailsMap[tag]
            if (!detail) return (
              <span key={tag} className="text-xs px-3 py-1 rounded-full border border-stone-200 dark:border-white/10 text-stone-500 dark:text-stone-400">{tag}</span>
            )
            const Icon = detail.icon
            return (
              <div key={tag} className="group/t relative h-9 w-9 flex items-center justify-center rounded-xl border border-stone-200 dark:border-white/10 bg-white/50 dark:bg-stone-900/40 hover:border-amber-500/50 transition-all hover:scale-110 shadow-sm cursor-default">
                <Icon style={{ color: detail.color }} size={18} />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-2 py-0.5 rounded opacity-0 group-hover/t:opacity-100 transition-opacity whitespace-nowrap z-30">
                  {tag}
                </span>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-950 text-white dark:bg-white dark:text-stone-950 text-sm font-medium hover:scale-[1.03] transition shadow-lg"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          ) : (
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-950 text-white dark:bg-white dark:text-stone-950 text-sm font-medium hover:scale-[1.03] transition shadow-lg"
            >
              Contact <ExternalLink size={14} />
            </a>
          )}
          <a
            href={project.githubUrl || "https://github.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 dark:border-white/10 text-stone-700 dark:text-stone-200 text-sm font-medium hover:scale-[1.03] transition"
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>

      
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.26, 1, 0.98, 0.98] }}
          className={`relative w-full max-w-md aspect-[4/3] rounded-3xl border border-stone-200/40 dark:border-white/8 bg-gradient-to-br ${project.accent} overflow-hidden shadow-2xl`}
        >
         
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
         
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-600/10" />
         
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="h-16 w-16 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Rocket size={28} />
            </div>
            <h4 className="text-lg font-semibold text-stone-900 dark:text-white">{project.title}</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400">{project.subtitle}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
