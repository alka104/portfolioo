// ── Experience Section ───────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experiences } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="orb orb-blue w-[350px] h-[350px] bottom-0 left-0 opacity-25" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="mb-14"
        >
          <p className="section-label mb-3">02 / Experience</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-sky-500/20 to-transparent hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative md:pl-20 mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] top-6 timeline-dot hidden md:block" />

              {/* Card */}
              <div className="card p-7 hover:glow-blue">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Company icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} className="text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-sky-400 font-semibold text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 ml-16 sm:ml-0">
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                      <Calendar size={11} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-sm leading-relaxed">
                      <span className="text-sky-500 mt-0.5 flex-shrink-0 font-bold">›</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                  {exp.stack.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
