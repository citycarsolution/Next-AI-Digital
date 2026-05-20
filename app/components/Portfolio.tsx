"use client";

import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Car Rental Website",
      desc: "Modern booking website with WhatsApp lead system.",
      img: "/images/project1.png",
    },
    {
      title: "Business Website",
      desc: "Premium UI design with SEO optimization.",
      img: "/images/project2.png",
    },
    {
      title: "AI Automation System",
      desc: "AI chatbot + automation for client handling.",
      img: "/images/project3.png",
    },
    {
      title: "Mobile App",
      desc: "Android app with booking & user dashboard.",
      img: "/images/project4.png",
    },
    {
      title: "AI Lead Generation",
      desc: "Lead generation website with property listing.",
      img: "/images/project5.png",
    },
    {
      title: "Real estate website",
      desc: "Landing page with WhatsApp conversion system.",
      img: "/images/project6.png",
    },
  ];

  return (
    <section
  id="portfolio"
  className="py-24 px-6 bg-black text-white"
>

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Our Work Portfolio 🚀
        </h2>
        <p className="text-gray-400 mt-4">
          Some of our recent projects & client success work 💼
        </p>
      </div>

      {/* 💎 Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300"
          >

            {/* 🖼 Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* ✨ Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}