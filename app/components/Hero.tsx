"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* 🎥 Background Video (CLEAN) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/ai-bg.mp4" type="video/mp4" />
      </video>

      {/* 🔥 LIGHT Overlay (only for text visibility) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          AI Powered <span className="text-blue-400">Websites</span> <br />
          That Bring <span className="text-purple-400">Real Clients 🚀</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          AI based website, apps aur SEO solutions jo real clients laate hain 💰
        </p>

        <p className="text-yellow-400 mb-6 font-semibold text-lg">
          Limited Offer: Website Starting ₹4999
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <a
            href="https://wa.me/919082552031"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            WhatsApp Now
          </a>

        </div>

      </div>
    </section>
  );
}