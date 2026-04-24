"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/activities" },
  { label: "Hiring", href: "/venue-hire" },
  { label: "Contacts", href: "/contact" },
];

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage = "Home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-[12px]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2 sm:px-6 sm:py-1 lg:px-8 lg:py-0">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Unity Centre Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain sm:h-12 sm:w-12"
            />
            <span className="text-xl font-extrabold tracking-tight text-dark">
              Unity Centre
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-5 text-sm font-semibold transition-colors ${
                  link.label === activePage
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                    : "text-dark hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <Link
              href="/donate"
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-shadow hover:shadow-md"
            >
              Donate Now
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-dark lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu - rendered outside header to escape stacking context */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 flex w-full max-w-[300px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="Unity Centre Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <span className="text-base font-extrabold tracking-tight text-dark">
                  Unity Centre
                </span>
              </Link>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-page-bg"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-dark" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center rounded-lg px-3 py-3 text-[15px] font-semibold transition-colors ${
                    link.label === activePage
                      ? "bg-primary-light text-primary"
                      : "text-dark hover:bg-page-bg hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-border p-5">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-lg bg-primary py-3 text-center text-sm font-bold text-white shadow-sm transition-shadow hover:shadow-md"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
