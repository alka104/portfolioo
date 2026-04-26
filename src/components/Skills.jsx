// ── Skills Section ───────────────────────────────────────────────────────────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'

// Category → icon emoji (keeps deps zero)
const categoryIcons = {
  Languages:    '{ }',
  Frontend:     '◈',
  Backend:      '⬡',
  'ML & Tools': '◎',
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="orb orb-indigo w-[350px] h-[350px] top-20 right-0 opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="mb-14"
        >
          <p className="section-label mb-3">05 / Skills</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], ci) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              icon={categoryIcons[category]}
              delay={ci * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Skill category card ── */
function SkillCategory({ category, items, icon, delay }) {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="card p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-sky-400 text-lg">{icon}</span>
        <h3 className="font-display font-bold text-base text-[var(--text-primary)]">{category}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {items.map((skill, si) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs text-[var(--text-muted)] font-medium">{skill.name}</span>
              <span className="font-mono text-[10px] text-sky-500">{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
              <motion.div
                className="skill-bar-fill"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: delay + si * 0.07,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
