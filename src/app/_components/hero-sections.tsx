"use client";
import { cn } from "~/lib/utils";
import { Button } from "../../components/ui/button";
import DashboardMockup from "../../../public/images/dashboardmockup.png";
import { animate, scroll } from "motion";

import nftai from "../../../public/images/RecordSvg.svg";
import { Roboto, Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
const Instrument_Serif_font = Instrument_Serif({
  weight: "400",
  subsets: ["latin-ext"],
});

const roboto = Roboto({ weight: "400", subsets: ["latin-ext"] });
export function HeroSection() {
  return (
    <section className="relative mx-0 h-[100vh] overflow-y-hidden md:mx-10 md:my-10 md:h-screen">
      {/* Background Gradient */}{" "}
      <div
        className={cn(
          "relative flex h-full items-center justify-center overflow-hidden align-middle",
          Instrument_Serif_font.className,
        )}
      >
        <div className="relative flex h-[70vh] flex-col items-center justify-center gap-4 align-middle sm:mt-96 md:h-full md:justify-center">
          {/* Main Headline */}
          <h1 className="text-center text-4xl leading-tight text-gray-900 lg:text-7xl">
            Transform Your <span className="font-semibold italic">Stories</span>
            <br />
            Into Unique <span className="font-semibold italic">NFTs</span>{" "}
          </h1>

          {/* Subtitle */}
          <p className="mb-5 flex max-w-2xl items-center justify-center text-center align-middle text-xl leading-relaxed text-black/80 lg:text-3xl">
            Create stunning AI-generated artwork from your stories and mint them
            as NFTs.
          </p>

          {/* CTA Button */}
          <div className="ctabuttons flex w-full flex-col items-center justify-center gap-5 align-middle md:flex-row">
            <Button
              className={cn(
                "flex items-center justify-center rounded-full bg-black px-8 py-6 align-middle text-lg font-semibold text-white shadow inset-shadow-sm shadow-black inset-shadow-white transition-all duration-200 hover:cursor-pointer hover:bg-green-600 hover:shadow-xs",
                roboto.className,
              )}
            >
              Start Creating
            </Button>
            <Button
              className={cn(
                "flex items-center justify-center rounded-full bg-black px-8 py-6 align-middle text-lg font-semibold text-white shadow inset-shadow-sm shadow-black inset-shadow-white transition-all duration-200 hover:cursor-pointer hover:bg-green-600 hover:shadow-xs",
                roboto.className,
              )}
            >
              Watch Demo
              <Image
                src={nftai}
                alt="recording"
                width={100}
                height={100}
                className="size-5"
              />
            </Button>
          </div>
          <div className="flex max-h-max w-[100vw] items-center justify-center rounded-[17px] bg-gray-400 align-middle md:w-[70vw]">
            <Image
              src={DashboardMockup}
              alt=""
              width={800}
              height={800}
              className="mt-2 mb-2 w-[99vw] rounded-[15px] md:w-[69vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
