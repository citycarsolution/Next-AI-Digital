"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: "Basic",
      price: "₹5,000",
      highlight: false,
      features: [
        "1–5 Pages Website",
        "Mobile Responsive Design",
        "WhatsApp Chat Integration",
        "Basic UI Design",
        "Fast Loading",
      ],
    },
    {
      name: "Starter",
      price: "₹10,000",
      highlight: false,
      features: [
        "5–8 Pages Website",
        "Modern UI Design",
        "Contact Form",
        "Basic SEO Setup",
        "Speed Optimization",
        "Google Map Integration",
      ],
    },
    {
      name: "Growth",
      price: "₹25,000",
      highlight: true,
      features: [
        "8–12 Pages Website",
        "Premium UI/UX Design",
        "WhatsApp + Lead System",
        "Advanced SEO Ready",
        "Fast Performance Optimization",
        "Conversion Focused Design",
        "Basic Analytics Setup",
      ],
    },
    {
      name: "Business",
      price: "₹45,000",
      highlight: false,
      features: [
        "Custom Design Website",
        "Advanced UI/UX Experience",
        "Complete SEO Setup",
        "Speed Optimization",
        "Security Setup",
        "Lead Generation System",
        "Google Analytics Integration",
        "Scalable Architecture",
      ],
    },
    {
      name: "Pro AI",
      price: "₹60,000+",
      highlight: false,
      features: [
        "AI Powered Website",
        "Admin Panel Dashboard",
        "Booking System",
        "Payment Integration",
        "AI Automation System",
        "CRM Integration",
        "Custom Features Development",
        "Full Business Automation",
      ],
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

      if (index >= plans.length) index = 0;

      slider.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-black text-white">

      {/* 🔥 Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-6xl font-extrabold">
          Pricing That Grows Your Business 🚀
        </h2>
        <p className="text-gray-400 mt-3">
          Professional website packages for serious businesses 💰
        </p>
      </div>

      {/* 💻 Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <Card key={i} plan={plan} />
        ))}
      </div>

      {/* 📱 Mobile Slider */}
      <div
        ref={sliderRef}
        className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
      >
        {plans.map((plan, i) => (
          <div key={i} className="min-w-full snap-center px-2">
            <Card plan={plan} />
          </div>
        ))}
      </div>

    </section>
  );
}

// 💎 Card Component
function Card({ plan }: any) {
  return (
    <div
      className={`p-[1px] rounded-2xl ${
        plan.highlight
          ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-105 shadow-2xl"
          : "bg-white/10"
      }`}
    >
      <div className="bg-black rounded-2xl p-6 text-center flex flex-col gap-4">

        {/* Plan Name */}
        <h3 className="text-xl font-bold">{plan.name}</h3>

        {/* Price */}
        <p className="text-3xl font-extrabold text-blue-400">
          {plan.price}
        </p>

        {/* Features */}
        <ul className="text-gray-400 text-sm space-y-2 text-left">
          {plan.features.map((f: string, idx: number) => (
            <li key={idx}>✔ {f}</li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/919082552031?text=I want ${plan.name} Plan`}
          className={`mt-3 px-5 py-2 rounded-lg font-semibold ${
            plan.highlight
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          Book Now
        </a>

      </div>
    </div>
  );
}