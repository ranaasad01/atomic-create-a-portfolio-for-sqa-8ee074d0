"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const highlights = [
  "ISTQB Advanced Level Test Automation Engineer certified",
  "Expert in Selenium, Cypress, Playwright, and Appium",
  "Reduced regression cycles by 70% through strategic automation",
  "Mentored 10+ junior QA engineers across 3 companies",
  "Advocate for shift-left testing and quality-first culture",
  "Strong communicator bridging QA, Dev, and Product teams",
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "I believe quality is everyone's responsibility, but QA engineers are its champions. Every test I write is a commitment to the end user.",
    color: "#38bdf8",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description:
      "The testing landscape evolves fast. I stay ahead by constantly learning new tools, methodologies, and industry best practices.",
    color: "#818cf8",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great QA isn't done in isolation. I embed myself in development teams to catch issues early and build quality into the process.",
    color: "#34d399",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            Passionate About{" "}
            <span className="gradient-text">Software Quality</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            6+ years of turning complex software into reliable, tested, and
            production-ready products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-6 section-reveal">
            <div className="relative">
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-[#38bdf8]/20">
                <img
                  src="https://www.testdevlab.com/_next/image?url=https%3A%2F%2Fcms.testdevlab.com%2Fcontent%2Fimages%2Fwordpress%2F2018%2F12%2FTestDevLab-Ventspils_Billijs.lv-0223-copy.jpg&w=3840&q=75"
                  alt="QA Engineering workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div className="glass-card rounded-lg px-3 py-2 text-xs text-[#38bdf8] font-medium">
                  📍 San Francisco, CA
                </div>
                <div className="glass-card rounded-lg px-3 py-2 text-xs text-[#34d399] font-medium">
                  ✅ Open to Remote
                </div>
              </div>
            </div>

            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                I&apos;m a Senior SQA Engineer with over 6 years of experience
                building and scaling quality assurance processes for high-growth
                tech companies. My journey started with manual testing, but I
                quickly realized that automation was the key to sustainable
                quality at scale.
              </p>
              <p>
                Today, I specialize in designing test automation architectures
                that integrate seamlessly into CI/CD pipelines, enabling teams
                to ship faster without sacrificing reliability. I&apos;ve worked
                across fintech, e-commerce, and SaaS domains, each teaching me
                that quality challenges are universal even when the tech stacks
                differ.
              </p>
              <p>
                When I&apos;m not writing test scripts, I&apos;m contributing to
                open-source QA tools, writing about testing best practices on my
                blog, or mentoring the next generation of QA engineers.
              </p>
            </div>
          </div>

          {/* Right — Highlights + Values */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="section-reveal">
              <h3 className="text-xl font-bold text-[#e2e8f0] mb-4">
                What I Bring to the Table
              </h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#38bdf8] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#94a3b8] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="space-y-4 section-reveal">
              <h3 className="text-xl font-bold text-[#e2e8f0] mb-4">
                My QA Philosophy
              </h3>
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="glass-card rounded-xl p-4 flex gap-4 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: value.color + "20" }}
                    >
                      <Icon size={20} style={{ color: value.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#e2e8f0] text-sm mb-1">
                        {value.title}
                      </h4>
                      <p className="text-[#94a3b8] text-xs leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
