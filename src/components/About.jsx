// ── About Section ────────────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Trophy } from 'lucide-react'
import { about } from '../data'

// Reusable fade-up animation triggered by scroll
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="orb orb-indigo w-[400px] h-[400px] top-0 right-0 opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="section-label mb-3">01 / About</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ── Bio text ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--text-muted)] leading-relaxed text-[0.95rem]">
                {p}
              </p>
            ))}

            {/* Education card */}
            <div className="card p-5 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-sky-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[var(--text-primary)]">
                    B.E. Information Science Engineering
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mt-0.5">
                    B.M.S College of Engineering — GPA: 9.3
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={11} className="text-sky-500/60" />
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">Bengaluru, India  ·  2023 – Present</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Trophy size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[var(--text-primary)] mb-2">
                    Competitions & Achievements
                  </p>
                  {[
                    'ICPC — competitive programming',
                    'Kharagpur Data Science Hackathon',
                    'Flipkart Runway Challenge',
                    'Adobe India Challenge',
                    'IEEE Conference Paper Presenter',
                  ].map(a => (
                    <p key={a} className="text-[var(--text-muted)] text-xs flex items-center gap-2 mt-1">
                      <span className="text-sky-500">›</span> {a}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show:   { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
            className="grid grid-cols-2 gap-5"
          >
            {about.highlights.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="card p-6 text-center group"
              >
                <p className="font-display font-extrabold text-4xl gradient-text mb-2 group-hover:text-glow transition-all">
                  {value}
                </p>
                <p className="section-label text-[10px]">{label}</p>
              </motion.div>
            ))}

            {/* Extra: roles card */}
            <motion.div variants={fadeUp} className="card p-6 col-span-2">
              <p className="section-label text-[10px] mb-3">Core Interests</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Frontend Engineering',
                  'Machine Learning',
                  'DSA & Algorithms',
                  'Distributed Systems',
                  'Research & AI',
                  'Open Source',
                ].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
