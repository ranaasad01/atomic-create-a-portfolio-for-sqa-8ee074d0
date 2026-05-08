"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-[#1e293b]/30 relative" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Social Proof
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Feedback from managers, colleagues, and cross-functional partners who&apos;ve experienced the impact of quality-first engineering.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="section-reveal mb-8">
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-8xl text-[#38bdf8]/10 font-serif leading-none select-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#fbbf24] fill-[#fbbf24]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#e2e8f0] text-lg sm:text-xl leading-relaxed mb-8 italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-[#0f172a] font-bold text-sm flex-shrink-0">
                  {current.avatar}
                </div>
                <div>
                  <p className="text-[#e2e8f0] font-bold">{current.name}</p>
                  <p className="text-[#38bdf8] text-sm">{current.role}</p>
                  <p className="text-[#94a3b8] text-xs">{current.company} · {current.relationship}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#334155] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={"w-2 h-2 rounded-full transition-all duration-200 " + (i === active ? "bg-[#38bdf8] w-6" : "bg-[#334155] hover:bg-[#94a3b8]")}
                  aria-label={"Go to testimonial " + String(i + 1)}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#334155] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* All testimonials mini grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 section-reveal">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={"glass-card rounded-xl p-4 text-left transition-all duration-200 hover:scale-[1.02] " + (i === active ? "border-[#38bdf8]/40 shadow-lg shadow-[#38bdf8]/10" : "")}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-[#0f172a] font-bold text-xs flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#e2e8f0] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#94a3b8] text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-[#94a3b8] text-xs line-clamp-3 italic">&ldquo;{t.quote}&rdquo;</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
