import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Code2, Menu, X, Download, ExternalLink, Sparkles, Mail, MapPin, GraduationCap, Layers3, Smartphone, Monitor, Database, BrainCircuit, Users ,MessageCircle,ReceiptText} from 'lucide-react';
import './style.css';

const skills = [
  { title: 'LANGUAGES', items: [['JavaScript', 78], ['Java', 72], ['Python', 72], ['HTML & CSS', 82], ["SQL",75]] },
  { title: 'FRONTEND & MOBILE', items: [['React', 75], ['Tailwind CSS', 78], ['React Native / Expo', 65], ['Redux Toolkit', 60]] },
  { title: 'BACKEND', items: [['Node.js & Express', 68], ['REST APIs', 70], ['Authentication', 62], ['FastAPI', 55]] },
  { title: 'DATABASES', items: [['MongoDB', 68], ['PostgreSQL', 62], ['Supabase', 65],  ["Redis",75]] },
  { title: 'TOOLS & PLATFORMS', items: [['Git & GitHub', 75], ['Vercel', 82], ['Postman', 62], ['Linux', 70], ["Docker",65],["Render",84]] },
  { title: 'CORE FUNDAMENTALS', items: [['Data Structures', 65], ['OOP', 70], ['DBMS', 62],["Computer Networking",70],['Operating System',70], ['Problem Solving', 65]] },
];
const projects = [
  {
    no: '01',
    tag: 'FULL-STACK WEB APPLICATION',
    title: 'LinkedIn Clone',
    type: 'Professional networking platform',
    description: 'A LinkedIn-inspired web application featuring user authentication, a social feed, post creation, comments, and editable professional profiles. Built with a REST API and token-based authentication.',
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    icon: Users,
    tone: 'cream',
    gitlink: 'https://github.com/ombarmaiya1/LinkedIn-Clone',
    livelink: 'https://linked-in-clone-one-gilt.vercel.app',
  },
  {
    no: '02',
    tag: 'FULL-STACK PRODUCT',
    title: 'Dabba.',
    type: 'Food delivery experience',
    description: 'A multi-role food delivery product concept for customers, restaurants, riders, and admins, with a focus on a clear ordering flow and a professional interface.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
    icon: ReceiptText,
    tone: 'pink',
    gitlink: 'https://github.com/ombarmaiya1/DABBA',
    livelink: 'https://dabba-demo.vercel.app',
  },
  {
    no: '03',
    tag: 'FULL-STACK WEB APPLICATION',
    title: 'Chit-Chat',
    type: 'Real-time messaging platform',
    description: 'A modern chat application designed for seamless real-time communication, featuring conversations, message delivery, and a clean, responsive interface.',
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    icon: MessageCircle,
    tone: 'pink',
    gitlink: 'https://github.com/ombarmaiya1/Chit-Chat',
    livelink: 'https://chit-chat-psi-blush.vercel.app/',
  },
];
const process = [
  ['01', 'Understand', 'Clarify the problem, intended users, constraints, and what a successful outcome should look like.'],
  ['02', 'Design', 'Map the user flow and shape a responsive interfacce before adding unnecessary complexity.'],
  ['03', 'Build', 'Develop in small, testable pieces and connect the frontend to reliable APIs and data models.'],
  ['04', 'Improve', 'Test edge cases, fix rough edges, and iterate based on what actually works.'],
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false });
  const [sent, setSent] = useState(false);
  const [aboutDropped, setAboutDropped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const portraitRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutDropped(true);
          } else if (entry.boundingClientRect.top > 0) {
            setAboutDropped(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const nav = [['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Education', '#education'], ['Contact', '#contact']];
  const update = (key, value) => setForm(old => ({ ...old, [key]: value }));
  const submit = e => { e.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`); const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`); window.location.href = `mailto:ombarmaiyapersonal@gmail.com?subject=${subject}&body=${body}`; setSent(true); };
  return <main>
    <div className="cursor-spotlight" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} />
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner wrap">
        <a className="brand" href="#home">Om<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        <nav className={menuOpen ? 'navigation open' : 'navigation'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
        <a className="hire-pill" href="#contact">Let's Talk <ArrowUpRight size={14}/></a>
      </div>
    </header>
    <section className="hero" id="home">
      <img className="hero-image" src="./om-portrait.png" alt="Illustrated portrait of Om Barmaiya at a laptop" />
      <div className="hero-overlay" />
      <div className="social-rail"><a href="https://github.com/ombarmaiya1" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://github.com/ombarmaiya1" aria-label="Code"><Code2 size={17}/></a></div>
      <div className="hero-content wrap">
        <div className="floating-badge badge-top"><Sparkles size={13}/><span>Full-Stack & Gen-AI</span></div>
        <div className="floating-badge badge-bottom"><Code2 size={13}/><span>Open to Work ✦</span></div>
        <p className="eyebrow"><span className="dot"/> DEVELOPER PORTFOLIO · 2026</p>
        <h1>Hi, I'm <span className="shimmer-text">Om Barmaiya.</span></h1>
        <div className="outlined-role">Computer Science Student & Developer</div>
        <p className="hero-summary">I build web and mobile experiences, explore AI and computer vision, and turn practical ideas into working projects.</p>
        <div className="hero-actions"><a className="btn btn-cream" href="#projects">View My Work <ArrowRight size={15}/></a><a className="btn btn-outline" href="#contact">Contact Me</a><a className="btn btn-glass" href="mailto:ombarmaiyapersonal@gmail.com"><Mail size={13}/> Email Me</a></div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      <div className="hero-bottom-line"/>
    </section>

    <div className="marquee-strip">
      <div className="marquee-content">
        {['REACT', 'NODE.JS', 'FASTAPI', 'PYTHON', 'REACT NATIVE', 'COMPUTER VISION', 'POSTGRESQL', 'DOCKER', 'TAILWIND CSS', 'MONGODB', 'REDIS', 'JAVA'].map((item, idx) => (
          <span key={idx} className="marquee-item">✦ {item}</span>
        ))}
        {['REACT', 'NODE.JS', 'FASTAPI', 'PYTHON', 'REACT NATIVE', 'COMPUTER VISION', 'POSTGRESQL', 'DOCKER', 'TAILWIND CSS', 'MONGODB', 'REDIS', 'JAVA'].map((item, idx) => (
          <span key={`dup-${idx}`} className="marquee-item">✦ {item}</span>
        ))}
      </div>
    </div>

    <section className="about section-pink wave-bottom" id="about">
      <div className="wrap about-grid">
        <div ref={portraitRef} className={`portrait-frame ${aboutDropped ? 'dropped' : ''}`}>
          <div className="hanging-cord-wrap">
            <svg className="hanging-cord-svg" viewBox="0 0 270 52" fill="none">
              <line x1="135" y1="6" x2="38" y2="50" stroke="#ebd0bc" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 1.5" />
              <line x1="135" y1="6" x2="232" y2="50" stroke="#ebd0bc" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 1.5" />
              <circle cx="135" cy="6" r="6" fill="#f8e5d6" stroke="#480922" strokeWidth="2.5" />
              <circle cx="135" cy="6" r="2" fill="#480922" />
              <circle cx="38" cy="50" r="3.5" fill="#f3cbaf" stroke="#480922" strokeWidth="1.5" />
              <circle cx="232" cy="50" r="3.5" fill="#f3cbaf" stroke="#480922" strokeWidth="1.5" />
            </svg>
          </div>
          <img src="./om.png" alt="Om Barmaiya portrait"/>
          <span className="portrait-caption">OM BARMAIYA · Bhopal, India</span>
        </div>
        <div className="about-copy"><p className="eyebrow dark-eyebrow">A LITTLE ABOUT ME</p><h2>Hello, <em>there!</em></h2><p>I'm <strong>Om Barmaiya</strong>, a Computer Science & Engineering student at Bansal Institute of Science and Technology, Bhopal. I enjoy building useful interfaces and learning how full-stack systems work from frontend to database.</p><p>My current interests span web development, mobile apps, AI/ML, and computer vision. I prefer practical projects that make me solve real engineering problems—not just follow tutorials.</p><div className="tech-logos"><div><Code2/><span>WEB DEV</span></div><div><Smartphone/><span>MOBILE</span></div><div><BrainCircuit/><span>AI / ML</span></div><div><Database/><span>BACKEND</span></div></div></div>
      </div><span className="decor-star star-a">✦</span><span className="decor-star star-b">✦</span>
    </section>

    <section className="skills-section section-dark grid-bg" id="skills">
      <div className="wrap"><div className="section-heading centered"><span className="section-chip">Technical Stack</span><h2>My <em>Skillset</em></h2><p>A snapshot of the languages, frameworks, and tools I'm learning and using in projects.</p></div>
        <div className="skills-grid">{skills.map(group => <article className="skill-card" key={group.title}><h3>{group.title}</h3>{group.items.map(([name, value]) => <div className="skill-row" key={name}><div className="skill-label"><span>{name}</span><span>{value}%</span></div><div className="skill-track"><span style={{width: `${value}%`}}/></div></div>)}</article>)}</div>
        <p className="skill-note">Skill levels are self-assessments, not formal certifications.</p>
      </div>
    </section>

    <section className="process-section section-cream grid-bg-light" id="process"><div className="wrap process-layout"><div className="process-intro reveal-on-scroll"><span className="section-chip chip-pink">My Process</span><h2>From first idea to <em>working software.</em></h2><p>I try to keep the process simple: understand the need, build the right thing, and improve it through testing.</p><span className="hand-note">Make it useful first ↗</span></div><div className="process-path">{process.map((item, i) => <article className={`process-card process-${i+1} reveal-on-scroll reveal-delay-${i+1}`} key={item[0]}><span className="process-number">{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><span className="card-pin"/></article>)}</div></div></section>

    <section className="projects-section section-dark grid-bg" id="projects"><div className="wrap"><div className="section-heading project-heading reveal-on-scroll"><span className="section-chip">Selected Builds & Experiments</span><h2>Work that speaks<br/>for <em>itself.</em></h2><p>A selection of web, mobile, and computer-vision projects I've worked on or explored.</p></div><div className="project-list">{projects.map((p, idx) => {const Icon = p.icon; const gitUrl = p.gitlink || p.gitLink || p.github; const liveUrl = p.livelink || p.liveLink || p['live link'] || p.liveDemo; const primaryLink = liveUrl || gitUrl || '#'; return <article className={`project-card reveal-on-scroll reveal-delay-${(idx % 2) + 1}`} key={p.no}><a className={`project-visual ${p.tone}`} href={primaryLink} target={primaryLink !== '#' ? '_blank' : undefined} rel="noreferrer" title={liveUrl ? `View Live Demo: ${p.title}` : gitUrl ? `View Code: ${p.title}` : p.title}><div className="project-visual-top"><span>{p.tag}</span><span>{p.no}</span></div><div className="project-illustration"><Icon size={62} strokeWidth={1.1}/><span>{p.title}</span><small>{p.type}</small></div><div className="project-visual-bottom"><span>OM / PROJECT {p.no}</span><span>↗</span></div></a><div className="project-info"><div className="project-title-row"><span className="project-number">{p.no}</span><div><span className="project-tag">{p.tag}</span><h3>{p.title}</h3></div></div><p>{p.description}</p><div className="tag-list">{p.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-links">{liveUrl && <a className="project-link-btn live-btn" href={liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={13}/><span>Live Demo</span></a>}{gitUrl && <a className="project-link-btn git-btn" href={gitUrl} target="_blank" rel="noreferrer"><Github size={13}/><span>GitHub Repo</span><ArrowUpRight size={13}/></a>}</div></div></article>; })}</div></div></section>

    <section className="journey-section section-pink wave-top" id="journey"><div className="wrap"><div className="section-heading centered dark-heading reveal-on-scroll"><span className="section-chip chip-dark">Learning & Building</span><h2>Experience is built <em>project by project.</em></h2><p>My current journey is focused on turning coursework and self-learning into practical software.</p></div><div className="journey-grid"><article className="journey-card reveal-on-scroll reveal-delay-1"><span className="journey-date">CURRENT</span><span className="journey-type">EDUCATION + PROJECTS</span><h3>Student Developer</h3><h4>Computer Science & Engineering</h4><p>Building projects while developing stronger foundations in programming, data structures, frontend engineering, and backend APIs.</p><div className="tag-list"><span>React</span><span>Java</span><span>Python</span><span>Node.js</span></div></article><article className="journey-card reveal-on-scroll reveal-delay-2"><span className="journey-date">ONGOING</span><span className="journey-type">SELF-DIRECTED LEARNING</span><h3>Full-Stack Development</h3><h4>Web & Mobile Applications</h4><p>Practicing responsive UI, authentication flows, data modelling, API integration, and mobile app development.</p><div className="tag-list"><span>MERN</span><span>React Native</span><span>PostgreSQL</span></div></article><article className="journey-card reveal-on-scroll reveal-delay-3"><span className="journey-date">EXPLORING</span><span className="journey-type">AI / ML</span><h3>Computer Vision</h3><h4>Applied problem solving</h4><p>Exploring OCR and image-quality checks, with an emphasis on useful feedback and realistic engineering constraints.</p><div className="tag-list"><span>Python</span><span>FastAPI</span><span>OCR</span></div></article></div></div><span className="decor-star star-c">✦</span></section>

    <section className="education-section section-dark grid-bg" id="education"><div className="wrap"><div className="section-heading centered reveal-on-scroll"><span className="section-chip">Education</span><h2>Academic <em>journey.</em></h2><p>The foundation behind my interest in software engineering.</p></div><div className="education-grid"><article className="education-card reveal-on-scroll reveal-delay-1"><span className="education-index">01</span><span className="education-date">2024 — PRESENT</span><GraduationCap className="education-icon"/><h3>Bachelor of Technology</h3><h4>Computer Science & Engineering</h4><p>Bansal Institute of Science and Technology</p><span className="education-badge">CGPA: 7.00</span></article><article className="education-card reveal-on-scroll reveal-delay-2"><span className="education-index">02</span><span className="education-date">2023</span><GraduationCap className="education-icon"/><h3>Class XII</h3><h4>S.T Paul's School & Junior College</h4><p>Nagpur</p><span className="education-badge">71.67%</span></article><article className="education-card reveal-on-scroll reveal-delay-3"><span className="education-index">03</span><span className="education-date">2021</span><GraduationCap className="education-icon"/><h3>Class X</h3><h4>Divya Jyoti Vidhya Peeth</h4><p>Ari, Seoni</p><span className="education-badge">90%</span></article></div></div></section>

    <section className="cert-section section-pink reveal-on-scroll"><div className="wrap cert-layout"><div><span className="section-chip chip-dark">Next Milestones</span><h2>Always learning.<br/><em>Always building.</em></h2></div><div className="cert-copy"><Sparkles size={25}/><p>I'm continuing to strengthen my DSA, full-stack development, and AI/ML foundations through coursework and hands-on projects.</p><a href="https://github.com/ombarmaiya1" className="text-link dark-link" target="_blank" rel="noreferrer">Follow my work <ArrowUpRight size={14}/></a></div></div></section>

    <section className="contact-section section-dark" id="contact"><div className="contact-title">CONTACT</div><div className="contact-panel reveal-on-scroll"><div className="contact-form-wrap"><p className="eyebrow">REACH OUT</p><h2>Have an idea?<br/><em>Let's talk.</em></h2><p className="contact-blurb">For project collaborations, opportunities, or just a conversation about technology.</p><form onSubmit={submit}><label><span>Your name</span><input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Name"/></label><label><span>Email address</span><input required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com"/></label><label className="message-field"><span>Message</span><textarea required value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell me a little about it..." rows="3"/></label><label className="consent"><input type="checkbox" required checked={form.consent} onChange={e => update('consent', e.target.checked)}/><span>It's okay to contact me about this message.</span></label><button className="btn btn-outline submit-btn" type="submit">{sent ? 'Open email again' : 'Send Message'} <ArrowRight size={15}/></button></form></div><aside className="contact-aside"><div className="contact-detail"><Mail/><div><span>EMAIL</span><a href="mailto:ombarmaiyapersonal@gmail.com">ombarmaiyapersonal@gmail.com</a></div></div><div className="contact-detail"><MapPin/><div><span>LOCATION</span><p>Bhopal, Madhya Pradesh, India</p></div></div><div className="contact-detail"><Github/><div><span>GITHUB</span><a href="https://github.com/ombarmaiya1" target="_blank" rel="noreferrer">github.com/ombarmaiya1 ↗</a></div></div><div className="availability"><span className="dot"/> OPEN TO LEARNING, COLLABORATION & OPPORTUNITIES</div></aside></div><footer className="footer"><div><span>Computer Science & Engineering</span><span>React · JavaScript · Java · Python</span></div><a className="footer-signature" href="#home">om<span>.</span></a><div className="footer-right"><span>© 2026 OM BARMAIYA</span><a href="#home">BACK TO TOP ↑</a></div></footer></section>
  </main>;
}

export default App;

import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
