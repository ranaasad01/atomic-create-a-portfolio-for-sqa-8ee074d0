import { Code2 as Github, Briefcase as Linkedin, Mail, Heart } from 'lucide-react';

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-[#1e293b] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-[#0f172a] font-bold text-sm">
                AM
              </div>
              <span className="font-bold text-[#e2e8f0]">Alex Morgan</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Senior SQA Engineer passionate about building quality into every stage of the software development lifecycle.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/alexmorgan-sqa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:alex.morgan@email.com"
                className="w-9 h-9 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#e2e8f0] font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] text-sm hover:text-[#38bdf8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#e2e8f0] font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-[#94a3b8]">
              <p>
                <span className="text-[#e2e8f0] font-medium">Email:</span>{" "}
                <a href="mailto:alex.morgan@email.com" className="hover:text-[#38bdf8] transition-colors">
                  alex.morgan@email.com
                </a>
              </p>
              <p>
                <span className="text-[#e2e8f0] font-medium">Location:</span> San Francisco, CA
              </p>
              <p>
                <span className="text-[#e2e8f0] font-medium">Status:</span>{" "}
                <span className="text-[#34d399]">● Open to opportunities</span>
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-2 text-[#38bdf8] hover:text-[#7dd3fc] transition-colors font-medium"
              >
                Download Resume →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e293b] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#94a3b8]">
          <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
