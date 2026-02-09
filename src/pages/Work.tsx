import { FeaturedWork } from "../components/FeaturedWork";
import { Footer } from "../components/Footer";

export function Work() {
  return (
    <div className="pt-24 bg-[#f5f5f0] min-h-screen">
      <div className="px-8 md:px-0 mx-auto max-w-[1280px] mb-12">
        <h1 className="font-oswald font-bold text-[60px] md:text-[96px] leading-[0.9] text-black tracking-[-4.8px] uppercase mt-12 mb-8">
          All Work
        </h1>
        <p className="font-oswald text-[#6a7282] text-xl max-w-2xl">
          A comprehensive archive of our projects, experiments, and collaborations.
        </p>
      </div>
      <FeaturedWork />
      {/* I'll add more mock items here if I was building a real database, but reusing the component is fine for now to show structure */}
    </div>
  );
}
