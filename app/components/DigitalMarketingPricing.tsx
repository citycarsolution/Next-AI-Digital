"use client";

export default function DigitalMarketingPricing() {
  const services = [
    {
      title: "SEO Services",
      price: "₹5k – ₹50k+",
      features: [
        "Keyword Research",
        "Technical SEO",
        "Google Indexing",
        "Speed Optimization",
      ],
    },

    {
      title: "Google Ads Management",
      price: "₹8k – ₹50k+",
      features: [
        "Campaign Setup",
        "Lead Generation",
        "Optimization",
        "Analytics Reports",
      ],
    },

    {
      title: "Social Media Marketing",
      price: "₹8k – ₹40k+",
      features: [
        "Instagram Marketing",
        "Facebook Ads",
        "Reels Strategy",
        "Ad Creatives",
      ],
    },

    {
      title: "AI Lead Generation",
      price: "₹15k – ₹50k+",
      features: [
        "AI Chatbot",
        "CRM Automation",
        "WhatsApp Automation",
        "AI Funnels",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            🚀 NEXT AI DIGITAL
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Digital Marketing{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pricing Structure
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
            SEO, Google Ads, AI Lead Generation & Full Business Growth Solutions
          </p>
        </div>

        {/* SERVICES */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <div className="mt-4 inline-block rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-lg font-bold text-white shadow-lg shadow-cyan-500/20">
                  {service.price}
                </div>

                <div className="mt-8 space-y-4">

                  {service.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >

                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-sm text-cyan-300">
                        ✓
                      </div>

                      <span>{feature}</span>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* PACKAGE SECTION */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* STARTER */}
          <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 backdrop-blur-xl">

            <div className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
              🚀 STARTER PACKAGE
            </div>

            <h3 className="mt-6 text-3xl font-black">
              Starter Digital Package
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Google Ads Management</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>SEO Basic</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Instagram Marketing</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>2 Ad Creatives</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Monthly Optimization</span>
              </div>

            </div>

            <div className="mt-8 text-5xl font-black text-white">
              ₹15k
              <span className="text-lg font-medium text-gray-400">
                /month
              </span>
            </div>

          </div>

          {/* PREMIUM */}
          <div className="rounded-[32px] border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-10 backdrop-blur-xl">

            <div className="inline-flex rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300">
              🔥 PREMIUM PACKAGE
            </div>

            <h3 className="mt-6 text-3xl font-black">
              Premium Growth Package
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span>Full Digital Marketing</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span>AI Lead Generation</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span>CRM + Automation</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span>AI Chatbot Systems</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-purple-400">✓</span>
                <span>Reels + Video Marketing</span>
              </div>

            </div>

            <div className="mt-8 text-5xl font-black text-white">
              ₹50k+
            </div>

          </div>

        </div>

        {/* IMPORTANT NOTE */}
        <div className="mt-14 rounded-3xl border border-yellow-400/20 bg-yellow-500/10 p-8 text-center backdrop-blur-xl">

          <h4 className="text-2xl font-bold text-yellow-300">
            IMPORTANT 😄
          </h4>

          <p className="mt-4 text-lg text-gray-300">
            Advertising budget for Google/Facebook platforms is paid separately
            by the client directly to the platforms.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-cyan-500/30 transition-transform duration-300 hover:scale-105">
            Get Free Consultation 🚀
          </button>

          <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
            Start Growing Your Business
          </button>

        </div>

      </div>

    </section>
  );
}