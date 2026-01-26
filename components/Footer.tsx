import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-smoke/80 text-sm text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Improvise Solutions</h3>
            <p className="mt-2">50a Holme Road, London, England, E6 1LY</p>
            <p className="mt-1 text-gray-400">+44 7424 550975</p>
            <p className="mt-1">
              <a href="mailto:info@improvisesolution.co.uk" className="text-gray-300 transition hover:text-white">
                info@improvisesolution.co.uk
              </a>
            </p>
            <div className="mt-4 space-y-1 text-xs text-gray-400">
              <p>Company Registration Number: 12727784</p>
              <p>VAT Number: 353688563</p>
            </div>
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
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Improvise Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
