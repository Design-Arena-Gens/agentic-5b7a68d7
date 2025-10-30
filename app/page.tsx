import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Process />
        <Packages />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
