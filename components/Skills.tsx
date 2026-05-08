"use client";

import { useEffect, useRef } from "react";
import { skillCategories, toolLogos } from "@/data/skills";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll(".skill-bar-fill");
            fills.forEach((fill) => fill.classList.add("animated"));
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barsRef.current) barObserver.observe(barsRef.current);
    return () => barObserver.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-[#1e293b]/30 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            Tools &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over 6+ years of hands-on QA engineering across diverse tech stacks and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16" ref={barsRef}>
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 section-reveal transition-all duration-300 hover:scale-[1.02]"
              style={{ transitionDelay: String(catIdx * 80) + "ms" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                <h3 className="font-bold text-[#e2e8f0] text-sm">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-[#e2e8f0] text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: category.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          "--skill-width": String(skill.level) + "%",
                          background: "linear-gradient(90deg, " + category.color + ", " + category.color + "99)",
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal">
          <p className="text-center text-[#94a3b8] text-sm mb-6 uppercase tracking-widest">
            Tools I Work With Daily
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {toolLogos.map((tool) => (
              <span
                key={tool}
                className="tag-badge text-sm py-2 px-4 hover:bg-[#38bdf8]/20 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
