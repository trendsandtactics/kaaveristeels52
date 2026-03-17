import SteelScroll from "@/components/SteelScroll";
import HomeAbout from "@/components/HomeAbout";
import GreenSteel from "@/components/GreenSteel";
import HomeProducts from "@/components/HomeProducts";
import SteelCalculator from "@/components/Calculators/SteelCalculator";
import MapEmbed from "@/components/MapEmbed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative pt-20 md:pt-24">
      {/* Scrollytelling Hero Area */}
      <SteelScroll />

      {/* About Section */}
      <HomeAbout />

      {/* Products Section */}
      <HomeProducts />

      {/* Green Steel Certification Section */}
      <GreenSteel />

      {/* Rest of the homepage content will go below the scrollytelling */}
      <section className="min-h-screen w-full bg-background relative flex flex-col items-center justify-center py-32 px-4 overflow-hidden">

        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl text-center relative z-10 mb-20">
          <h2 className="font-heading text-5xl md:text-7xl mb-8 text-foreground">Beyond the <span className="text-accent-red">Forge</span></h2>
          <p className="font-body text-foreground/70 text-lg md:text-xl leading-relaxed">
            Our premium TMT bars and structural steel products form the backbone of iconic infrastructure projects. Built with precision, trusted by engineers, empowering the future.
          </p>
        </div>

        {/* Interactive Modules */}
        <div className="w-full max-w-6xl mx-auto z-10">
          <div className="mb-12 text-center">
            <h3 className="font-heading text-3xl text-foreground mb-4">Engineering Suite</h3>
            <div className="w-16 h-1 bg-accent-red mx-auto rounded-full" />
          </div>
          <SteelCalculator />
        </div>

      </section>

      {/* Map Section (moved here before footer) */}
      <MapEmbed />
    </main>
  );
}
