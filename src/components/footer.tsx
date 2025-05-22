import Link from "next/link";
import { Mail } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-neutral-900 px-4 py-16 text-white">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-custom_red">A</span>utoK Inspection
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Get detailed VIN reports, vehicle specifications, and safety
              updates with Autoscheckup. Serving the USA, Canada, Europe, and
              more.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Company</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link href="/#about-us" className="hover:text-white">
                  ABOUT US
                </Link>
              </li>

              <li>
                <Link href="/pricing" className="hover:text-white">
                  PRICING
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link href="/#contact" className="hover:text-white">
                  CONTACT US
                </Link> 
              </li>
              <li>
                <Link href="/#whyus" className="hover:text-white">
                  WHY US
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white">
                  NON REFUND POLICY
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="mb-6 text-lg font-semibold">Contact</h3>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:autoscheckup@gmail.com"
                className="hover:text-white"
              >
                autokinspection@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm text-gray-300">
          Copyright © 2018 AutoK Inspection. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
