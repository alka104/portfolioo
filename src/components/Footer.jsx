// ── Footer ───────────────────────────────────────────────────────────────────
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personal, navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg gradient-text">Alka Kumari</p>
            <p className="text-[var(--text-muted)] text-xs mt-1 font-mono">
              Information Science Student · ML Enthusiast · Full Stack Developer
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-5">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[var(--text-muted)] hover:text-sky-400 transition-colors text-xs font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
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
                className="text-[var(--text-muted)] hover:text-sky-400 transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-center gap-2 text-[var(--text-muted)] text-xs">
          <span>Built with</span>
          <Heart size={11} className="text-sky-400 fill-sky-400/40" />
          <span>using React + Tailwind CSS · © {new Date().getFullYear()} Alka Kumari</span>
        </div>
      </div>
    </footer>
  )
}
