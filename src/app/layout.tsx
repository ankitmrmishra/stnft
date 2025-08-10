import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./_components/providers";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
  title: "StoryMint - NFT AI Platform",
  description: "Create and mint your AI-generated NFTs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Providers>
          <TRPCReactProvider>
            <main className="pt-16">{children}</main>
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
