// ── Publication Section ──────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { BookOpen, Award, ExternalLink, CheckCircle } from 'lucide-react'
import { publication } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Publication() {
  return (
    <section id="publication" className="section relative overflow-hidden">
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 left-10 opacity-25" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="mb-14"
        >
          <p className="section-label mb-3">04 / Publication</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Research <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Main publication card */}
          <div className="card p-8 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/4 to-indigo-500/4 pointer-events-none" />

            <div className="relative z-10">
              {/* Badge row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono px-3 py-1.5 rounded">
                  <Award size={12} />
                  IEEE Conference — ICECIT 2025
                </span>
                <span className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono px-3 py-1.5 rounded">
                  <BookOpen size={12} />
                  Presented Paper
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-2 leading-snug">
                {publication.title}
              </h3>

              {/* Conference info */}
              <p className="font-mono text-xs text-sky-400 mb-1">{publication.conference}</p>
              <p className="font-mono text-xs text-[var(--text-muted)] mb-6">
                {publication.organiser} &nbsp;·&nbsp; {publication.date}
              </p>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 max-w-3xl">
                {publication.abstract}
              </p>

              {/* Contributions */}
              <div className="border-t border-[var(--border-subtle)] pt-6">
                <p className="section-label text-[10px] mb-4">Key Contributions</p>
                <ul className="space-y-3">
                  {publication.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                      <CheckCircle size={15} className="text-sky-400 mt-0.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex"
                >
                  <ExternalLink size={14} />
                  View Paper
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
