import { useEffect, useState } from 'react'
import { GITHUB_USERNAME, LEETCODE_USERNAME, LEETCODE_STATS } from '../data/portfolioData'

export type SocialStats = {
  github: {
    repos: number
    loading: boolean
    error: boolean
  }
  leetcode: {
    totalSolved: number
    easySolved: number
    mediumSolved: number
    hardSolved: number
    ranking: number | null
    badges: number
    badgeName?: string
    submissionsPastYear?: number
    activeDays?: number
    maxStreak?: number
    acceptanceRate?: number | null
    loading: boolean
    error: boolean
  }
}

const DEFAULT_STATS: SocialStats = {
  github: {
    repos: 24,
    loading: false,
    error: false,
  },
  leetcode: {
    totalSolved: LEETCODE_STATS.totalSolved,
    easySolved: LEETCODE_STATS.easySolved,
    mediumSolved: LEETCODE_STATS.mediumSolved,
    hardSolved: LEETCODE_STATS.hardSolved,
    ranking: LEETCODE_STATS.ranking,
    badges: LEETCODE_STATS.badges,
    badgeName: LEETCODE_STATS.badgeName,
    submissionsPastYear: LEETCODE_STATS.submissionsPastYear,
    activeDays: LEETCODE_STATS.activeDays,
    maxStreak: LEETCODE_STATS.maxStreak,
    acceptanceRate: 64.8,
    loading: false,
    error: false,
  },
}

export function useSocialStats(): SocialStats {
  const [stats, setStats] = useState<SocialStats>(DEFAULT_STATS)

  useEffect(() => {
    let isMounted = true

    // Fetch GitHub stats
    const fetchGitHub = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (res.ok) {
          const data = await res.json()
          if (isMounted && typeof data.public_repos === 'number') {
            setStats((prev) => ({
              ...prev,
              github: {
                repos: data.public_repos,
                loading: false,
                error: false,
              },
            }))
          }
        }
      } catch {
        // Keep initial fallback
      }
    }

    // Fetch LeetCode stats from endpoints with timeout
    const fetchLeetCode = async () => {
      const endpoints = [
        `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`,
        `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`,
        `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`,
      ]

      for (const url of endpoints) {
        try {
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 4000)

          const res = await fetch(url, { signal: controller.signal })
          clearTimeout(timeoutId)

          if (res.ok) {
            const data = await res.json()
            if (isMounted && (data.totalSolved || data.solvedProblem || data.easySolved)) {
              const totalSolved = data.totalSolved ?? data.solvedProblem ?? data.total_solved
              const easySolved = data.easySolved ?? data.easyProblemSolved ?? data.easy_solved
              const mediumSolved = data.mediumSolved ?? data.mediumProblemSolved ?? data.medium_solved
              const hardSolved = data.hardSolved ?? data.hardProblemSolved ?? data.hard_solved
              const ranking = data.ranking ?? data.globalRank ?? data.global_ranking

              setStats((prev) => ({
                ...prev,
                leetcode: {
                  ...prev.leetcode,
                  totalSolved: typeof totalSolved === 'number' ? totalSolved : prev.leetcode.totalSolved,
                  easySolved: typeof easySolved === 'number' ? easySolved : prev.leetcode.easySolved,
                  mediumSolved: typeof mediumSolved === 'number' ? mediumSolved : prev.leetcode.mediumSolved,
                  hardSolved: typeof hardSolved === 'number' ? hardSolved : prev.leetcode.hardSolved,
                  ranking: typeof ranking === 'number' ? ranking : prev.leetcode.ranking,
                  loading: false,
                  error: false,
                },
              }))
              return
            }
          }
        } catch {
          // Continue to next endpoint or default
        }
      }
    }

    fetchGitHub()
    fetchLeetCode()

    return () => {
      isMounted = false
    }
  }, [])

  return stats
}
