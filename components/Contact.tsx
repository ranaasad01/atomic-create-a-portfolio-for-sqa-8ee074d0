"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Briefcase as Linkedin, Code2 as Github, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".section-reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate sending (replace with EmailJS in production)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    "w-full bg-[#0f172a]/60 border rounded-xl px-4 py-3 text-[#e2e8f0] text-sm placeholder-[#475569] focus:outline-none focus:ring-2 transition-all duration-200 " +
    (errors[field]
      ? "border-red-500/50 focus:ring-red-500/30"
      : "border-[#334155] focus:ring-[#38bdf8]/30 focus:border-[#38bdf8]/50");

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-reveal">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#e2e8f0] mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Whether you&apos;re looking for a senior QA engineer, want to discuss automation strategy, or just want to connect — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-6 section-reveal">
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="text-[#e2e8f0] font-bold text-lg">Contact Information</h3>

              <a
                href="mailto:alex.morgan@email.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center group-hover:bg-[#38bdf8]/20 transition-colors">
                  <Mail size={18} className="text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs">Email</p>
                  <p className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#38bdf8] transition-colors">
                    alex.morgan@email.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/alexmorgan-sqa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#818cf8]/10 border border-[#818cf8]/20 flex items-center justify-center group-hover:bg-[#818cf8]/20 transition-colors">
                  <Linkedin size={18} className="text-[#818cf8]" />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs">LinkedIn</p>
                  <p className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#818cf8] transition-colors">
                    linkedin.com/in/alexmorgan-sqa
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#34d399]/10 border border-[#34d399]/20 flex items-center justify-center group-hover:bg-[#34d399]/20 transition-colors">
                  <Github size={18} className="text-[#34d399]" />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs">GitHub</p>
                  <p className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#34d399] transition-colors">
                    github.com/alexmorgan
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fb923c]/10 border border-[#fb923c]/20 flex items-center justify-center">
                  <MapPin size={18} className="text-[#fb923c]" />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs">Location</p>
                  <p className="text-[#e2e8f0] text-sm font-medium">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f472b6]/10 border border-[#f472b6]/20 flex items-center justify-center">
                  <Clock size={18} className="text-[#f472b6]" />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs">Response Time</p>
                  <p className="text-[#e2e8f0] text-sm font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card rounded-xl p-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#34d399] rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-[#e2e8f0] text-sm font-semibold">Available for Opportunities</p>
                <p className="text-[#94a3b8] text-xs">Open to full-time and contract roles</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 section-reveal">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-[#34d399]/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#34d399]" />
                  </div>
                  <h3 className="text-[#e2e8f0] text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[#94a3b8]">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[#e2e8f0] text-sm font-medium mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass("name")}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#e2e8f0] text-sm font-medium mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={inputClass("email")}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[#e2e8f0] text-sm font-medium mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass("subject")}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    >
                      <option value="" disabled>Select a subject...</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Contract / Freelance">Contract / Freelance</option>
                      <option value="QA Consultation">QA Consultation</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#e2e8f0] text-sm font-medium mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or question you have..."
                      className={inputClass("message") + " resize-none"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                    <p className="text-[#475569] text-xs mt-1 text-right">
                      {form.message.length} / 500
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0f172a]/40 border-t-[#0f172a] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
