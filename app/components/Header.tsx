"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-lg"
          : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔥 Logo */}
<a href="/" className="flex items-center">
  <Image
    src="/logo.jpg"
    alt="Next AI Digital"
    width={140}
    height={50}
    priority
    className="object-contain h-14 w-auto"
  />
</a>

        {/* 💻 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">

          <a
            href="#services"
            className="hover:text-blue-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-blue-400 transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="#pricing"
            className="hover:text-blue-400 transition duration-300"
          >
            Pricing
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>

          {/* ✅ WhatsApp CTA */}
          <a
            href="https://wa.me/919082552031"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-5 py-2 rounded-xl font-semibold text-white hover:bg-green-600 transition duration-300 shadow-md"
          >
            WhatsApp
          </a>

        </nav>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4 animate-fadeIn">

          <a href="#services" className="block hover:text-blue-400 transition">
            Services
          </a>

          <a href="#portfolio" className="block hover:text-blue-400 transition">
            Portfolio
          </a>

          <a href="#pricing" className="block hover:text-blue-400 transition">
            Pricing
          </a>

          <a href="#contact" className="block hover:text-blue-400 transition">
            Contact
          </a>

          <a
            href="https://wa.me/919082552031"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-center py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            WhatsApp
          </a>

        </div>
      )}
    </header>
  );
}