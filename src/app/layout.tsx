import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Timothy James - Actor",
  description:
    "Actor with 70+ productions across Australia and the UK. Dad, Japanese speaker and tech geek. Highlights include Guardians of the Galaxy, Rogue One and Les Misérables. Showreel, credits and bookings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} bg-[--color-background] text-[--color-foreground]`}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <footer className="bg-[--color-surface] text-[--color-foreground] ring-1 ring-[--color-border]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Timothy James</h3>
                  <p className="mb-6 max-w-2xl text-[--color-muted]">
                    Represented by Campos Talent · Bookings: Lisa Campos ·
                    contact@campostalent.com
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/timmkd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/tim.mkdonald"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@timothyjamesactor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      aria-label="YouTube"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:contact@campostalent.com"
                      className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      aria-label="Email"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/about"
                        className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/cv"
                        className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      >
                        CV
                      </a>
                    </li>
                    <li>
                      <a
                        href="/images"
                        className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      >
                        Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="/videos"
                        className="text-[--color-muted] hover:text-[--color-foreground] transition-colors"
                      >
                        Videos
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-[--color-muted]">
                    <li>
                      <a
                        href="/contact"
                        className="hover:text-[--color-foreground] transition-colors"
                      >
                        Booking Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:contact@campostalent.com"
                        className="hover:text-[--color-foreground] transition-colors"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linktr.ee/timothyjamesactor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[--color-foreground] transition-colors"
                      >
                        Linktree
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-[--color-border] mt-8 pt-8 text-center">
                <p className="text-sm text-[--color-muted]">
                  © {new Date().getFullYear()} Timothy James. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
