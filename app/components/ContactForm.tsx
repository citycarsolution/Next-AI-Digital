"use client";

export default function ContactForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const phone = e.target[1].value;

    const message = `Hello, my name is ${name}. I want a website. My number is ${phone}`;
    const url = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 border rounded-lg"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="p-3 border rounded-lg"
        required
      />

      <button className="bg-black text-white py-3 rounded-lg">
        Get Free Demo
      </button>
    </form>
  );
}