import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import ContactForm from "./components/ContactForm"; // ✅ name change

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white">

      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
      <ChatBot />
    

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business? 🚀
        </h2>

        <a
          href="https://wa.me/919082552031"
          className="bg-green-500 px-6 py-3 rounded-xl"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-gray-100 text-black py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get Free Demo Website
        </h2>

        <ContactForm />
      </section>

    </main>
  );
}