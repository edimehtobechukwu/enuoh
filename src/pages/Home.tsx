import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { FeaturedWork } from "../components/FeaturedWork";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Awards } from "../components/Awards";

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedWork />
      <Services />
      <About />
      <Testimonials />
      <Awards />
    </>
  );
}
