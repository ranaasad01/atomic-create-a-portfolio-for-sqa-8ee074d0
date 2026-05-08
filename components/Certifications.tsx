"use client";

import { useEffect, useRef } from "react";
import { certifications } from "@/data/certifications";
import { ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
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

  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Credentials
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            Certifications &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in software testing, automation, and cloud technologies.
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((cert, idx) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 section-reveal transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden"
              style={{ transitionDelay: String(idx * 100) + "ms" }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: cert.color }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: cert.color + "20", border: "1px solid " + cert.color + "40" }}
                  >
                    {cert.badge}
                  </div>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors p-1"
                    aria-label={"Verify " + cert.name + " certification"}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="text-[#e2e8f0] font-bold text-sm leading-snug mb-2">
                  {cert.name}
                </h3>
                <p className="font-semibold text-sm mb-1" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-[#94a3b8] text-xs mb-3">{cert.date}</p>
                <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="bg-[#0f172a]/60 rounded-lg px-3 py-2">
                  <p className="text-[#94a3b8] text-xs">Credential ID</p>
                  <p className="text-[#e2e8f0] text-xs font-mono mt-0.5 truncate">
                    {cert.credentialId}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 section-reveal">
          {others.map((cert, idx) => (
            <div
              key={cert.id}
              className="glass-card rounded-xl p-4 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]"
              style={{ transitionDelay: String(idx * 80) + "ms" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: cert.color + "20", border: "1px solid " + cert.color + "40" }}
              >
                {cert.badge}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#e2e8f0] font-semibold text-sm leading-snug truncate">
                  {cert.name}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-[#94a3b8] text-xs">{cert.date}</p>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex-shrink-0"
                aria-label={"Verify " + cert.name}
              >
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Total count */}
        <div className="text-center mt-10 section-reveal">
          <div className="inline-flex items-center gap-2 bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full px-5 py-2.5 text-sm text-[#38bdf8]">
            <Award size={16} />
            {certifications.length} Professional Certifications &amp; Counting
          </div>
        </div>
      </div>
    </section>
  );
}
