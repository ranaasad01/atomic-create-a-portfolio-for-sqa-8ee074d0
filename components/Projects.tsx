"use client";

import { useState, useEffect, useRef } from "react";
import { projects, projectCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
    <section id="projects" className="py-24 bg-[#1e293b]/30 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Real-world QA projects spanning automation frameworks, API testing suites, performance benchmarks, and developer tooling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 section-reveal">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={"px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 " + (activeCategory === cat.id ? "bg-[#38bdf8] text-[#0f172a]" : "bg-[#1e293b] text-[#94a3b8] hover:text-[#e2e8f0] border border-[#334155] hover:border-[#38bdf8]/40")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 section-reveal">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 section-reveal">
          <p className="text-[#94a3b8] mb-4">
            Want to see more? Check out all my repositories on GitHub.
          </p>
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
