"use client";

export default function ContactForm() {

  const handleSubmit = (e: any) => {

    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;
    const message = e.target.message.value;

    const whatsappMessage = `
🚀 New Client Inquiry - Next AI Digital

👤 Name: ${name}

📞 Phone: ${phone}

💼 Service Needed: ${service}

📝 Message:
${message}

🌐 Website:
https://nextaidigital.online/
    `;

    const url = `https://wa.me/919082552031?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-blue-400 font-semibold mb-3">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Let’s Build Your <br />
            <span className="text-purple-400">
              AI Powered Business 🚀
            </span>
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Need a modern website, AI chatbot, SEO or
            automation service? Contact Next AI Digital
            today and grow your business online.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>

              <a
                href="mailto:support@nextaidigital.online"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                support@nextaidigital.online
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>

              <a
                href="tel:+919082552031"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                +91 9082552031
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>

              <a
                href="https://nextaidigital.online/"
                target="_blank"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                nextaidigital.online
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            shadow-2xl
            flex
            flex-col
            gap-5
          "
        >

          <h3 className="text-2xl font-bold mb-2">
            Get Free Consultation 💬
          </h3>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              p-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              focus:border-blue-500
            "
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="
              p-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              focus:border-blue-500
            "
          />

          {/* SERVICE */}
          <select
            name="service"
            required
            className="
              p-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              focus:border-blue-500
              text-gray-300
            "
          >
            <option value="">
              Select Service
            </option>

            <option>
              AI Website Development
            </option>

            <option>
              SEO Services
            </option>

            <option>
              AI Chatbot
            </option>

            <option>
              Google Ads
            </option>

            <option>
              App Development
            </option>

          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            className="
              p-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              focus:border-blue-500
            "
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              hover:scale-[1.02]
              transition-all
              py-4
              rounded-xl
              font-semibold
              text-lg
              shadow-xl
            "
          >
            🚀 Send on WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}