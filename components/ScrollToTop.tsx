"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={"fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#38bdf8] text-[#0f172a] flex items-center justify-center shadow-lg shadow-[#38bdf8]/30 hover:bg-[#7dd3fc] transition-all duration-300 " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
