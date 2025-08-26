"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta",
});

type StyleVariant = "clean" | "cinematic";

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Header({ variant }: { variant: StyleVariant }) {
  return (
    <nav
      className={classNames(
        "sticky top-0 z-50 border-b backdrop-blur",
        variant === "clean"
          ? "bg-white/70 border-black/10"
          : "bg-black/50 border-white/10 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Timothy James <span className="opacity-70">Actor</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/videos", label: "Videos" },
            { href: "/images", label: "Images" },
            { href: "/cv", label: "Credits" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                "px-3 py-1 rounded-full text-sm",
                variant === "clean" ? "hover:bg-black/5" : "hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer({ variant }: { variant: StyleVariant }) {
  return (
    <footer
      className={classNames(
        variant === "clean" ? "bg-white" : "bg-black text-white",
        "border-t",
        variant === "clean" ? "border-black/10" : "border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold">Timothy James</p>
            <p className="opacity-70">Represented by Campos Talent</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@campostalent.com"
              className="text-[--color-accent] font-medium"
            >
              Email
            </a>
            <a
              href="https://instagram.com/timmkd"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@timothyjamesactor"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              YouTube
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-current/10 text-sm opacity-70">
          © {new Date().getFullYear()} Timothy James
        </div>
      </div>
    </footer>
  );
}

export default function PreviewPage() {
  const [variant, setVariant] = useState<StyleVariant>("clean");
  const vimeoId = "1066502106"; // existing video id

  const heroSummary =
    "Melbourne-based actor with credits across film, TV and musical theatre. Dad, Japanese speaker and friendly tech geek. Highlights include <em>Guardians of the Galaxy</em>, <em>Rogue One</em> and BBC’s <em>Call the Midwife</em>.";

  return (
    <div className={classNames(jakarta.className)}>
      <Header variant={variant} />

      <div
        className={classNames(
          variant === "cinematic" ? "bg-neutral-950 text-white" : "bg-white",
          "pb-16"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-semibold">Preview</h1>
              <p className="opacity-70">
                Clean professional with cinematic variant • Hero option B
                (standard Vimeo poster)
              </p>
            </div>
            <div className="inline-flex rounded-[--radius] border border-black/10 overflow-hidden bg-black/5 dark:border-white/10">
              {(["clean", "cinematic"] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setVariant(opt)}
                  className={classNames(
                    "px-3 py-2 text-sm",
                    variant === opt
                      ? "bg-[--color-accent] text-white"
                      : "bg-transparent"
                  )}
                >
                  {opt === "clean" ? "Clean" : "Cinematic"}
                </button>
              ))}
            </div>
          </div>

          {/* Hero: video primary with default Vimeo poster, headshot visible */}
          <section
            className={classNames(
              "rounded-[--radius] overflow-hidden",
              variant === "cinematic"
                ? "bg-gradient-to-b from-neutral-900 to-neutral-950"
                : "bg-white"
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
              <div className="lg:col-span-7">
                <div className="relative aspect-video w-full overflow-hidden rounded-[--radius] shadow-sm">
                  <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Timothy James Showreel"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-semibold mb-3">
                  Timothy James
                  <span className="block text-xl md:text-2xl opacity-70">
                    Actor
                  </span>
                </h2>
                <div
                  className="text-base md:text-lg opacity-80 mb-3"
                  dangerouslySetInnerHTML={{ __html: heroSummary }}
                />
                <p className="text-sm md:text-base opacity-70 mb-6">
                  Actor • Dad • Japanese speaker • Tech geek
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Link
                    href="/videos"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-[--radius] bg-[--color-accent] text-white font-medium shadow-sm hover:opacity-95"
                  >
                    Watch showreel
                  </Link>
                  <Link
                    href="/cv"
                    className={classNames(
                      "inline-flex items-center justify-center px-5 py-3 rounded-[--radius] font-medium",
                      variant === "clean"
                        ? "bg-black/5 hover:bg-black/10"
                        : "bg-white/10 hover:bg-white/15"
                    )}
                  >
                    View credits
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-28 h-36 rounded-[--radius] overflow-hidden shadow-sm">
                    <Image
                      src="/source_images/headshots/Timothy James - glasses.png"
                      alt="Timothy James headshot"
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <span className="opacity-70 text-sm">Headshot</span>
                </div>
              </div>
            </div>
          </section>

          {/* Additional industry experience */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-4">
              Additional industry experience
            </h3>
            <p className="opacity-70 mb-6">
              Alongside acting, Timothy contributes across production and
              specialty performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  k: "Productions",
                  v: "70+",
                  sub: "Film, TV and theatre across Australia & the UK (including featured background and stand‑in)",
                },
                {
                  k: "Specialty performance",
                  v: "Prosthetics / Creature / MoCap",
                  sub: "Star Wars, Guardians, Horizon Zero Dawn",
                },
                {
                  k: "Stand‑in work",
                  v: "Multiple productions",
                  sub: "Mission: Impossible and more",
                },
                {
                  k: "Current role",
                  v: "Twenty 2 Bridges",
                  sub: "Web developer & script consultant",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    "rounded-[--radius] p-6 shadow-sm",
                    variant === "clean"
                      ? "bg-white"
                      : "bg-white/5 border border-white/10"
                  )}
                >
                  {card.k === "Specialty performance" ? (
                    <>
                      <div className="font-medium">{card.k}</div>
                      <div className="text-[--color-accent] mt-1">{card.v}</div>
                      <div className="opacity-70 text-sm">{card.sub}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-semibold text-[--color-accent]">
                        {card.v}
                      </div>
                      <div className="font-medium mt-2">{card.k}</div>
                      <div className="opacity-70 text-sm">{card.sub}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer variant={variant} />
    </div>
  );
}
