import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { useState, type FormEvent } from 'react'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import { GITHUB_URL, LEETCODE_URL, LINKEDIN_URL, EMAIL_URL, WEB3FORMS_ACCESS_KEY } from '../data/portfolioData'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatusMessage({
          type: 'success',
          text: "Thank you! Your message has been sent directly to my inbox. I'll reply soon!",
        })
        form.reset()
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again or email me directly.',
        })
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Network error occurred. Please try again or reach out directly via email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something ambitious together"
                description="Reach out for collaborations, freelance opportunities, or product engineering conversations."
              />
              <div className="mt-8 space-y-4 text-stone-600 dark:text-stone-400">
                <a
                  href={EMAIL_URL}
                  className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"
                >
                  <Mail size={18} className="text-amber-500 shrink-0" />
                  <span>raimayank245@gmail.com</span>
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"
                >
                  <FaGithub size={18} className="text-stone-700 dark:text-stone-300 shrink-0" />
                  <span>github.com/MayankRai89</span>
                </a>
                <a
                  href={LEETCODE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"
                >
                  <SiLeetcode size={18} className="text-[#FFA116] shrink-0" />
                  <span>leetcode.com/u/MayankRai89</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-amber-600 dark:hover:text-amber-400"
                >
                  <FaLinkedin size={18} className="text-[#0A66C2] shrink-0" />
                  <span>linkedin.com/in/mayank-rai-4509581b0</span>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-[2rem] border border-stone-200/80 bg-stone-100/50 p-6 backdrop-blur dark:border-white/10 dark:bg-stone-900/30"
            >
              {/* Spam Honeypot Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="rounded-2xl border border-stone-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="rounded-2xl border border-stone-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100"
                />
              </div>

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject / Project Inquiry"
                className="w-full rounded-2xl border border-stone-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100"
              />

              <textarea
                name="message"
                required
                placeholder="Tell me about your project, ideas, or feedback..."
                className="min-h-[140px] w-full rounded-2xl border border-stone-300 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-stone-400 text-stone-900 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-stone-500 dark:text-stone-100"
              />

              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2.5 rounded-2xl p-3.5 text-xs font-medium ${
                    statusMessage.type === 'success'
                      ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                      : 'border border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 font-semibold text-stone-950 transition hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
