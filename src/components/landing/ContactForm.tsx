"use client";

import { contact, googleConfig } from "@/config/constants";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";


const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "",phone:"" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${googleConfig.queryFormUrl}?name=${encodeURIComponent(form.name)}&phone=${encodeURIComponent(form.phone)}&email=${encodeURIComponent(form.email)}&message=${encodeURIComponent(form.message)}`);


      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "",phone:"" });
      } else {
        setError("Failed to submit. Please try again later.");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 px-4">
      <div className="absolute inset-0 -z-10 bg-animated-gradient"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Quick Contact
          </h4>
          <h2 className="text-5xl font-extrabold text-black mb-6 leading-tight">
            Leave a<br />
            Message
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            If you have any questions about our loan services or need assistance with financial planning, feel free to reach out. Our team will get back to you as soon as possible.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mb-6">
            <a
              href={contact.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href={contact.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition text-2xl"
            >
              <FaFacebookF />
            </a>
            
          </div>

          {/* WhatsApp & Call Buttons */}
          {/* <div className="flex flex-row gap-4">
            <a
              href={contact?.links?.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-medium py-3 px-6 rounded-xl hover:bg-green-600 transition"
            >
              <FaWhatsapp />Chat On WhatsApp
            </a>
            <a
              href={contact?.links?.call_now}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 px-6 rounded-xl hover:bg-blue-700 transition"
            >
              <FaPhoneAlt />Call Now
            </a>
          </div> */}
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl px-5 py-4 bg-white shadow-sm text-gray-800 text-lg placeholder-gray-500 focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter 10 digit mobile number *"
            value={form.phone}
            onChange={handleChange}
            min={10}
            max={10}
            required
            className="w-full rounded-2xl px-5 py-4 bg-white shadow-sm text-gray-800 text-lg placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-2xl px-5 py-4 bg-white shadow-sm text-gray-800 text-lg placeholder-gray-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Write your message here *"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full rounded-2xl px-5 py-4 bg-white shadow-sm text-gray-800 text-lg placeholder-gray-500 focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white text-xl font-semibold py-4 rounded-2xl hover:bg-black transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
};


export default ContactForm;
