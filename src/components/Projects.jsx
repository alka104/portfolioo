// ── Projects Section ─────────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

// Category → accent colour mapping
const categoryColors = {
  'AI / ML Research':       'text-emerald-400 bg-emerald-400/8 border-emerald-400/20',
  'Full-Stack':             'text-sky-400    bg-sky-400/8    border-sky-400/20',
  'AI / Recommendation':    'text-violet-400 bg-violet-400/8 border-violet-400/20',
  'Systems / Full-Stack':   'text-amber-400  bg-amber-400/8  border-amber-400/20',
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others   = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="orb orb-indigo w-[450px] h-[450px] top-10 right-0 opacity-25" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="mb-14"
        >
          <p className="section-label mb-3">03 / Projects</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} index={i} large />
          ))}
        </div>

        {/* Others — smaller cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {others.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} index={i + featured.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Individual project card ── */
function ProjectCard({ proj, index, large = false }) {
  const colorClass = categoryColors[proj.category] || 'text-sky-400 bg-sky-400/8 border-sky-400/20'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className={`card group flex flex-col ${large ? 'p-7' : 'p-6'}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className={`text-[10px] font-mono px-2.5 py-1 rounded border ${colorClass}`}>
          {proj.category}
        </span>
        <div className="flex items-center gap-3">
          {proj.featured && (
            <Star size={14} className="text-amber-400 fill-amber-400/40" />
          )}
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-muted)] hover:text-sky-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-muted)] hover:text-sky-400 transition-colors"
            aria-label="External link"
          >
            <ExternalLink size={17} />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className={`font-display font-bold ${large ? 'text-xl' : 'text-lg'} text-[var(--text-primary)] mb-3 group-hover:gradient-text transition-all`}>
        {proj.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-5">
        {proj.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
        {proj.stack.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}
