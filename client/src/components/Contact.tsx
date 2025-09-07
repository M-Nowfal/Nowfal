"use client";

import React, { useContext, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, User, MailOpen, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import axios, { AxiosError } from "axios";
import { Input } from "./ui/input";
import { AuthContext } from "@/App";

const Contact = () => {

  type FormType = {
    name: string;
    email: string;
    message: string;
  };

  const { author } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const btnStyles = "flex items-center justify-center gap-2 px-6 py-3 cursor-pointer animate-float bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-lg";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/messages`, {
        name: formData.name, email: formData.email, message: formData.message
      });
      setIsSubmitted(true);
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data?.message : String(err);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnotherMessage = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="pb-10"></div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
            Get In Touch
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mx-auto mt-6 mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <MessageCircle className="text-orange-600" size={24} />
                Let&apos;s talk
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m currently available for freelance work and open to new opportunities. If you have a project that you want to get started or think you need my help with something, then get in touch.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6" data-aos="fade-up">
              <div className="flex items-start gap-4 p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email Me</h4>
                  <Link to="mailto:nowfalmmuhammed@gmail.com" className="text-orange-600 hover:text-orange-700 transition-colors">
                    nowfalmmuhammed@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Call Me</h4>
                  <Link to="tel:+918610297319" className="text-orange-600 hover:text-orange-700 transition-colors">
                    +91 8610297319
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4" data-aos="fade-up">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Follow me on</h4>
              <div className="flex justify-center gap-4">
                {[
                  { name: "GitHub", icon: "/tools/github.png", url: "https://github.com/M-Nowfal" },
                  { name: "LinkedIn", icon: "/socialmedias/LinkedIn.png", url: "https://www.linkedin.com/in/muhammed-nowfal-m-452410344" },
                  { name: "What'sApp", icon: "/socialmedias/whatsapp.png", url: `https://wa.me/918610297319?text=Hello%20I%20am%20interested%20in%20your%20service` },
                  { name: "Instagram", icon: "/socialmedias/insta.png", url: "https://www.instagram.com/its_nowfal/?__pwa=1" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors drop-shadow-lg`}
                    aria-label={social.name}
                    suppressHydrationWarning
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width={30}
                      height={30}
                      loading="lazy"
                      className={`${index === 0 && "dark:invert"}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl border shadow-lg" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send me a message</h3>

            {isSubmitted && !error ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
                  <MailOpen className="text-orange-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-300">Thank you for your message. I&apos;ll get back to you as soon as possible.</p>
                <Button
                  size="lg"
                  className={`m-auto mt-8 ${btnStyles}`}
                  onClick={handleAnotherMessage}
                >Submit another message</Button>
              </div>
            ) : (
              !error ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="ps-10 w-full px-4 py-5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-zinc-700/30 dark:text-white transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="ps-10 w-full px-4 py-5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-zinc-700/30 dark:text-white transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-zinc-700/30 dark:text-white transition-colors"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className={`${btnStyles} w-full`}
                    disabled={loading || author}
                  >
                    <Send size={18} />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col gap-7">
                  <div className="flex items-center gap-3 border border-rose-600 p-3 rounded-xl">
                    <AlertCircle className="text-rose-600 size-5" />
                    <p className="text-rose-700">{error}</p>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className={`${btnStyles} w-full md:w-2/6`}
                      onClick={() => setError("")}
                    >
                      Retry
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;