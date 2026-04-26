// ── Hero Section ─────────────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { personal } from '../data'

// Stagger container variant
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
    >
      {/* ── Decorative orbs ── */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-40 -left-32 opacity-60" />
      <div className="orb orb-indigo w-[500px] h-[500px] -bottom-20 -right-24 opacity-50" />

      {/* ── Floating particles ── */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-sky-400/30"
          style={{
            left:  `${Math.random() * 100}%`,
            top:   `${Math.random() * 100}%`,
          }}
          animate={{
            y:       [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat:   Infinity,
            delay:    Math.random() * 4,
            ease:     'easeInOut',
          }}
        />
      ))}

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
          <span className="flex items-center gap-2 section-label bg-[rgba(14,165,233,0.08)] border border-[var(--border-subtle)] rounded-full px-4 py-1.5">
            <Sparkles size={12} className="text-sky-400" />
            Available for internships & collaborations
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4"
        >
          <span className="text-[var(--text-primary)]">Alka</span>{' '}
          <span className="gradient-text text-glow">Kumari</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="font-mono text-base sm:text-lg text-sky-400 mb-6 tracking-wide"
        >
          {'>'} Information Science Student &nbsp;|&nbsp; Frontend Developer
          <span className="cursor-blink ml-0.5">_</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
            <Mail size={15} />
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex justify-center gap-6">
          {[
            { icon: Github,   href: personal.github,   label: 'GitHub' },
            { icon: Linkedin, href: personal.linkedin,  label: 'LinkedIn' },
            { icon: Mail,     href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/8 transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[10px]">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-sky-500/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
