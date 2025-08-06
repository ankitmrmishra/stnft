import { cn } from "~/lib/utils";
import { Button } from "../../components/ui/button";
import Image1 from "../../../public/images/img-hero-1.webp";
import Image2 from "../../../public/images/img-hero-2.webp";
import Image3 from "../../../public/images/img-hero-3.webp";
import HeroImage from "../../../public/images/heroimage.jpg";
import nftai from "../../../public/images/RecordSvg.svg";
import { Roboto, Instrument_Serif } from "next/font/google";
import Image from "next/image";
const Instrument_Serif_font = Instrument_Serif({
  weight: "400",
  subsets: ["latin-ext"],
});
const roboto = Roboto({ weight: "400", subsets: ["latin-ext"] });
export function HeroSection() {
  return (
    <section className="relative mx-10 my-10 h-screen overflow-hidden rounded-4xl">
      {/* Background Gradient */}

      <div className="flex items-center justify-center align-middle">
        {" "}
        <div
          className={cn(
            "relative pt-20 pb-32 lg:px-10",
            Instrument_Serif_font.className,
          )}
        >
          <div className="relative text-start">
            {/* Main Headline */}
            <h1 className="text-center text-5xl leading-tight text-gray-900 lg:text-7xl">
              Transform Your{" "}
              <span className="font-semibold italic">Stories</span>
              <br />
              Into Unique{" "}
              <span className="font-semibold italic">NFTs</span>{" "}
            </h1>

            {/* Subtitle */}
            <p className="mb-5 max-w-2xl text-center text-3xl leading-relaxed text-black/80">
              Create stunning AI-generated artwork from your stories and mint
              them as NFTs.
            </p>

            {/* CTA Button */}
            <div className="ctabuttons flex w-full items-center justify-center gap-5 align-middle">
              <Button
                className={cn(
                  "rounded-full bg-black px-8 py-7 text-lg font-semibold text-white shadow inset-shadow-sm shadow-black inset-shadow-white transition-all duration-200 hover:cursor-pointer hover:bg-green-600 hover:shadow-xs",
                  roboto.className,
                )}
              >
                Start Creating
              </Button>
              <Button
                className={cn(
                  "rounded-full bg-black px-8 py-7 text-lg font-semibold text-white shadow inset-shadow-sm shadow-black inset-shadow-white transition-all duration-200 hover:cursor-pointer hover:bg-green-600 hover:shadow-xs",
                  roboto.className,
                )}
              >
                Watch Demo
                <Image
                  src={nftai}
                  alt="recording"
                  width={100}
                  height={100}
                  className="size-8"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
