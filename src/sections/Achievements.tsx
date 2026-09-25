import { motion } from 'framer-motion'
import { ExternalLink, Trophy, GitFork, CheckCircle2, Sparkles, Award, Flame } from 'lucide-react'
import { SiLeetcode, SiGithub } from 'react-icons/si'
import GlassCard from '../components/GlassCard'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'
import { containerVariants, itemVariants } from '../animations/variants'
import { useSocialStats } from '../hooks/useSocialStats'
import { GITHUB_URL, LEETCODE_URL, GITHUB_USERNAME, LEETCODE_USERNAME } from '../data/portfolioData'

export default function Achievements() {
  const stats = useSocialStats()

  const easy = stats.leetcode.easySolved
  const medium = stats.leetcode.mediumSolved
  const hard = stats.leetcode.hardSolved
  const total = stats.leetcode.totalSolved || (easy + medium + hard) || 217

  const easyPct = Math.round((easy / (total || 1)) * 100)
  const medPct = Math.round((medium / (total || 1)) * 100)
  const hardPct = Math.round((hard / (total || 1)) * 100)

  return (
    <section id="achievements" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8 lg:p-10">
            {/* Top Row: Heading & Quick Metric Grid */}
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <SectionHeading
                  eyebrow="Achievements & Profiles"
                  title="A blend of technical depth and consistent growth"
                  description="Real-time numbers reflect continuous problem-solving momentum, engineering craftsmanship, and active open-source contribution."
                />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[
                  { label: 'Projects Completed', value: 4, suffix: '+' },
                  { label: 'GitHub Repositories', value: stats.github.repos, suffix: '' },
                  { label: 'Technologies Learned', value: 15, suffix: '+' },
                  { label: 'LeetCode Problems Solved', value: total, suffix: '+' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="rounded-2xl border border-stone-200/80 bg-white/70 p-5 backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:shadow-md dark:border-white/10 dark:bg-stone-900/40 dark:hover:border-amber-500/40"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-amber-600 dark:text-amber-400">
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] font-semibold text-stone-600 dark:text-stone-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row: Detailed LeetCode & GitHub Live Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {/* LeetCode Card */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-stone-100/50 to-amber-500/10 p-6 backdrop-blur dark:border-amber-500/20 dark:from-amber-950/20 dark:via-stone-900/40 dark:to-stone-900/60">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFA116]/15 text-[#FFA116] border border-[#FFA116]/30 shadow-sm">
                        <SiLeetcode size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5 text-base">
                          LeetCode Profile
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                            Verified
                          </span>
                        </h4>
                        <p className="text-xs text-stone-500 dark:text-stone-400">@{LEETCODE_USERNAME}</p>
                      </div>
                    </div>

                    {stats.leetcode.ranking && (
                      <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                        <Trophy size={13} className="text-amber-500" />
                        <span>Rank #{stats.leetcode.ranking.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Solved Summary Numbers */}
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-center dark:bg-emerald-950/20">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Easy</span>
                      <div className="text-xl font-bold text-stone-900 dark:text-white">{stats.leetcode.easySolved}</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">{easyPct}% ratio</div>
                    </div>

                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-center dark:bg-amber-950/20">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Medium</span>
                      <div className="text-xl font-bold text-stone-900 dark:text-white">{stats.leetcode.mediumSolved}</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">{medPct}% ratio</div>
                    </div>

                    <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-3 text-center dark:bg-rose-950/20">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">Hard</span>
                      <div className="text-xl font-bold text-stone-900 dark:text-white">{stats.leetcode.hardSolved}</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">{hardPct}% ratio</div>
                    </div>
                  </div>

                  {/* Multi-segment Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span>Problem Distribution ({total} Total Solved)</span>
                      {stats.leetcode.badgeName && (
                        <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
                          <Award size={12} /> {stats.leetcode.badgeName}
                        </span>
                      )}
                    </div>
                    <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
                      <div style={{ width: `${easyPct}%` }} className="bg-emerald-500 transition-all duration-500" title={`Easy: ${easy}`} />
                      <div style={{ width: `${medPct}%` }} className="bg-amber-500 transition-all duration-500" title={`Medium: ${medium}`} />
                      <div style={{ width: `${hardPct}%` }} className="bg-rose-500 transition-all duration-500" title={`Hard: ${hard}`} />
                    </div>
                  </div>

                  {/* Badges and Submissions Stats */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    {stats.leetcode.submissionsPastYear && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-stone-200/60 px-2.5 py-1 text-stone-700 dark:bg-white/5 dark:text-stone-300">
                        <Flame size={12} className="text-orange-500" />
                        {stats.leetcode.submissionsPastYear} Submissions in past year
                      </span>
                    )}
                    {stats.leetcode.activeDays && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-stone-200/60 px-2.5 py-1 text-stone-700 dark:bg-white/5 dark:text-stone-300">
                        📅 {stats.leetcode.activeDays} Active Days
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/50 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-500" />
                    Data Structures & Algorithms
                  </span>
                  <a
                    href={LEETCODE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
                  >
                    View LeetCode Profile
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-300/80 bg-gradient-to-br from-stone-200/40 via-stone-100/50 to-stone-200/20 p-6 backdrop-blur dark:border-white/10 dark:from-stone-900/40 dark:via-stone-900/20 dark:to-stone-950/60">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white dark:bg-white dark:text-stone-900 border border-stone-300 shadow-sm">
                        <SiGithub size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5 text-base">
                          GitHub Activity
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                            Connected
                          </span>
                        </h4>
                        <p className="text-xs text-stone-500 dark:text-stone-400">@{GITHUB_USERNAME}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-xs font-semibold text-stone-700 dark:border-white/10 dark:bg-stone-800/80 dark:text-stone-300">
                      <GitFork size={13} className="text-amber-500" />
                      <span>{stats.github.repos} Public Repos</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                      <span>Full-stack web apps with modern React, Next.js, FastAPI & Node.js</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                      <span>AI / LLM integrations using LangChain, Vector DBs, & OpenAI/Gemini</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                      <span>Production deployments on Vercel & cloud hosting</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/50 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-500" />
                    Open Source & Systems
                  </span>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
                  >
                    Explore GitHub Repos
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
