"use client";
import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Logo from "../../../public/favicon.svg";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // this is the variant for the scrolling and changing the UI of the navabar
  const variants = {
    initial: {
      top: "0px",
      width: "100%",
      backgroundColor: "",
      border: "",
    },
    scrolled: {
      top: "10%",
      left: "50%",
      x: "-50%",
      y: "-50%",

      width: "70%",
      backgroundColor: "#f0f0f0",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const, // ✅ Fix
      },
    },
  };

  return (
    <motion.div
      className="z-50 w-full"
      style={{ position: "fixed" }}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={variants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt=""
              width={100}
              height={100}
              className="size-8"
            />
            <span className="text-xl font-semibold text-gray-900">
              StoryMint
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Gallery
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              About
            </a>
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => signIn("google")}
                variant="ghost"
                className="bg-green-500 font-medium text-white hover:cursor-pointer hover:text-gray-900"
              >
                Join NFTaI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
