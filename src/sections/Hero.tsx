import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { useMemo } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import MagnifiedText from '../components/MagnifiedText'
import { RESUME_URL } from '../data/portfolioData'

function HeroAvatar() {
  return (
    <div className="relative group max-w-[420px] w-full aspect-square overflow-hidden rounded-[2rem] border border-amber-300/50 bg-gradient-to-b from-amber-50/80 via-orange-50/50 to-amber-100/60 shadow-xl shadow-amber-500/15 backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-gradient-to-b dark:from-stone-950/90 dark:via-stone-900/80 dark:to-stone-950/95 dark:shadow-2xl dark:shadow-amber-950/40">
      {/* Day / Light Mode Ambient Sun Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.35),_transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.2),_transparent_50%)] transition-opacity duration-500 dark:opacity-0" />

      {/* Night / Dark Mode Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(180,83,9,0.18),_transparent_45%)] transition-opacity duration-500 dark:opacity-100" />

      {/* Avatar Image with Light vs Dark Theme Color Filters */}
      <motion.img
        src="/avatar.png"
        alt="Mayank Rai Avatar"
        className="h-full w-full object-cover object-center brightness-105 contrast-[1.02] saturate-[1.15] sepia-[0.04] transition-all duration-500 group-hover:scale-105 dark:brightness-100 dark:contrast-110 dark:saturate-[1.1] dark:sepia-0"
        initial={{ scale: 0.95, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Theme Color Overlay Tint */}
      {/* Light Mode Sunlit Warm Tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-400/25 via-orange-300/15 to-transparent mix-blend-soft-light opacity-90 transition-opacity duration-500 dark:opacity-0" />

      {/* Dark Mode Cosmic Amber / Violet Tint */}
      <div className="pointer-events-none absolute inset-0 opacity-0 bg-gradient-to-tr from-amber-600/30 via-indigo-950/20 to-amber-400/10 mix-blend-overlay transition-opacity duration-500 dark:opacity-100" />

      {/* Decorative Border Ring & Theme Vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-amber-500/20 transition-all duration-500 dark:ring-white/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-200/40 via-transparent to-transparent opacity-60 transition-all duration-500 dark:from-stone-950/70 dark:opacity-80" />
    </div>
  )
}

type HeroProps = {
  heroRef: React.RefObject<HTMLDivElement | null>
}

export default function Hero({ heroRef }: HeroProps) {
  const socialLinks = useMemo(
    () => [
      { href: 'https://github.com/MayankRai89', label: 'GitHub', icon: FaGithub },
      { href: 'https://www.linkedin.com/in/mayank-rai-4509581b0', label: 'LinkedIn', icon: FaLinkedin },
      { href: 'https://leetcode.com/u/MayankRai89/', label: 'LeetCode', icon: SiLeetcode },
      { href: 'mailto:raimayank245@gmail.com', label: 'Email', icon: Mail },
    ],
    [],
  )

  return (
    <section ref={heroRef} className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(245,158,11,0.12),_transparent_24%),radial-gradient(circle_at_80%_0%,_rgba(217,119,6,0.1),_transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <MagnifiedText text="Hello, I'm " />
            <MagnifiedText text="Mayank Rai" className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-amber-300" />
          </h1>
          <div className="mt-6 text-2xl font-medium sm:text-3xl text-stone-700 dark:text-stone-300">
            <span className="mr-3">I build things for web.</span>
            <span className="text-amber-600 dark:text-amber-400">• Frontend Engineer</span>
            <br />
            <span className="text-amber-600 dark:text-amber-400">• Backend Engineer</span>
            <br />
            <span className="text-orange-600 dark:text-orange-400">  • AI Enthusiast</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400">
            I am passionate web developer specializing in building exceptional digital experiences with modern technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 font-medium text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-400">
              View my Work <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-5 py-3 font-medium text-stone-700 backdrop-blur transition hover:-translate-y-0.5 hover:bg-stone-200 dark:border-white/10 dark:bg-white/10 dark:text-stone-200 dark:hover:bg-white/20"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white/80 p-3 text-stone-600 transition hover:-translate-y-1 hover:border-amber-500/40 hover:text-amber-600 dark:border-white/10 dark:bg-stone-900/70 dark:text-stone-300 dark:hover:border-amber-500/40 dark:hover:text-amber-400">
                <Icon size={18} />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <HeroAvatar />
        </motion.div>
      </div>
    </section>
  )
}

