import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ChatBot from "./components/ChatBot";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white">

      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <ChatBot />

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business? 🚀
        </h2>

        <a
          href="https://wa.me/919082552031"
          className="
            inline-block
            bg-green-500
            hover:bg-green-600
            transition
            px-6
            py-3
            rounded-xl
            font-semibold
          "
        >
          Chat on WhatsApp
        </a>
      </section>

    </main>
  );
}