"use client";

import React, { useMemo, useState } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const initialState = useMemo<FormState>(
    () => ({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    }),
    []
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const serviceOptions = [
    "Labourers for Construction",
    "Safety Personnel",
    "Dog Handlers",
    "Traffic Marshals",
    "Cleaners",
  ];

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Full Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.service) nextErrors.service = "Select a service.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("success");
      setStatusMessage("Thanks for reaching out. We have received your message.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="contact-title"
    >
      <Reveal className="mb-10 space-y-3">
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>
        <p className="section-subtext">We respond as quickly as possible.</p>
      </Reveal>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-3xl border border-white/10 bg-smoke/70 p-6 shadow-soft md:p-8">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-gray-100">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input-field mt-2"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="error-text">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-gray-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field mt-2"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="error-text">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-gray-100">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="input-field mt-2"
                  placeholder="+44 7424 550975"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-semibold text-gray-100">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="input-field mt-2"
                  value={form.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" role="alert" className="error-text">
                    {errors.service}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-gray-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="input-field mt-2"
                rows={5}
                placeholder="Tell us about your requirements"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" role="alert" className="error-text">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-base shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            <div aria-live="polite">
              {status === "success" && <p className="success-text">{statusMessage}</p>}
              {status === "error" && (
                <p className="mt-2 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-300">{statusMessage}</p>
              )}
            </div>
          </form>
        </Reveal>
        <Reveal delay={150} className="space-y-4 rounded-3xl border border-white/10 bg-smoke/70 p-6 shadow-soft md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                <path d="M4 9.5 12 4l8 5.5V20H4V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Improvise Solutions</h3>
              <p className="text-sm text-gray-300">Trusted staffing and on-site support.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm font-semibold text-gray-100">Address</p>
            <p className="mt-1 text-gray-200">50a Holme Road, London, England, E6 1LY</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm font-semibold text-gray-100">Phone</p>
            <p className="mt-1 text-gray-200">+44 7424 550975</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Map to Improvise Solutions"
              src="https://www.google.com/maps?q=50a+Holme+Road,+London,+England,+E6+1LY&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid gap-2 text-sm text-gray-300">
            <p>Coordinated, accountable, and ready to deploy the right team.</p>
            <p>We listen, align, and deliver dependable coverage.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
