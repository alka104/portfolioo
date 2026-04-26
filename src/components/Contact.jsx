// ── Contact Section ──────────────────────────────────────────────────────────
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react'
import { personal } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

const contactLinks = [
  {
    icon:  Mail,
    label: 'Email',
    value: personal.email,
    href:  `mailto:${personal.email}`,
  },
  {
    icon:  Github,
    label: 'GitHub',
    value: 'github.com/alkakumari',
    href:  personal.github,
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/alkakumari',
    href:  personal.linkedin,
  },
  {
    icon:  MapPin,
    label: 'Location',
    value: personal.location,
    href:  null,
  },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // UI-only: just shows success state
  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }, 4000)
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="orb orb-blue w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="mb-14 text-center"
        >
          <p className="section-label mb-3">06 / Contact</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm">
            I'm open to internship opportunities, research collaborations, or just a good tech conversation.
            Drop me a message — I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* ── Contact links ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show:   { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-4"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeUp}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card p-5 flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors flex-shrink-0">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="section-label text-[10px]">{label}</p>
                      <p className="text-[var(--text-primary)] text-sm font-medium mt-0.5">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="card p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="section-label text-[10px]">{label}</p>
                      <p className="text-[var(--text-primary)] text-sm font-medium mt-0.5">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="card p-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={44} className="text-emerald-400 mb-4" />
                  <p className="font-display font-bold text-xl mb-2">Message Sent!</p>
                  <p className="text-[var(--text-muted)] text-sm">Thanks for reaching out. I'll reply shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="section-label text-[10px] block mb-2">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="I'd love to discuss..."
                      required
                      className="form-input resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center mt-2">
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
