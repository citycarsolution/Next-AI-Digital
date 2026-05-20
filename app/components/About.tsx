"use client";

import Image from "next/image";

export default function About() {

  return (

    <section
      id="about"
      className="py-28 px-6 bg-black text-white relative overflow-hidden"
    >

      {/* 🔥 Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* 🧠 IMAGE */}
        <div className="relative w-full h-[450px] group">

          <Image
            src="/images/ai-about.png"
            alt="AI Website Development Company"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500"
          />

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10"></div>

        </div>

        {/* ✨ CONTENT */}
        <div>

          {/* SEO Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">

            AI-Powered{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">

              Website Development

            </span>

            <br />

            Company in India 🚀

          </h2>

          {/* SEO Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-5">

            Next AI Digital is a premium AI website development company
            helping businesses build modern websites, AI chatbots,
            mobile apps, CRM systems, automation software,
            and scalable digital platforms that generate real leads and business growth.

          </p>

          <p className="text-gray-400 leading-relaxed mb-8">

            We specialize in car rental websites, AI business automation,
            booking systems, SEO optimization, Google Ads,
            dashboard systems, admin panels,
            and high-converting business websites designed for startups,
            agencies, local businesses, and growing companies.

          </p>

          {/* 🔥 SERVICES */}
          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              <h3 className="font-semibold text-blue-400 mb-2">
                🌐 Website Development
              </h3>

              <p className="text-sm text-gray-400">
                Business websites, booking systems,
                car rental platforms & SEO-ready websites.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              <h3 className="font-semibold text-purple-400 mb-2">
                🤖 AI Chatbot Systems
              </h3>

              <p className="text-sm text-gray-400">
                AI-powered business assistants,
                automation & lead conversion systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              <h3 className="font-semibold text-cyan-400 mb-2">
                📱 Mobile App Development
              </h3>

              <p className="text-sm text-gray-400">
                Android & iOS applications
                with scalable backend systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              <h3 className="font-semibold text-pink-400 mb-2">
                📈 SEO & Google Ads
              </h3>

              <p className="text-sm text-gray-400">
                Lead generation, ranking,
                local SEO & Google Ads management.
              </p>
            </div>

          </div>

          {/* 🔥 TECHNOLOGIES */}
          <div className="mb-8">

            <h3 className="text-xl font-bold mb-4 text-white">

              💻 Technologies We Use

            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Next.js",
                "React.js",
                "Node.js",
                "MongoDB",
                "Firebase",
                "OpenAI",
                "AI Automation",
                "SEO",
                "Google Ads",
                "CRM Systems"
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* 🔥 CTA */}
          <div className="flex flex-wrap gap-4">

            <a
              href="https://wa.me/919082552031"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 px-7 py-4 rounded-2xl font-semibold transition shadow-xl hover:scale-105"
            >
              💬 Talk on WhatsApp
            </a>

            <a
              href="#services"
              className="border border-white/10 hover:border-blue-400 px-7 py-4 rounded-2xl font-semibold transition bg-white/5 hover:bg-blue-500/10"
            >
              🚀 Explore Services
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}