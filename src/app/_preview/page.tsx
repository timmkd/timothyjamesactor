"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { content } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta",
});

type StyleVariant = "clean" | "cinematic";

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function LiteVimeo({
  id,
  title,
  poster,
}: {
  id: string;
  title: string;
  poster: string;
}) {
  const [play, setPlay] = useState(false);
  return play ? (
    <iframe
      src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`}
      className="w-full h-full"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title={title}
    />
  ) : (
    <button
      onClick={() => setPlay(true)}
      className="relative aspect-video w-full overflow-hidden rounded-[--radius] shadow-sm group"
      aria-label={`Play ${title}`}
    >
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/20" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="h-16 w-16 rounded-full bg-[--color-accent] text-white grid place-items-center shadow-md">
          ▶
        </span>
      </span>
    </button>
  );
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
            { href: "/cv", label: "CV" },
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
  const vimeoId = "1066502106"; // From existing embed

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

          {/* Hero with showreel primary and headshot visible */}
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
                <LiteVimeo
                  id={vimeoId}
                  title="Showreel"
                  poster="/source_images/headshots/Timothy James - glasses.png"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-semibold mb-3">
                  Timothy James
                  <span className="block text-xl md:text-2xl opacity-70">
                    Actor
                  </span>
                </h2>
                <div
                  className="text-base md:text-lg opacity-80 mb-4"
                  dangerouslySetInnerHTML={{ __html: content.profile.summary }}
                />
                <p className="text-sm md:text-base opacity-70 mb-6">
                  Age range: 30–47 • Based: Melbourne • Available globally
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/videos"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-[--radius] bg-[--color-accent] text-white font-medium shadow-sm hover:opacity-95"
                  >
                    Watch reel
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
                    View CV
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Quick feature cards */}
          <section className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { k: "Productions", v: "70+", sub: "UK & Australia" },
                {
                  k: "Specialty",
                  v: "Creature / MoCap",
                  sub: "Star Wars, GoTG",
                },
                { k: "Theatre", v: "Musicals", sub: "Les Mis, Seussical" },
                { k: "Languages", v: "EN / JP", sub: "Accents: AU, RP, US" },
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
                  <div className="text-2xl font-semibold text-[--color-accent]">
                    {card.v}
                  </div>
                  <div className="font-medium mt-2">{card.k}</div>
                  <div className="opacity-70 text-sm">{card.sub}</div>
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

