import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import { GITHUB_URL, LEETCODE_URL, LINKEDIN_URL, EMAIL_URL } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-20 pt-10 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <GlassCard className="overflow-hidden p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading eyebrow="Contact" title="Let’s build something ambitious together" description="Reach out for collaborations, freelance opportunities, or product engineering conversations." />
              <div className="mt-8 space-y-4 text-stone-600 dark:text-stone-400">
                <a href={EMAIL_URL} className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"><Mail size={18} /> raimayank245@gmail.com</a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"><FaGithub size={18} /> github.com/MayankRai89</a>
                <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"><SiLeetcode size={18} /> leetcode.com/u/MayankRai89</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"><FaLinkedin size={18} /> linkedin.com/in/mayank-rai-4509581b0</a>
              </div>
            </div>
            <form className="space-y-4 rounded-[2rem] border border-stone-200 bg-stone-100/50 p-6 dark:border-white/10 dark:bg-transparent">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-stone-300 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100" placeholder="Name" />
                <input className="rounded-2xl border border-stone-300 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100" placeholder="Email" />
              </div>
              <input className="w-full rounded-2xl border border-stone-300 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100" placeholder="Subject" />
              <textarea className="min-h-[140px] w-full rounded-2xl border border-stone-300 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100" placeholder="Message" />
              <button type="button" className="rounded-full bg-amber-500 px-5 py-3 font-medium text-stone-950 transition hover:bg-amber-400">Send Message</button>
            </form>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
