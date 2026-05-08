"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/experience";
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function Experience() {
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
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Work History
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            A track record of delivering quality at scale across fintech, e-commerce, and SaaS companies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative timeline-line">
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={"relative flex gap-8 section-reveal " + (idx % 2 === 0 ? "md:flex-row" : "md:flex-row")}
                style={{ transitionDelay: String(idx * 100) + "ms" }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className={"w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0 " + (exp.current ? "border-[#38bdf8] bg-[#38bdf8]/20 text-[#38bdf8]" : "border-[#334155] bg-[#1e293b] text-[#94a3b8]")}>
                    {exp.logo}
                  </div>
                  {idx < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#38bdf8]/40 to-transparent mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 hover:border-[#38bdf8]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#38bdf8]/5">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-[#e2e8f0]">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30 px-2 py-0.5 rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#38bdf8] font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-[#94a3b8] space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar size={13} />
                        <span>{exp.startDate} — {exp.endDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="text-[#38bdf8] text-xs font-medium">{exp.duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-[#e2e8f0] text-sm font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                          <CheckCircle size={14} className="text-[#38bdf8] mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
