// ── Portfolio Data ───────────────────────────────────────────────────────────
// All content sourced from Alka Kumari's resume and IEEE conference certificate.
// Edit this file to update portfolio content without touching components.

export const personal = {
  name: 'Alka Kumari',
  title: 'Information Science Student  |  Frontend Developer',
  tagline: 'Building intelligent systems at the intersection of AI and scalable software engineering.',
  email: 'alkakumari9577@gmail.com',
  phone: '+91 9906620851',
  location: 'Bengaluru, India',
  github: 'https://github.com/alka104',     // update with actual handle
  linkedin: 'https://www.linkedin.com/in/alka-kumari-575831315/',// update with actual handle
  resumeUrl: 'Resume_Alka_Kumari (2).pdf',
}

export const about = {
  paragraphs: [
    "I'm a third-year Information Science Engineering student at B.M.S College of Engineering (GPA 9.3), driven by a deep curiosity for how technology can solve real-world problems at scale. My foundation spans frontend engineering, machine learning, and data structures — areas I've actively applied through research, hackathons, and internships.",
    "Currently interning at Hewlett Packard Enterprise, I work on AI-based anomaly detection and intelligent credential-rotation systems — building the kind of infrastructure that keeps enterprise services reliable and secure. This experience has sharpened my instinct for performance, observability, and systems thinking.",
    "Beyond the code, I've presented research at an IEEE international conference, coordinated college-wide technical events, and competed in national-level challenges like ICPC, Kharagpur Data Science Hackathon, and Flipkart Runway. I thrive at the crossroads of research and engineering.",
  ],
  highlights: [
    { value: '9.3', label: 'GPA' },
    { value: 'IEEE', label: 'Published' },
    { value: 'HPE', label: 'Intern' },
    { value: '5+', label: 'Projects' },
  ],
}

// REPLACE the whole experiences array with this:
export const experiences = [
  {
    role: 'Project Intern',
    company: 'Hewlett Packard Enterprise (HPE)',
    period: '2025 — Present',
    location: 'Bengaluru, India',
    points: [
      'Built a production-grade, AI-powered cybersecurity threat detection pipeline simulating a modern Security Operations Center (SOC) — ingesting raw PCAP network traffic through a 10-stage pipeline from Zeek/Suricata IDS → Apache Kafka → ML inference → automated SOAR response.',
      'Engineered a real-time AI Detection Engine using a FastAPI microservice that consumes Kafka streams, performs behavioral feature extraction, and runs an ensemble of XGBoost, LightGBM, and Isolation Forest models to detect novel zero-day threats with sub-second latency.',
      'Implemented automated credential rotation via HashiCorp Vault — on threat detection, the system autonomously revokes compromised secrets and distributes cryptographically fresh API keys and passwords to live microservices over encrypted TLS tunnels, eliminating manual incident response.',
      'Developed a 3D WebGL threat visualization dashboard (globe.gl / three-globe) with a Bento Box–style SOC UI, displaying real-time geospatial network interceptions; wired the frontend to a live FastAPI WebSocket stream backed by Elasticsearch for full audit-log indexing.',
    ],
    stack: ['Python', 'FastAPI', 'XGBoost', 'LightGBM', 'Isolation Forest', 'Apache Kafka', 'HashiCorp Vault', 'Docker', 'Elasticsearch', 'WebSockets', 'three.js'],
  },
]

export const projects = [
  {
    title: 'Sepsis Prediction — Ensemble ML Pipeline',
    description:
      'End-to-end clinical ML pipeline for early sepsis detection from ICU time-series data. Achieved AUROC ~1.0 and Recall ~99.8% by combining ensemble models with class-imbalance handling strategies — delivering clinically actionable predictions that can assist ICU practitioners in critical decision windows.',
    stack: ['Python', 'Random Forest', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'SMOTE'],
    github: 'https://github.com/alkakumari/sepsis-prediction',
    category: 'AI / ML Research',
    featured: true,
  },
  {
    title: 'Appointy — Full-Stack Appointment Platform',
    description:
      'Production-grade MERN application for scheduling doctor appointments with role-based access control. Features JWT authentication, RESTful APIs, MongoDB Atlas persistence, and a Vite-powered React frontend with responsive design and real-time state management.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Axios', 'Vite'],
    github: 'https://github.com/alkakumari/appointy',
    category: 'Full-Stack',
    featured: true,
  },
  {
    title: 'CineMatch — Intelligent Movie Recommender',
    description:
      'Content-based recommendation engine using TF-IDF vectorisation and cosine similarity over large-scale movie metadata. A custom weighted similarity model combines genre encodings with narrative features, enabling fine-grained personalisation. REST APIs expose recommendation endpoints and track search-history analytics.',
    stack: ['Python', 'Flask', 'TF-IDF', 'Cosine Similarity', 'Pandas', 'NumPy'],
    github: 'https://github.com/alkakumari/cinematch',
    category: 'AI / Recommendation',
    featured: false,
  },
  {
    title: 'DevBoard — Distributed Task Management System',
    description:
      'Real-time collaborative task board with WebSocket-powered live updates, optimistic UI, and conflict-resolution logic. Designed with a scalable event-driven backend and persistent state across distributed nodes — inspired by production systems thinking from operating systems coursework.',
    stack: ['React', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/alkakumari/devboard',
    category: 'Systems / Full-Stack',
    featured: false,
  },
]

export const publication = {
  title: 'Ensemble Learning and Predictive Analytics for Sepsis Detection in Critical Care',
  conference: '3rd International Conference on Emerging Computation & Information Technologies (ICECIT-2025)',
  organiser: 'Siddaganga Institute of Technology, Tumakuru — IEEE Bangalore Section & IEEE Computer Society',
  date: 'December 19–20, 2025',
  abstract:
    'This paper presents a robust clinical decision-support framework for early sepsis onset prediction using heterogeneous ensemble methods applied to ICU time-series data. The study addresses class imbalance through hybrid resampling, fuses predictions from Random Forest, XGBoost, LightGBM, Logistic Regression, and Naïve Bayes, and achieves near-perfect recall (99.8%) and AUROC (~1.0) — demonstrating that carefully engineered ensemble pipelines can translate into meaningful improvements in patient survival outcomes.',
  contributions: [
    'Introduced a clinically-optimised recall-first evaluation framework for imbalanced ICU datasets.',
    'Proposed a hybrid feature-engineering strategy combining domain knowledge with automated selection.',
    'Demonstrated that ensemble fusion outperforms any single model by a statistically significant margin.',
  ],
  link: 'https://ieeexplore.ieee.org/document/11450974',
}

export const skills = {
  Languages: [
    { name: 'C++', level: 88 },
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'C', level: 75 },
    { name: 'SQL', level: 78 },
  ],
  Frontend: [
    { name: 'React.js', level: 88 },
    { name: 'HTML / CSS', level: 92 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Vite', level: 80 },
  ],
  Backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 78 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST APIs', level: 85 },
  ],
  'ML & Tools': [
    { name: 'Scikit-learn', level: 82 },
    { name: 'XGBoost / LightGBM', level: 78 },
    { name: 'Git & GitHub', level: 88 },
    { name: 'Docker', level: 65 },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publication', href: '#publication' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
