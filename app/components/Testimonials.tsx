"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      text: "Amazing website! I started getting real client inquiries within a week. Highly recommended!",
    },
    {
      name: "Priya Verma",
      role: "Startup Founder",
      text: "Professional design and fast delivery. My business looks premium now!",
    },
    {
      name: "Amit Patel",
      role: "Real Estate Agent",
      text: "Got leads from Google within days. The best investment I made!",
    },
    {
      name: "Sneha Gupta",
      role: "Clinic Owner",
      text: "Clean design and great support. My patients now find me easily online.",
    },
    {
      name: "Vikram Singh",
      role: "Gym Owner",
      text: "Super fast website with WhatsApp leads. Increased my clients a lot!",
    },
  ];

  // 🔥 Auto Slide (Mobile)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;

    const interval = setInterval(() => {
      const width = slider.clientWidth;
      index++;

      if (index >= testimonials.length) index = 0;

      slider.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-black text-white">

      {/* 🔥 Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-6xl font-extrabold">
          What Our Clients Say 💬
        </h2>
        <p className="text-gray-400 mt-3">
          Real feedback from real business owners 🚀
        </p>
      </div>

      {/* 💻 Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>

      {/* 📱 Mobile Slider */}
      <div
        ref={sliderRef}
        className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-full snap-center px-2">
            <Card t={t} />
          </div>
        ))}
      </div>

    </section>
  );
}

// 💎 Card Component
function Card({ t }: any) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg hover:scale-105 transition duration-300">

      {/* ⭐ Stars */}
      <div className="text-yellow-400 mb-3">★★★★★</div>

      {/* 🧠 Text */}
      <p className="text-gray-300 text-sm mb-4">
        "{t.text}"
      </p>

      {/* 👤 Name */}
      <h4 className="font-semibold">{t.name}</h4>
      <p className="text-gray-400 text-xs">{t.role}</p>

    </div>
  );
}