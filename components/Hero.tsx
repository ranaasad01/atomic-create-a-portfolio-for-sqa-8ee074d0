"use client";

import { useEffect, useState } from "react";
import { Code2 as Github, Briefcase as Linkedin, Download, ArrowRight, Mail } from 'lucide-react';

const roles = [
  "SQA Engineer",
  "Test Automation Architect",
  "Quality Champion",
  "CI/CD Integrator",
  "Bug Hunter",
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "3,500+", label: "Test Cases Written" },
  { value: "1,200+", label: "Bugs Reported" },
  { value: "94%", label: "Automation Coverage" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#818cf8]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38bdf8]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full px-4 py-2 text-sm text-[#38bdf8]">
              <span className="w-2 h-2 bg-[#38bdf8] rounded-full animate-pulse" />
              Available for new opportunities
            </div>

            {/* Name */}
            <div>
              <p className="text-[#94a3b8] text-lg mb-2 font-medium">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#e2e8f0] leading-tight">
                Alex{" "}
                <span className="gradient-text">Morgan</span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="h-12 flex items-center">
              <span className="text-2xl sm:text-3xl font-bold text-[#38bdf8]">
                {displayed}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-lg">
              I build bulletproof software by breaking it first. Specializing in
              test automation, API testing, and CI/CD quality gates that ship
              confidence, not just code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary"
              >
                View Projects <ArrowRight size={18} />
              </button>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={18} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[#94a3b8] text-sm">Find me on:</span>
              <a
                href="https://github.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] transition-colors group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/alexmorgan-sqa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:alex.morgan@email.com"
                className="flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] transition-colors group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Right — Avatar + Stats */}
          <div className="flex flex-col items-center gap-8 animate-fade-in">
            {/* Avatar */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#38bdf8]/30 shadow-2xl shadow-[#38bdf8]/20 animate-float">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/61a16d33bb6d752d603b59b3/0152af33-9de9-4eaf-9317-0b6c3cc64c9c/DSCF4888.jpg"
                  alt="Alex Morgan — SQA Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#1e293b] border border-[#38bdf8]/30 rounded-xl px-3 py-2 text-xs font-semibold text-[#38bdf8] shadow-lg">
                ISTQB Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1e293b] border border-[#818cf8]/30 rounded-xl px-3 py-2 text-xs font-semibold text-[#818cf8] shadow-lg">
                6+ Years QA
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-black text-[#38bdf8]">
                    {stat.value}
                  </div>
                  <div className="text-[#94a3b8] text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8] text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-[#94a3b8]/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-[#38bdf8] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
