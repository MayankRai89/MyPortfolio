import type { Dispatch, SetStateAction } from 'react'
import { RESUME_URL } from '../data/portfolioData'

type HeaderProps = {
  theme: 'dark' | 'light'
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>
}

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/80 backdrop-blur-md transition-colors duration-300 dark:border-stone-800/40 dark:bg-[#0a0a0a]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-xl font-extrabold tracking-[0.25em] text-stone-900 transition-colors hover:text-amber-500 dark:text-white dark:hover:text-amber-400">
          MAYANK
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex dark:text-stone-300">
          <a href="#about" className="transition hover:text-amber-500 dark:hover:text-amber-400">About</a>
          <a href="#skills" className="transition hover:text-amber-500 dark:hover:text-amber-400">Skills</a>
          <a href="#projects" className="transition hover:text-amber-500 dark:hover:text-amber-400">Projects</a>
          <a href="#contact" className="transition hover:text-amber-500 dark:hover:text-amber-400">Contact</a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-amber-500 dark:hover:text-amber-400">Resume</a>
        </nav>
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-stone-100 text-stone-700 shadow-sm transition hover:bg-stone-200 dark:border-stone-800 dark:bg-stone-900/90 dark:text-amber-400 dark:hover:border-stone-700 dark:hover:bg-stone-800"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}


