import { About as AboutSection } from "../components/About";
import { Awards } from "../components/Awards";
import { Testimonials } from "../components/Testimonials";

export function About() {
  return (
    <div className="pt-24 bg-[#050505] min-h-screen">
      <AboutSection />
      <Testimonials />
      <Awards />
    </div>
  );
}
