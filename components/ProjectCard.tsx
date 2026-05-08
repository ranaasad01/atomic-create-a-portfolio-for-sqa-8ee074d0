"use client";

import { useState } from "react";
import { Code2 as Github, ExternalLink, X, CheckCircle } from 'lucide-react';
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#38bdf8]/10 flex flex-col"
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={"text-xs font-semibold px-2 py-1 rounded-full " + (tag === "Featured" ? "bg-[#38bdf8] text-[#0f172a]" : "bg-[#1e293b]/80 text-[#38bdf8] border border-[#38bdf8]/30")}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-[#e2e8f0] font-bold text-base mb-2 group-hover:text-[#38bdf8] transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="bg-[#0f172a]/60 rounded-lg p-2 text-center">
                <div className="text-[#38bdf8] font-bold text-sm">{stat.value}</div>
                <div className="text-[#94a3b8] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="tag-badge text-xs">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="tag-badge text-xs">+{project.techStack.length - 4}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
              aria-label={"View " + project.title + " on GitHub"}
            >
              <Github size={15} /> GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                aria-label={"View live demo of " + project.title}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="ml-auto text-sm text-[#38bdf8] hover:text-[#7dd3fc] transition-colors font-medium"
            >
              Details →
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={project.title + " details"}
        >
          <div
            className="bg-[#1e293b] border border-[#38bdf8]/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent" />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-[#0f172a]/80 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-4 left-6 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={"text-xs font-semibold px-2 py-1 rounded-full " + (tag === "Featured" ? "bg-[#38bdf8] text-[#0f172a]" : "bg-[#1e293b]/80 text-[#38bdf8] border border-[#38bdf8]/30")}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <h2 className="text-2xl font-bold text-[#e2e8f0]">{project.title}</h2>
              <p className="text-[#94a3b8] leading-relaxed">{project.longDescription}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0f172a]/60 rounded-xl p-3 text-center">
                    <div className="text-[#38bdf8] font-bold text-lg">{stat.value}</div>
                    <div className="text-[#94a3b8] text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-[#e2e8f0] font-semibold mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                      <CheckCircle size={14} className="text-[#38bdf8] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-[#e2e8f0] font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  <Github size={16} /> View on GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 px-5"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
