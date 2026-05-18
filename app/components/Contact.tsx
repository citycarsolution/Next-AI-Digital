"use client";

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-black text-white">

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Contact Us 📞
        </h2>
        <p className="text-gray-400 mt-4">
          Let’s build something amazing together 🚀
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* 📞 LEFT INFO */}
        <div className="space-y-6">

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
            <p className="text-gray-400">9082552031</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
            <p className="text-gray-400">
              Indra Kripa Building, Government Colony,<br />
              Bandra East, Mumbai, Maharashtra 400051
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-2">🏢 Company</h3>
            <p className="text-gray-400">
              Next AI Digital
            </p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919082552031"
            className="block text-center bg-green-500 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Chat on WhatsApp 💬
          </a>

        </div>

        {/* 📩 RIGHT FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const name = (e.target as any)[0].value;
            const phone = (e.target as any)[1].value;

            const message = `Hello, my name is ${name}. My number is ${phone}. I want a website.`;
            const url = `https://wa.me/919082552031?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
          }}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/10"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-black border border-white/10"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            Send Message 🚀
          </button>

        </form>

      </div>
    </section>
  );
}