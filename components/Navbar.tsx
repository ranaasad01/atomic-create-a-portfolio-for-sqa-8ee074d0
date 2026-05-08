"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 as Github, Briefcase as Linkedin } from 'lucide-react';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navBg = scrolled
    ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-[#38bdf8]/10 shadow-lg shadow-black/20"
    : "bg-transparent";

  return (
    <nav
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navBg}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-[#0f172a] font-bold text-sm">
              AM
            </div>
            <span className="font-bold text-[#e2e8f0] group-hover:text-[#38bdf8] transition-colors">
              Alex Morgan
            </span>
            <span className="hidden sm:inline text-[#38bdf8] text-xs font-medium bg-[#38bdf8]/10 px-2 py-0.5 rounded-full">
              SQA
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={"nav-link px-3 py-2 text-sm font-medium transition-colors rounded-md " + (isActive ? "text-[#38bdf8]" : "text-[#94a3b8] hover:text-[#e2e8f0]")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors p-2 rounded-md hover:bg-[#38bdf8]/10"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/alexmorgan-sqa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors p-2 rounded-md hover:bg-[#38bdf8]/10"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a href="/resume.pdf" download className="btn-primary text-sm py-2 px-4">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#94a3b8] hover:text-[#38bdf8] hover:bg-[#38bdf8]/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={"md:hidden transition-all duration-300 overflow-hidden " + (isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}
      >
        <div className="bg-[#0f172a]/98 backdrop-blur-md border-t border-[#38bdf8]/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={"w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors " + (isActive ? "text-[#38bdf8] bg-[#38bdf8]/10" : "text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1e293b]")}
              >
                {link.label}
              </button>
            );
          })}
          <div className="flex items-center gap-3 pt-3 border-t border-[#1e293b]">
            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] transition-colors text-sm"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/alexmorgan-sqa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] transition-colors text-sm"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="/resume.pdf" download className="ml-auto btn-primary text-sm py-2 px-4">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
