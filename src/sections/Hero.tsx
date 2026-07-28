import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { useMemo } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import MagnifiedText from '../components/MagnifiedText'
import { RESUME_URL } from '../data/portfolioData'

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
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0d0d0d] text-white"
    >
      {/* Ambient lighting glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[550px] w-[550px] rounded-full bg-amber-600/15 blur-[150px]" />

      {/* Content row */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1600px] items-center px-6 lg:px-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6 py-16 lg:py-0"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
              <span className="block text-white">
                <MagnifiedText text="Hello, I'm" />
              </span>
              <span className="block text-[#f3b137] mt-1">
                <MagnifiedText text="Mayank Rai" className="text-[#f3b137]" />
              </span>
            </h1>

            <div className="space-y-1.5 text-xl sm:text-2xl font-semibold tracking-wide text-stone-200">
              <p className="flex flex-wrap items-center gap-x-2">
                <span className="text-stone-300">I am a Full Stack Developer.</span>
              </p> 
            </div>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-stone-400">
              I am passionate web developer specializing in building exceptional digital experiences with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-7 py-3.5 text-base font-semibold text-black transition-all hover:bg-[#d97706] hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
              >
                View my Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/90 px-6 py-3.5 text-base font-medium text-stone-200 backdrop-blur transition-all hover:border-stone-600 hover:bg-stone-800 hover:text-white active:scale-95"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-800/80 bg-stone-900/80 text-stone-300 transition-all hover:border-amber-500/50 hover:bg-stone-800 hover:text-amber-400 hover:scale-105 active:scale-95"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Empty spacer column so left content stays within the left ~40% on desktop.
              The actual illustration is full-bleed and absolutely positioned below. */}
          <div className="hidden lg:col-span-7 lg:block" />
        </div>
      </div>

      {/* Full-bleed 3D character illustration — desktop only, anchored bottom-right,
          allowed to run past the right edge of the viewport like the reference design. */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] items-end justify-end overflow-hidden lg:flex"
      >
        <img
          src="/hero-character.png"
          alt="Mayank Rai 3D Developer Workstation"
          className="h-[100%] w-auto max-w-none origin-bottom-right object-contain object-right-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] [mask-image:linear-gradient(to_right,transparent_0%,black_8%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%)]"
        />
      </motion.div>

      {/* Mobile / tablet — image shown inline below the text, contained and centered.
          No mask needed here since the whole image sits on the same dark background. */}
      <div className="relative z-10 mx-auto -mt-6 max-w-md px-6 pb-14 lg:hidden">
        <img
          src="/hero-character.png"
          alt="Mayank Rai 3D Developer Workstation"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  )
}