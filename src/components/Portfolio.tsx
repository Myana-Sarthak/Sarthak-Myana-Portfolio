import React, { useState, useRef, FormEvent } from "react";
import { motion } from "motion/react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { PROJECTS } from "../constants";
import { 
  Figma, 
  Layout, 
  Smartphone, 
  Palette, 
  PenTool, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram,
  ExternalLink,
  ChevronRight,
  Award,
  BookOpen,
  Coffee,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-display font-bold tracking-tighter"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            SM<span className="text-accent">.</span>
          </motion.div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium opacity-70 hover:opacity-100 transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
        >
          Contact Me
        </motion.a>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-accent/5 to-transparent blur-[100px]" />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to opportunities
          </motion.span>
          <div className="relative inline-block">
            <h1 className="font-display font-bold leading-[0.9] tracking-tight mb-6">
              <span className="text-2xl md:text-3xl block mb-2 opacity-80">Hi, I’m</span>
              <span className="text-6xl md:text-8xl relative inline-block text-accent">
                Sarthak Myana
                {/* Doodle Underline */}
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-4 text-accent/30"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                >
                  <path d="M5 15 Q 150 5, 295 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </motion.svg>
              </span>
            </h1>
            
            {/* Doodle Arrow pointing to name */}
            <div className="absolute -top-12 -left-12 hidden lg:block">
              <motion.svg
                initial={{ pathLength: 0, opacity: 0, rotate: -15 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1 }}
                width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-accent/40"
              >
                <path d="M10 10 Q 30 10, 40 30 T 50 50 M 50 50 L 40 50 M 50 50 L 50 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
          </div>
          <p className="text-xl md:text-2xl opacity-80 font-medium mb-8 max-w-lg border-l-4 border-accent pl-6">
            UI/UX & Graphic Designer | Crafting Stunning App & Web Experiences
          </p>
          <p className="text-lg opacity-60 mb-10 max-w-xl leading-relaxed">
            Passionate UI/UX and Graphic Designer specializing in modern app and website UI designs. 
            Aspiring to grow as a professional UI/UX Designer creating user-centered, visually stunning digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-6 relative">
            {/* Doodle Arrow pointing to buttons */}
            <div className="absolute -left-16 top-0 hidden xl:block">
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1 }}
                width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-accent/30"
              >
                <path d="M10 10 C 10 30, 30 30, 40 40 M 40 40 L 30 40 M 40 40 L 40 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>

            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="#works" 
              className="px-10 py-5 bg-accent text-white rounded-2xl font-bold transition-all flex items-center gap-3 group shadow-xl shadow-accent/20"
            >
              View My Works 
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-10 py-5 glass rounded-2xl font-bold hover:bg-white/10 transition-all border-white/20"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-accent/30 rounded-[60px]"
            />
            
            <div className="absolute inset-0 bg-accent/20 rounded-[40px] rotate-6 blur-2xl" />
            <div className="absolute inset-0 glass rounded-[40px] -rotate-3 shadow-inner" />
            <img 
              src="https://i.postimg.cc/15gXcDm5/Whats-App-Image-2026-03-03-at-11-17-15-PM.jpg" 
              alt="Sarthak Myana"
              className="relative w-full h-full object-cover rounded-[40px] border border-white/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Doodle Sparkle near UI/UX badge */}
            <div className="absolute -left-16 top-[20%] hidden lg:block">
              <motion.svg
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-accent/40"
              >
                <path d="M15 0 L 18 12 L 30 15 L 18 18 L 15 30 L 12 18 L 0 15 L 12 12 Z" fill="currentColor" />
              </motion.svg>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-1/4 glass px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Layout size={18} />
              </div>
              <span className="font-bold text-sm">UI/UX</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-10 bottom-1/4 glass px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-400">
                <CheckCircle2 size={18} />
              </div>
              <span className="font-bold text-sm">5+ Projects</span>
            </motion.div>

            {/* Floating Design Icons near border */}
            <div className="absolute -top-6 -right-6 flex flex-col gap-3 z-20">
              <motion.div 
                animate={{ rotate: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-accent"
              >
                <Figma size={20} />
              </motion.div>
              <motion.div 
                animate={{ rotate: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-blue-400"
              >
                <Palette size={20} />
              </motion.div>
              <motion.div 
                animate={{ rotate: [0, 15, 0] }} 
                transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-emerald-400"
              >
                <PenTool size={20} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const About = () => {
  const stats = [
    { label: "App UI Projects", value: "2+", icon: <Smartphone className="text-accent" /> },
    { label: "Website UI Projects", value: "2+", icon: <Globe className="text-accent" /> },
    { label: "Poster Designs", value: "15+", icon: <Palette className="text-accent" /> },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Doodle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <path d="M50 200 C 50 100, 350 100, 350 200 C 350 300, 50 300, 50 200" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">About Me</h2>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 w-full h-3 text-accent/40"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 0, 100 5 T 200 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </motion.svg>
            </div>

            <div className="space-y-6 text-lg opacity-60 leading-relaxed">
              <p>
                <span className="opacity-100 font-semibold text-accent">Fresher UI/UX & Graphic Designer</span> with a strong passion for user-centered design. 
                I focus on creating interactive, clean, and modern interfaces that solve real problems.
              </p>
              <p>
                My goal is to become a professional UI/UX Designer who bridges the gap between user needs and business goals through 
                thoughtful design systems and pixel-perfect execution.
              </p>
              <p>
                Based in Hyderabad, I bring a fresh perspective to every project, combining technical skills with creative intuition.
              </p>
            </div>

            {/* Doodle Arrow */}
            <div className="absolute -right-12 bottom-0 hidden lg:block">
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-accent/30"
              >
                <path d="M10 10 Q 40 10, 40 40 T 70 70 M 70 70 L 60 70 M 70 70 L 70 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-8 rounded-3xl flex items-center gap-6 transition-all border-accent/5 hover:border-accent/20 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">{stat.value}</div>
                  <div className="opacity-40 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  const tools = [
    { name: "Figma", icon: <Figma /> },
    { name: "Adobe XD", icon: <Layout /> },
    { name: "Illustrator", icon: <PenTool /> },
    { name: "Canva", icon: <Palette /> },
    { name: "Photoshop", icon: <PenTool /> },
  ];

  const designSkills = [
    "Wireframing", "Prototyping", "UI Design", "Web UI Design", 
    "Mobile App Design", "Graphic Design", "Social Media Posters", "Advertisement Poster Design"
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-current/[0.02] relative overflow-hidden">
      {/* Decorative Doodle Circle */}
      <div className="absolute -top-20 -left-20 opacity-5 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="2" strokeDasharray="15 15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Skills</h2>
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              className="absolute -right-8 -top-4 w-12 h-12 text-accent/30"
              viewBox="0 0 50 50"
            >
              <path d="M10 10 Q 25 0, 40 10 T 40 40 T 10 40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
            </motion.svg>
          </div>
          <p className="opacity-40 max-w-2xl mx-auto">The tools and techniques I use to bring ideas to life.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="glass p-10 rounded-[40px] border-accent/5 h-full">
              <h3 className="text-2xl font-display font-bold mb-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <PenTool size={20} />
                </div>
                Design Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, backgroundColor: "rgba(242, 125, 38, 0.05)" }}
                    className="glass p-8 rounded-3xl flex flex-col items-center gap-4 border-current/5 transition-all group"
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                    <span className="font-bold text-sm tracking-wide">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass p-10 rounded-[40px] border-accent/5 h-full">
              <h3 className="text-2xl font-display font-bold mb-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={20} />
                </div>
                Design Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {designSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(242, 125, 38, 1)", color: "white" }}
                    className="px-6 py-3 glass rounded-2xl text-sm font-bold transition-all cursor-default border-accent/10"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "User-centered interface and experience solutions that are intuitive and engaging.",
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: "Web Design",
      desc: "Clean, responsive, and modern website UI designs tailored to your brand identity.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Mobile App Design",
      desc: "Engaging and intuitive app interfaces designed for seamless user interaction.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Social Media Design",
      desc: "Creative promotional and marketing graphics that capture attention and drive engagement.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Branding",
      desc: "Visual identity creation and advertisement creatives that build strong brand presence.",
      icon: <PenTool className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Doodle Accent */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Services</h2>
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              className="absolute -left-12 -top-4 w-10 h-10 text-accent/30"
              viewBox="0 0 40 40"
            >
              <path d="M5 20 Q 20 5, 35 20 T 20 35 T 5 20" stroke="currentColor" strokeWidth="2" fill="none" />
            </motion.svg>
          </div>
          <p className="opacity-40 max-w-2xl mx-auto">Specialized design solutions for your digital needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-10 rounded-[40px] group transition-all duration-500 border-accent/5 hover:border-accent/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="opacity-50 leading-relaxed group-hover:opacity-80 transition-opacity">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Works = () => {
  return (
    <section id="works" className="py-32 px-6 bg-current/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My Works</h2>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                className="absolute -right-12 -top-2 w-10 h-10 text-accent/30"
                viewBox="0 0 40 40"
              >
                <path d="M5 5 L 35 35 M 35 5 L 5 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </motion.svg>
            </div>
            <p className="opacity-40 max-w-xl">A selection of my recent projects across UI/UX and Graphic Design.</p>
          </div>
        </div>

        <div className="grid gap-32">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center group`}
            >
              <div className="w-full md:w-3/5 relative">
                <div className="absolute -inset-6 bg-accent/5 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="overflow-hidden rounded-[48px] border border-white/10 relative z-10 shadow-2xl bg-white/5 backdrop-blur-sm p-3">
                    <motion.div className="overflow-hidden rounded-[36px]">
                      <motion.img 
                        whileHover={project.id === 'vault-ease' ? {} : { scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        src={project.image} 
                        alt={project.title}
                        className={`w-full aspect-[16/10] object-cover ${project.id === 'vault-ease' ? 'cursor-default' : 'cursor-pointer'}`}
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                </div>
                {/* Doodle Accent */}
                <div className={`absolute -bottom-6 ${i % 2 === 1 ? '-left-6' : '-right-6'} hidden lg:block z-20`}>
                  <motion.svg
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-accent"
                  >
                    <path d="M10 10 Q 30 0, 50 10 T 50 50 T 10 50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </motion.svg>
                </div>
              </div>
              <div className="w-full md:w-2/5 space-y-8">
                <div className="space-y-2">
                  <span className="text-accent font-bold tracking-widest uppercase text-xs px-3 py-1 rounded-full bg-accent/10">{project.category}</span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
                <p className="text-lg opacity-50 leading-relaxed border-l-2 border-current/10 pl-6">{project.desc}</p>
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex px-10 py-4 bg-accent text-white rounded-2xl font-bold transition-all items-center gap-3 shadow-xl shadow-accent/20 hover:scale-105"
                >
                  View <ExternalLink size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Education = () => {
  const steps = [
    {
      title: "SSC",
      institution: "Telangana State Model School",
      year: "2020",
      grade: "CGPA: 9.7",
      color: "#F27D26",
      pos: { x: "10%", y: "20%" }
    },
    {
      title: "Intermediate – MPC",
      institution: "Sai Sri Junior College",
      year: "2021–2022",
      grade: "Percentage: 78.6%",
      color: "#3B82F6",
      pos: { x: "40%", y: "70%" }
    },
    {
      title: "BSc – MPCs",
      institution: "Government Degree College",
      year: "Current",
      grade: "CGPA: 8.70",
      color: "#10B981",
      pos: { x: "70%", y: "30%" }
    },
    {
      title: "Future",
      institution: "Professional UI/UX Designer",
      year: "2026+",
      grade: "Goal",
      color: "#8B5CF6",
      pos: { x: "90%", y: "60%" }
    }
  ];

  return (
    <section id="education" className="py-32 px-6 overflow-hidden bg-current/[0.01] relative">
      {/* Doodle Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000">
          <path d="M0 500 Q 250 250, 500 500 T 1000 500" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M0 300 Q 250 550, 500 300 T 1000 300" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Education Journey</h2>
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              className="absolute -right-12 -bottom-2 w-16 h-8 text-accent/30"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path d="M0 10 Q 25 0, 50 10 T 100 10" stroke="currentColor" strokeWidth="3" fill="none" />
            </motion.svg>
          </div>
          <p className="opacity-40">A visual path of my academic and professional growth.</p>
        </div>

        <div className="relative h-[600px] w-full hidden md:block">
          <motion.svg
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" fill="none"
          >
            <path
              d="M 50 150 Q 250 150 250 350 T 450 350 T 650 150 T 850 350"
              stroke="currentColor"
              strokeOpacity="0.05"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="12 12"
            />
            <motion.path
              d="M 50 150 Q 250 150 250 350 T 450 350 T 650 150 T 850 350"
              stroke="url(#gradient-edu)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-edu" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F27D26" />
                <stop offset="33%" stopColor="#3B82F6" />
                <stop offset="66%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </motion.svg>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.3, type: "spring", stiffness: 100 }}
              className="absolute group"
              style={{ left: step.pos.x, top: step.pos.y }}
            >
              <div 
                className="w-8 h-8 rounded-full border-4 border-bg-dark z-10 relative cursor-pointer group-hover:scale-125 transition-transform duration-300"
                style={{ backgroundColor: step.color, boxShadow: `0 0 30px ${step.color}` }}
              />
              
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 glass p-8 rounded-[32px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none z-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-accent/10">
                <div className="opacity-40 text-xs font-bold uppercase tracking-widest mb-2">{step.year}</div>
                <h3 className="text-xl font-display font-bold mb-1">{step.title}</h3>
                <div className="opacity-60 text-sm mb-4">{step.institution}</div>
                <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">
                  {step.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-4 border-bg-dark" style={{ backgroundColor: step.color, boxShadow: `0 0 15px ${step.color}` }} />
                <div className="w-1 h-full bg-current/5 mt-2 rounded-full" />
              </div>
              <div className="glass p-8 rounded-3xl flex-1 border-accent/5">
                <div className="opacity-40 text-xs font-bold uppercase tracking-widest mb-2">{step.year}</div>
                <h3 className="text-2xl font-display font-bold mb-1">{step.title}</h3>
                <p className="opacity-60 text-base mb-4">{step.institution}</p>
                <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">{step.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Certifications = () => {
  const certs = [
    { title: "UI/UX Design Specialization", org: "Coursera / Google" },
    { title: "User experience design by google", org: "cursa" },
    { title: "adobe xd & photoshop", org: "Simplilearn" },
    { title: "Figma master Bootcamp", org: "Letsupgrade" }
  ];

  return (
    <section id="certifications" className="py-32 px-6 bg-current/[0.02] relative overflow-hidden">
      {/* Doodle Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="doodle-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="currentColor" />
            <path d="M10 10 L 20 20 M 20 10 L 10 20" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Certifications</h2>
            <motion.svg
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              className="absolute -left-10 -bottom-4 w-20 h-10 text-accent/30"
              viewBox="0 0 100 40"
            >
              <path d="M10 30 Q 50 10, 90 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </motion.svg>
          </div>
          <p className="opacity-40">Professional recognition of my skills and expertise.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="glass p-10 rounded-[32px] border-accent/5 hover:border-accent/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="opacity-40 text-sm font-medium">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_xhgy9wi',
        'template_2brcva8',
        formRef.current,
        'TXlvdv8XZFF2ROZwq'
      );
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Doodle Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.svg
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-10 text-accent/5" width="100" height="100" viewBox="0 0 100 100"
        >
          <path d="M10 50 Q 50 10, 90 50 T 10 50" stroke="currentColor" strokeWidth="2" fill="none" />
        </motion.svg>
        <motion.svg
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-blue-500/5" width="120" height="120" viewBox="0 0 120 120"
        >
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 10" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Get In Touch</h2>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                className="absolute -right-16 top-0 w-12 h-12 text-accent/30"
                viewBox="0 0 40 40"
              >
                <path d="M5 5 Q 20 0, 35 5 T 35 35 T 5 35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </motion.svg>
            </div>
            <p className="text-xl opacity-50 mb-16 leading-relaxed border-l-4 border-accent pl-8">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Mail />, label: "Email Me", value: "myanasarthak19@gmail.com", href: "mailto:myanasarthak19@gmail.com" },
                { icon: <Phone />, label: "Call Me", value: "+91 8179772600", href: "tel:8179772600" },
                { icon: <MapPin />, label: "Location", value: "Hyderabad, Telangana, India", href: null }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="opacity-40 text-sm font-bold uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-2xl font-bold hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-2xl font-bold">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6 mt-16">
              {[
                { icon: <Linkedin />, href: "#" },
                { icon: <Instagram />, href: "https://instagram.com/sarthak_myana" },
                { icon: <Globe />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -8, scale: 1.1, backgroundColor: "rgba(242, 125, 38, 1)", color: "white" }}
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-current/60 transition-all border-accent/10 shadow-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[48px] border-accent/5 shadow-2xl relative"
          >
            {/* Doodle Accent */}
            <div className="absolute -right-6 -bottom-6 opacity-20">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path d="M10 10 Q 50 0, 90 10 T 90 90 T 10 90 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5 5" />
              </svg>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Name</label>
                  <input name="user_name" required type="text" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all border-accent/5" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Email</label>
                  <input name="user_email" required type="email" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all border-accent/5" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Subject</label>
                <input name="subject" required type="text" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all border-accent/5" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60 ml-1">Message</label>
                <textarea name="message" required rows={5} className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all resize-none border-accent/5" placeholder="Tell me about your project..."></textarea>
              </div>
              
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl text-sm font-medium ${
                    status.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, shadow: "0 20px 40px rgba(242, 125, 38, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 bg-accent text-white rounded-2xl font-bold shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all text-lg tracking-wide flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-current/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="text-2xl font-display font-bold mb-2">SM<span className="text-accent">.</span></div>
          <p className="opacity-40 font-medium">Designing Experiences That Users Love.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-sm opacity-40 hover:opacity-100 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm opacity-40 hover:opacity-100 transition-colors">Terms of Service</a>
        </div>

        <div className="text-sm opacity-40">
          © 2026 Sarthak Myana. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
