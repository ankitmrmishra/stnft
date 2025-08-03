import { cn } from "~/lib/utils";
import { Button } from "../../components/ui/button";
import Image1 from "../../../public/images/img-hero-1.webp";
import Image2 from "../../../public/images/img-hero-2.webp";
import Image3 from "../../../public/images/img-hero-3.webp";

import { Roboto } from "next/font/google";
import Image from "next/image";
const roboto = Roboto({ weight: "400", subsets: ["cyrillic"] });
export function HeroSection() {
  return (
    <section className="relative mx-10 my-10 overflow-hidden rounded-4xl border-t-2 border-black/50 bg-gradient-to-b from-black/10 to-white p-5">
      {/* Background Gradient */}

      <div className="flex items-center justify-between align-middle">
        {" "}
        <div className={cn("relative pt-20 pb-32 lg:px-10", roboto.className)}>
          <div className="relative text-start">
            {/* Main Headline */}
            <h1 className="text-5xl leading-tight font-bold text-gray-900 lg:text-7xl">
              Transform Your <span className="text-orange-500">Stories</span>
              <br />
              Into Unique <span className="text-orange-500">NFTs</span>{" "}
              <div className="absolute top-24 right-5 flex h-20 w-20 rotate-3 items-center justify-center overflow-hidden rounded-[18px] border border-black bg-white align-middle">
                <Image
                  src={Image1}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[4.8rem] w-[4.8rem] rounded-2xl"
                />
              </div>
              <div className="absolute top-24 right-15 flex h-20 w-20 rotate-6 items-center justify-center overflow-hidden rounded-[18px] border border-black bg-white align-middle">
                <Image
                  src={Image2}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[4.8rem] w-[4.8rem] rounded-2xl"
                />
              </div>
              <div className="absolute top-24 right-24 flex h-20 w-20 rotate-3 items-center justify-center overflow-hidden rounded-[18px] border border-black bg-white align-middle">
                <Image
                  src={Image3}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[4.8rem] w-[4.8rem] rounded-2xl"
                />
              </div>
            </h1>

            {/* Subtitle */}
            <p className="mb-5 max-w-2xl text-xl leading-relaxed text-gray-600">
              Create stunning AI-generated artwork from your stories and mint
              them as NFTs. Turn your imagination into valuable digital
              collectibles with just a few clicks.
            </p>

            {/* CTA Button */}
            <Button className="rounded-full bg-orange-500 px-8 py-7 text-lg font-semibold text-white shadow inset-shadow-sm shadow-black inset-shadow-white transition-all duration-200 hover:cursor-pointer hover:bg-orange-600 hover:shadow-xs">
              Start Creating
            </Button>
          </div>
        </div>
        {/* Phone Mockup */}
        <div className="mt-4 flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative h-[640px] w-80 rounded-[3rem] bg-black p-2">
              <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                {/* Status Bar */}
                <div className="flex items-center justify-between bg-white px-6 py-3">
                  <span className="text-sm font-semibold">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-4 rounded-sm bg-black"></div>
                    <div className="flex space-x-1">
                      <div className="h-3 w-1 rounded-full bg-black"></div>
                      <div className="h-3 w-1 rounded-full bg-black"></div>
                      <div className="h-3 w-1 rounded-full bg-black"></div>
                      <div className="h-3 w-1 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="h-3 w-6 rounded-sm bg-black"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="px-6 py-4">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                      My Creations
                    </h2>
                    <span className="font-medium text-orange-500">
                      See all →
                    </span>
                  </div>

                  {/* Story Card 1 */}
                  <div className="mb-4 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Mystic Forest Tale
                        </h3>
                        <p className="text-sm text-gray-600">
                          Generated • Minted
                        </p>
                      </div>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                        NFT
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-purple-400"></div>
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-pink-400"></div>
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-blue-400"></div>
                      </div>
                      <span className="text-xs text-gray-500">0.5 ETH</span>
                    </div>
                  </div>

                  {/* Story Card 2 */}
                  <div className="rounded-2xl bg-gradient-to-r from-blue-100 to-cyan-100 p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Ocean Adventure
                        </h3>
                        <p className="text-sm text-gray-600">Generating...</p>
                      </div>
                      <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                        Draft
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-blue-400"></div>
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-cyan-400"></div>
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-teal-400"></div>
                      </div>
                      <span className="text-xs text-gray-500">Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
