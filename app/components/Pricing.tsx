"use client";

import {
  useEffect,
  useRef,
} from "react";

export default function Pricing() {

  const sliderRef =
    useRef<HTMLDivElement>(null);

  // ==============================
  // PRICING PLANS
  // ==============================

  const plans = [
    {
      name: "Basic",
      price: "₹5,000",
      highlight: false,

      features: [
        "1–5 Pages Website",
        "Mobile Responsive Design",
        "WhatsApp Integration",
        "Fast Loading",
        "Basic UI Design",
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
        "Google Map Integration",
        "Speed Optimization",
      ],
    },

    {
      name: "Growth",
      price: "₹25,000",
      highlight: true,

      features: [
        "8–12 Pages Website",
        "Premium UI/UX",
        "WhatsApp + Lead System",
        "Advanced SEO Ready",
        "Analytics Setup",
        "Fast Performance",
        "Conversion Focused Design",
      ],
    },

    {
      name: "Business",
      price: "₹45,000",
      highlight: false,

      features: [
        "Custom Design",
        "Advanced UI/UX",
        "Complete SEO Setup",
        "Lead Generation System",
        "Google Analytics",
        "Security Optimization",
        "Scalable Architecture",
      ],
    },

    {
      name: "Pro AI",
      price: "₹60,000+",
      highlight: false,

      features: [
        "AI Website",
        "Admin Dashboard",
        "Booking System",
        "Payment Integration",
        "CRM Integration",
        "Automation System",
        "Custom Development",
        "Business Automation",
      ],
    },
  ];

  // ==============================
  // MOBILE AUTO SLIDE
  // ==============================

  useEffect(() => {

    const slider =
      sliderRef.current;

    if (!slider) return;

    let index = 0;

    const interval =
      setInterval(() => {

        const width =
          slider.clientWidth;

        index++;

        if (
          index >= plans.length
        ) {

          index = 0;
        }

        slider.scrollTo({
          left:
            width * index,

          behavior:
            "smooth",
        });

      }, 3500);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  return (

    <section
      id="pricing"
      className="
        py-24
        px-4
        md:px-6
        bg-black
        text-white
        relative
        overflow-hidden
      "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

          Pricing That
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Grows
          </span>
          {" "}Your Business 🚀

        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">

          Professional website and AI solutions
          designed for serious businesses.

        </p>

      </div>

      {/* DESKTOP GRID */}
      <div
        className="
          hidden
          md:grid
          md:grid-cols-2
          lg:grid-cols-5
          gap-8
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >

        {plans.map(
          (
            plan,
            i
          ) => (

            <Card
              key={i}
              plan={plan}
            />
          )
        )}

      </div>

      {/* MOBILE SLIDER */}
      <div
        ref={sliderRef}
        className="
          md:hidden
          flex
          overflow-x-auto
          snap-x
          snap-mandatory
          scrollbar-hide
          gap-4
          relative
          z-10
        "
      >

        {plans.map(
          (
            plan,
            i
          ) => (

            <div
              key={i}
              className="
                min-w-full
                snap-center
                px-1
              "
            >

              <Card
                plan={plan}
              />

            </div>
          )
        )}

      </div>

    </section>
  );
}

// ==============================
// CARD
// ==============================

function Card({
  plan,
}: any) {

  const whatsapp =
    process.env
      .NEXT_PUBLIC_WHATSAPP ||

    "https://wa.me/919082552031";

  return (

    <div
      className={`
        p-[1px]
        rounded-3xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${
          plan.highlight
            ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-[1.03]"
            : "bg-white/10"
        }
      `}
    >

      <div
        className="
          bg-[#0f172a]
          rounded-3xl
          p-7
          h-full
          flex
          flex-col
          backdrop-blur-xl
        "
      >

        {/* PLAN */}
        <div className="mb-5">

          <h3 className="text-2xl font-bold mb-2">

            {plan.name}

          </h3>

          <p className="text-4xl font-extrabold text-blue-400">

            {plan.price}

          </p>

        </div>

        {/* FEATURES */}
        <ul className="space-y-3 flex-1">

          {plan.features.map(
            (
              feature: string,
              idx: number
            ) => (

              <li
                key={idx}
                className="
                  text-gray-300
                  text-sm
                  flex
                  items-start
                  gap-2
                "
              >

                <span className="text-green-400">

                  ✔

                </span>

                <span>

                  {feature}

                </span>

              </li>
            )
          )}

        </ul>

        {/* CTA */}
        <a
          href={`${whatsapp}?text=Hi 😊 I want ${plan.name} Plan`}

          target="_blank"

          className={`
            mt-7
            py-3
            rounded-xl
            font-semibold
            text-center
            transition-all
            duration-300
            hover:scale-[1.02]
            ${
              plan.highlight
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }
          `}
        >

          Book Now 🚀

        </a>

      </div>

    </div>
  );
}