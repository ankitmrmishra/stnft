import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-sections";
import HeroImage2 from "../../public/images/maskGroup.png";
import Landscape from "../../public/images/landscape.png";

import Image from "next/image";
import Dashboard from "./_components/Dashboard";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="">
        {/* <div className="absolute h-full w-full rounded-full bg-gradient-to-b from-white to-white/80" /> */}
        <Image
          src={Landscape}
          alt="heromimage"
          width={800}
          height={800}
          className="absolute h-[80vh] w-screen mask-t-from-30% md:h-screen"
        />
        <Navbar />
        <HeroSection />
      </div>
    </HydrateClient>
  );
}
