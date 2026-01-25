"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-base">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Construction and security professionals on site"
          fill
          className="object-cover filter grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/85 to-base/95" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-24 text-center md:gap-12 md:px-6 md:py-28">
        <Reveal className="space-y-6 md:space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200 ring-1 ring-white/15">
            Trusted manpower and site support across the UK
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Bold, Reliable, Ready, Improvise Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
            Trusted manpower and site support services for security, safety, construction, traffic control, and cleaning.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-base shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Get a Quote
            </Link>
            <Link
              href="#services"
              className="w-full rounded-full border border-white/25 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150} className="grid w-full gap-4 sm:grid-cols-3">
          {[
            { title: "Security & Safety", desc: "Licensed guards, safety staff, dog handlers." },
            { title: "Construction Ready", desc: "Labourers, traffic marshals, site support." },
            { title: "Responsive", desc: "Coordinated teams deployed quickly." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left shadow-soft"
            >
              <div className="text-sm font-semibold text-white">{item.title}</div>
              <p className="mt-1 text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
