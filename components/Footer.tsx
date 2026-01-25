import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-smoke/80 text-sm text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Improvise Solutions</h3>
          <p className="mt-1">50a Holme Road, London, England, E6 1LY</p>
          <p className="mt-1 text-gray-400">+44 7424 550975</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {[
            { label: "Home", href: "#home" },
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Why choose us", href: "#highlights" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
