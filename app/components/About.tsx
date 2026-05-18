"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-black text-white relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* 🧠 Image */}
        <div className="relative w-full h-[420px] group">
          <Image
            src="/images/ai-about.png"
            alt="AI Technology"
            fill
            className="object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* ✨ Content */}
        <div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Our AI Agency
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-4">
            We build high-performance AI-powered websites, mobile applications, and scalable web solutions 
            designed to generate real business growth and qualified leads.
          </p>

          <p className="text-gray-400 mb-6">
            Our focus is not just development — we create complete digital systems including AI automation, 
            CRM solutions, and conversion-focused platforms that help businesses grow faster.
          </p>

          {/* 🔥 Core Services */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              🚀 Core Expertise
            </h3>

            <div className="space-y-2 text-gray-300 text-sm">
              <p>✔ AI Website & Web Application Development</p>
              <p>✔ Mobile App Development (Android & iOS)</p>
              <p>✔ AI CRM & Business Automation Systems</p>
              <p>✔ SEO, Ads & Lead Generation Systems</p>
            </div>
          </div>

          {/* 💻 Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-purple-400">
              💻 Technologies We Use
            </h3>

            <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
              <p>⚡ React.js / Next.js</p>
              <p>⚡ Node.js / Express</p>
              <p>⚡ TypeScript / JavaScript</p>
              <p>⚡ MongoDB / Firebase</p>
              <p>⚡ AI APIs (OpenAI)</p>
              <p>⚡ React Native / Flutter</p>
            </div>
          </div>

          {/* 💬 CTA */}
          <a
            href="https://wa.me/919082552031"
            className="inline-block mt-4 bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition shadow-lg hover:scale-105"
          >
            Talk to Us
          </a>

        </div>

      </div>
    </section>
  );
}