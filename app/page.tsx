import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ChatBot from "./components/ChatBot";
import ContactForm from "./components/ContactForm";
import DigitalMarketingPricing from "./components/DigitalMarketingPricing";

export default function Home() {

  return (

    <main className="w-full overflow-x-hidden bg-black text-white">

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* ABOUT */}
      <About />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* WEBSITE PRICING */}
      <Pricing />

      {/* DIGITAL MARKETING PRICING */}
      <DigitalMarketingPricing />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT */}
      <ContactForm />

      {/* CHATBOT */}
      <ChatBot />

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to Grow Your Business? 🚀
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Get a premium AI powered website, app, CRM,
          automation or digital marketing solution for your business.
        </p>

        <a
          href="https://wa.me/919082552031?text=Hi%20Next%20AI%20Digital,%20I%20want%20to%20grow%20my%20business%20with%20a%20website,%20AI%20automation,%20CRM%20or%20digital%20marketing"
          target="_blank"
          className="
            inline-block
            bg-green-500
            hover:bg-green-600
            transition-all
            px-8
            py-4
            rounded-2xl
            font-semibold
            text-lg
            shadow-2xl
            hover:scale-105
          "
        >
          Chat on WhatsApp 💬
        </a>

      </section>

    </main>
  );
}