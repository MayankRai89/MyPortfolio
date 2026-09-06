import type { IconType } from 'react-icons'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiFastapi, SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiPython, SiGoogle, SiDocker, SiGit, SiGithub, SiLinux, SiLangchain,
  SiFramer, SiThreedotjs, SiSocketdotio, SiHuggingface,
  SiSupabase
} from 'react-icons/si'
import { FaServer, FaDatabase, FaJava, FaBrain, FaAws, FaChartLine } from 'react-icons/fa'

export const RESUME_URL = 'https://drive.google.com/file/d/1w3fCCVr04Cslf0FCl2c2wpPoccaHxEB0/view?usp=drive_link'

export type SkillGroup = {
  title: string
  items: string[]
}

export type Project = {
  title: string
  subtitle: string
  description: string
  features: string[]
  stack: string[]
  accent: string
}

export type TimelineItem = {
  year: string
  title: string
  detail: string
  tags?: string[]
}

export type SkillInfo = {
  icon: IconType
  color: string
  glowClass: string
}

export const skillDetailsMap: Record<string, SkillInfo> = {
  'React': { icon: SiReact, color: '#61DAFB', glowClass: 'rgba(97, 218, 251, 0.4)' },
  'Next.js': { icon: SiNextdotjs, color: '#000000', glowClass: 'rgba(15, 23, 42, 0.3)' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', glowClass: 'rgba(49, 120, 198, 0.4)' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E', glowClass: 'rgba(247, 223, 30, 0.4)' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', glowClass: 'rgba(6, 182, 212, 0.4)' },
  'HTML': { icon: SiHtml5, color: '#E34F26', glowClass: 'rgba(227, 79, 38, 0.4)' },
  'CSS': { icon: SiCss, color: '#1572B6', glowClass: 'rgba(21, 114, 182, 0.4)' },
  'Node.js': { icon: SiNodedotjs, color: '#339933', glowClass: 'rgba(51, 153, 51, 0.4)' },
  'Express.js': { icon: SiExpress, color: '#000000', glowClass: 'rgba(15, 23, 42, 0.3)' },
  'Express': { icon: SiExpress, color: '#000000', glowClass: 'rgba(15, 23, 42, 0.3)' },
  'FastAPI': { icon: SiFastapi, color: '#009688', glowClass: 'rgba(0, 150, 136, 0.4)' },
  'REST APIs': { icon: FaServer, color: '#FF6C37', glowClass: 'rgba(255, 108, 55, 0.4)' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', glowClass: 'rgba(65, 105, 225, 0.4)' },
  'MongoDB': { icon: SiMongodb, color: '#47A248', glowClass: 'rgba(71, 162, 72, 0.4)' },
  'MySQL': { icon: SiMysql, color: '#4479A1', glowClass: 'rgba(68, 121, 161, 0.4)' },
  'Redis': { icon: SiRedis, color: '#DC382D', glowClass: 'rgba(220, 56, 45, 0.4)' },
  'Java': { icon: FaJava, color: '#007396', glowClass: 'rgba(0, 115, 150, 0.4)' },
  'Python': { icon: SiPython, color: '#3776AB', glowClass: 'rgba(55, 118, 171, 0.4)' },
  'SQL': { icon: FaDatabase, color: '#F29111', glowClass: 'rgba(242, 145, 17, 0.4)' },
  'LangChain': { icon: SiLangchain, color: '#1C3C3C', glowClass: 'rgba(28, 60, 60, 0.3)' },
  'OpenAI API': { icon: FaBrain, color: '#00A67E', glowClass: 'rgba(0, 166, 126, 0.4)' },
  'Gemini API': { icon: SiGoogle, color: '#4285F4', glowClass: 'rgba(66, 133, 244, 0.4)' },
  'RAG': { icon: FaBrain, color: '#9C27B0', glowClass: 'rgba(156, 39, 176, 0.4)' },
  'Vector Databases': { icon: FaDatabase, color: '#E91E63', glowClass: 'rgba(233, 30, 99, 0.4)' },
  'Git': { icon: SiGit, color: '#F05032', glowClass: 'rgba(240, 80, 50, 0.4)' },
  'Docker': { icon: SiDocker, color: '#2496ED', glowClass: 'rgba(36, 150, 237, 0.4)' },
  'GitHub': { icon: SiGithub, color: '#181717', glowClass: 'rgba(24, 23, 23, 0.3)' },
  'Linux': { icon: SiLinux, color: '#FCC624', glowClass: 'rgba(252, 198, 36, 0.4)' },
  'AWS': { icon: FaAws, color: '#FF9900', glowClass: 'rgba(255, 153, 0, 0.4)' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF', glowClass: 'rgba(0, 85, 255, 0.4)' },
  'Three.js': { icon: SiThreedotjs, color: '#000000', glowClass: 'rgba(0, 0, 0, 0.3)' },
  'Recharts': { icon: FaChartLine, color: '#3182BD', glowClass: 'rgba(49, 130, 189, 0.4)' },
  'Socket.IO': { icon: SiSocketdotio, color: '#010101', glowClass: 'rgba(1, 1, 1, 0.3)' },
  'NLP': { icon: FaBrain, color: '#8E24AA', glowClass: 'rgba(142, 36, 170, 0.4)' },
  'Sentence Transformers': { icon: SiHuggingface, color: '#FFD21E', glowClass: 'rgba(255, 210, 30, 0.4)' },
  'AI Chatbot': { icon: FaBrain, color: '#009688', glowClass: 'rgba(0, 150, 136, 0.4)' },
  'Supabase': { icon: SiSupabase, color: '#009688', glowClass: 'rgba(0, 150, 136, 0.4)' },
}

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { title: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'] },
  { title: 'Programming', items: ['Java', 'SQL'] },
  { title: 'AI & ML', items: ['LangChain', 'OpenAI API', 'Gemini API', 'RAG', 'Vector Databases'] },
  { title: 'Tools', items: ['Git', 'Docker', 'GitHub', 'Linux', 'AWS'] },
]

export const frontendProjects: Project[] = [
  {
    title: 'Personal Portfolio',
    subtitle: 'React • Tailwind CSS • Framer Motion',
    description: 'A premium, interactive personal portfolio website featuring custom cursor spring physics, smooth scrolling, dynamic light tracking, and liquid text effects.',
    features: ['3D interactive components', 'Proximity magnification text', 'Lenis scroll integration'],
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    accent: 'from-amber-600/15 to-orange-700/15',
  },
  {
    title: 'Interactive Admin Dashboard',
    subtitle: 'React • TypeScript • Recharts • Drag-and-Drop',
    description: 'A beautiful dashboard layout tracking SaaS analytics in real-time with drag-and-drop layouts and customized dark/light profiles.',
    features: ['Real-time SVG charting', 'Custom grid layouts', 'Interactive theme builder'],
    stack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    accent: 'from-stone-600/15 to-amber-700/15',
  },
]

export const backendProjects: Project[] = [
  {
    title: 'AI Life Manager',
    subtitle: 'FastAPI • PostgreSQL • Redis • LangChain',
    description: 'An intelligent productivity system that blends planning, memory, and automation into one cohesive assistant experience.',
    features: ['Agent workflows', 'Persistent memory', 'Context-aware reminders'],
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'LangChain'],
    accent: 'from-orange-600/15 to-amber-600/15',
  },
  {
    title: 'SEEDHI',
    subtitle: 'Internship Recommendation Platform',
    description: 'An NLP-driven platform that matches students with internship opportunities using semantic search and rich recommendation context.',
    features: ['Semantic search', 'Recommendation engine', 'NLP ranking'],
    stack: ['NLP', 'Sentence Transformers'],
    accent: 'from-amber-700/15 to-orange-600/15',
  },
]

export const fullStackProjects: Project[] = [
  {
    title: 'Blood Bank Management System',
    subtitle: 'React • Node.js • MongoDB • Socket.IO',
    description: 'A resilient healthcare platform that streamlines donor coordination with real-time communication and an AI assistant for support.',
    features: ['Live donor matching', 'Instant chat updates', 'AI chatbot workflows'],
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'AI Chatbot'],
    accent: 'from-amber-600/15 to-orange-700/15',
  },
  {
  title: 'SNITCH',
  subtitle: 'D2C Apparel & Lifestyle E-Store',
  description: 'A sleek, mobile-first fashion e-commerce storefront delivering rapid product discovery, lookbook carousels, instant bag updates, and customer purchase analytics.',
  features: ['Seamless checkout & bag sync', 'Smart recommendation engine', 'Interactive product showcases'],
  stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  accent: 'from-amber-700/15 to-orange-600/15',
},

]

export const timeline: TimelineItem[] = [
  {
    year: '2026',
    title: 'Blood Bank Management System',
    detail: 'Designed and deployed a full-stack blood bank platform with real-time donor-recipient matching via Socket.IO and an AI chatbot powered by Groq/Llama 3, backed by a complete SRS as part of a university project.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Groq/Llama 3']
  },
  {
    year: '2026',
    title: 'SNITCH — D2C E-Commerce Platform',
    detail: 'Architected and built a modern full-stack fashion e-commerce storefront featuring dynamic product filtering, persistent shopping cart synchronization, and PostgreSQL-backed order processing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'E-Commerce']
  },
  {
    year: '2024',
    title: 'SEEDHI — NLP Internship Recommender',
    detail: 'Built an NLP-based platform that recommends internships to students by matching profiles and interests against opportunity listings using natural language processing.',
    tags: ['NLP', 'Python', 'Recommendation Systems', 'Full-Stack']
  },
]
