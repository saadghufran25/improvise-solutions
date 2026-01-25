import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <About />
        <Services />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
