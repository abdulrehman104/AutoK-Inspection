"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={"/icons/logo.png"}
            alt="Logo"
            width={180}
            height={180}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <Link href="/" className="text-base hover:text-custom_red">
            Home
          </Link>
          <Link href="/#about-us" className="text-base hover:text-custom_red">
            About Us
          </Link>
          <Link href="/#services" className="text-base hover:text-custom_red">
            Services
          </Link>
          <Link href="/#whyus" className="text-base hover:text-custom_red">
            Why Us
          </Link>
          <Link
            href="/#testimonial"
            className="text-base hover:text-custom_red"
          >
            Testimonial
          </Link>
          <Link href="/pricing" className="text-base hover:text-custom_red">
            Pricing
          </Link>
          <Link href="/#contact" className="text-base hover:text-custom_red">
            Contact
          </Link>
        </div>

        <header className="hidden md:flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="text-custom_red border-custom_red hover:bg-custom_red hover:text-white transition-all duration-300"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-custom_red hover:bg-custom_red/90 text-white transition-all duration-300">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
        </header>

        {/* Contact Button (Desktop Only) */}
        <div className="hidden md:flex items-center gap-x-4">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
          <Button className=" bg-custom_red hover:bg-custom_red/90 text-white font-semibold">
            <Link href="/#report">Get Report</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <BiMenu className={`h-6 w-6`} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-4 font-semibold">
              <Link href="/" className="text-base hover:text-custom_red">
                Home
              </Link>
              <Link
                href="/#about-us"
                className="text-base hover:text-custom_red"
              >
                About Us
              </Link>
              <Link
                href="/#services"
                className="text-base hover:text-custom_red"
              >
                Services
              </Link>
              <Link href="/#whyus" className="text-base hover:text-custom_red">
                Why Us
              </Link>
              <Link
                href="/#testimonial"
                className="text-base hover:text-custom_red"
              >
                Testimonial
              </Link>
              <Link href="/pricing" className="text-base hover:text-custom_red">
                Pricing
              </Link>
              <Link
                href="/#contact"
                className="text-base hover:text-custom_red"
              >
                Contact
              </Link>

              <div className="flex flex-col gap-4 mt-4">
                <SignedOut>
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full text-custom_red border-custom_red hover:bg-custom_red hover:text-white transition-all duration-300"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="w-full bg-custom_red hover:bg-custom_red/90 text-white transition-all duration-300">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-10 w-10",
                      },
                    }}
                  />
                </SignedIn>
              </div>

              <Button className="bg-custom_red hover:bg-custom_red/90 font-semibold">
                <Link href="/#report">Get Report</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
