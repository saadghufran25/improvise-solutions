"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    title: "Labourers for Construction",
    description:
      "We supply skilled and reliable labour for construction projects of all sizes. Our team supports site preparation, material handling, and daily site operations, helping improve efficiency and progress.",
    image: "/construction-labour.png",
  },
  {
    title: "Safety Personnel",
    description:
      "Our trained safety staff help maintain safe working conditions through on-site checks, monitoring, and support. We assist with compliance, reduce operational risk, and help keep teams aligned with safety standards.",
    image: "/safety-personnel.png",
  },
  {
    title: "Dog Handlers",
    description:
      "Our professional dog handlers work alongside security teams for patrol, detection, and deterrence. For events, premises, or sensitive areas, we strengthen protection and response readiness.",
    image: "/dog-handlers.png",
  },
  {
    title: "Traffic Marshals",
    description:
      "We provide certified traffic marshals to manage vehicle and pedestrian flow on worksites. They help keep movements controlled, reduce risk, and support smoother operations in busy environments.",
    image: "/traffic-marshals.png",
  },
  {
    title: "Cleaners",
    description:
      "Our cleaning staff deliver thorough and dependable cleaning for commercial, residential, and industrial spaces. From daily maintenance to post-construction cleanups, we help maintain hygiene, order, and a professional environment.",
    image: "/cleaners-service.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20"
      aria-labelledby="services-title"
    >
      <Reveal className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="services-title" className="section-title">
            Services
          </h2>
          <p className="section-subtext">
            Reliable staffing and site support to keep operations secure, safe, and on schedule.
          </p>
        </div>
        <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          24/7 deployment ready
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 80} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-smoke/70 shadow-card transition hover:-translate-y-1 hover:border-white/50 hover:shadow-soft">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-black/40 via-black/10 to-transparent">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 py-4">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
