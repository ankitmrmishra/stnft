"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/favicon.svg";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "~/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Menu, X, User, Settings, LogOut, LayoutDashboard } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { useIsMobile } from "~/hooks/use-mobile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ismobile = useIsMobile();
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    initial: {
      top: "0px",
      width: "100%",
      backgroundColor: "",
      border: "",
    },
    scrolled: {
      top: "5%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      width: ismobile ? "100%" : "70%",
      backgroundColor: "#f0f0f0",
      transition: {
        duration: 0.3,
      },
    },
  };

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <motion.div
      className="z-50 w-full rounded-full backdrop-blur-3xl"
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
              src={Logo || "/placeholder.svg"}
              alt=""
              width={100}
              height={100}
              className="size-8"
            />
            <span className="text-xl font-semibold text-gray-900">
              StoryMint
            </span>
          </div>

          {/* Desktop Navigation */}
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

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
              {status === "loading" ? (
                <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
              ) : session ? (
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer border-none bg-transparent p-0 hover:bg-transparent">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={session.user?.image || ""} />
                        <AvatarFallback>
                          {session.user?.name
                            ? getUserInitials(session.user.name)
                            : "U"}
                        </AvatarFallback>
                      </Avatar>
                    </MenubarTrigger>
                    <MenubarContent align="end" className="w-56">
                      <MenubarItem className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </MenubarItem>
                      <MenubarItem className="flex items-center space-x-2">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </MenubarItem>
                      <MenubarItem className="flex items-center space-x-2">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem
                        className="flex items-center space-x-2 text-red-600"
                        onClick={() => signOut()}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              ) : (
                <Button
                  onClick={() => signIn("google")}
                  variant="ghost"
                  className="bg-green-500 font-medium text-white hover:cursor-pointer hover:text-gray-900"
                >
                  Join NFTaI
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Image
                      src={Logo || "/placeholder.svg"}
                      alt=""
                      width={100}
                      height={100}
                      className="size-6"
                    />
                    <span>StoryMint</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-4">
                  <a
                    href="#"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>

                  <div className="border-t pt-4">
                    {status === "loading" ? (
                      <div className="h-8 w-full animate-pulse rounded bg-gray-200" />
                    ) : session ? (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={session.user?.image || ""} />
                            <AvatarFallback>
                              {session.user?.name
                                ? getUserInitials(session.user.name)
                                : "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">
                              {session.user?.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {session.user?.email}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Dashboard
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-red-600 hover:text-red-700"
                          onClick={() => {
                            signOut();
                            setMobileMenuOpen(false);
                          }}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => {
                          signIn("google");
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-green-500 font-medium text-white hover:bg-green-600"
                      >
                        Join NFTaI
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
