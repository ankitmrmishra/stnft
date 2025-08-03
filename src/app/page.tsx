import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-sections";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="">
        <Navbar />
        <HeroSection />
      </div>
    </HydrateClient>
  );
}
