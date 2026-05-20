"use client";

import { Cpu, Globe, Code, Bot, Smartphone, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Website Development",
      desc: "AI powered websites that attract real clients.",
      icon: <Bot size={34} />,
    },
    {
      title: "Business Website",
      desc: "Modern, fast and mobile-friendly websites.",
      icon: <Globe size={34} />,
    },
    {
      title: "Web Applications",
      desc: "Custom web apps with automation features.",
      icon: <Code size={34} />,
    },
    {
      title: "AI Automation",
      desc: "Automate your business with smart AI tools.",
      icon: <Cpu size={34} />,
    },
    {
      title: "Mobile App Development",
      desc: "Android & iOS apps for business growth.",
      icon: <Smartphone size={34} />,
    },
    {
      title: "SEO & Ads",
      desc: "Get real leads using Google Ads & SEO.",
      icon: <BarChart3 size={34} />,
    },
  ];

  return (
    <section
  id="services"
  className="py-24 px-6 bg-black text-white relative overflow-hidden"
>

      {/* 🔥 Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI Services</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          AI + Technology से business growth 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">

        {services.map((item, i) => (
          <div
            key={i}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500 hover:to-purple-500 transition duration-300"
          >
            <div className="bg-black rounded-2xl p-6 h-full flex flex-col justify-between backdrop-blur-xl">

              {/* Icon */}
              <div className="mb-5 text-blue-400 group-hover:text-purple-400 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}