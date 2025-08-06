import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-sections";
import HeroImage2 from "../../public/images/maskGroup.png";

import Image from "next/image";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="">
        <div className="absolute top-0 h-96 w-full bg-green-100" />
        <Image
          src={HeroImage2}
          alt="heromimage"
          width={800}
          height={800}
          className="absolute h-screen w-screen mask-t-from-30%"
        />
        <Navbar />
        <HeroSection />
      </div>
    </HydrateClient>
  );
}
