"use client";

import { content } from "@/lib/content";
import Link from "next/link";
import InlinePhotoSwipe from "@/components/InlinePhotoSwipe";
import { useEffect, useState } from "react";
import { trackTripleTakeEvent } from "@/components/AnalyticsTracker";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.hasAttribute('data-theme') && 
                 document.documentElement.getAttribute('data-theme') === 'dark');
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    });
    
    return () => observer.disconnect();
  }, []);
  const navigationCards = [
    {
      title: "About",
      description: "Learn more about my background, skills, and training",
      href: "/about",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: "CV",
      description: "View my professional credits and experience",
      href: "/cv",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      title: "Images",
      description: "Browse professional headshots and production images",
      href: "/images",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      title: "Videos",
      description: "Watch showreels and character reels",
      href: "/videos",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-red-500",
    },
    {
      title: "Contact",
      description: "Get in touch for bookings and inquiries",
      href: "/contact",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      {/* Hero Section with showreel primary (standard Vimeo poster) */}
      <div className="bg-[--color-background]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Showreel */}
            <div className="lg:col-span-7 pt-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-sm card">
                <iframe
                  src={`https://player.vimeo.com/video/1066502106?title=0&byline=0&portrait=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Timothy James Showreel"
                />
              </div>
            </div>

            {/* Text Content + Headshot */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[--color-foreground]">
                Timothy James
                <span className="block text-3xl md:text-4xl font-medium text-gray-600">
                  Actor
                </span>
              </h1>
              <div
                className="text-xl mb-3 text-[--color-muted]"
                dangerouslySetInnerHTML={{
                  __html:
                    "Melbourne-based actor with credits across film, TV and musical theatre. Dad, Japanese speaker and friendly tech geek. Highlights include <em>Guardians of the Galaxy</em>, <em>Rogue One</em> and BBC’s <em>Call the Midwife</em>.",
                }}
              />
              <p className="text-lg font-medium mb-6 text-[--color-accent]">
                Actor • Dad • Japanese speaker • Tech geek
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
                <Link
                  href="/cv"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View credits
                </Link>
                <Link
                  href="/videos"
                  className="px-6 py-3 rounded-md ring-1 ring-[--color-border]/60 hover:bg-[--color-background] transition-colors"
                >
                  More videos
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <InlinePhotoSwipe
                  src="/source_images/headshots/Timothy James - glasses.png"
                  alt="Timothy James headshot"
                  width={64}
                  height={64}
                />
                <span className="text-sm text-[--color-muted]">Headshot</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* #TripleTakeTim Campaign Section */}
      <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              What is #TripleTakeTim?
            </h2>
            <p className="text-xl text-[--color-muted] max-w-3xl mx-auto mb-2">
              12 months of continued training, casting director connection, and brand building
            </p>
            <p className="text-lg text-[--color-muted] max-w-3xl mx-auto">
              Every scene, triple takes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Campaign Info */}
            <div className="card card-hover p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-[--color-foreground]">
                July 2025 - August 2026
              </h3>
              <ul className="space-y-3 text-[--color-foreground] flex-grow">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-3 text-xl">✓</span>
                  <span>Every month post a new scene with three distinct takes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-3 text-xl">✓</span>
                  <span>Send 3 takes of every scene to every audition (when appropriate)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-3 text-xl">✓</span>
                  <span>Connect with casting directors through consistent quality content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-3 text-xl">✓</span>
                  <span>Continue to train and establish a professional brand</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/tripletaketim"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-colors font-medium"
                  onClick={() => trackTripleTakeEvent.homepageSectionClick()}
                >
                  Enter #TripleTakeTim
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Three Takes Preview */}
            <div className="card p-8 flex flex-col justify-between h-full">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-2 text-[--color-foreground]">
                  One Scene, Three Takes
                </h3>
                <p className="text-[--color-muted] mb-6">
                  Exploring interpretation through character choices, objectives, and technique
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <div className="card p-3 bg-[--color-surface]">
                    <div className="font-bold text-purple-600 dark:text-purple-400">Take 1</div>
                  </div>
                  <div className="card p-3 bg-[--color-surface]">
                    <div className="font-bold text-blue-600 dark:text-blue-400">Take 2</div>
                  </div>
                  <div className="card p-3 bg-[--color-surface]">
                    <div className="font-bold text-[--color-accent]">Take 3</div>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-[--color-muted] mt-6 text-center">
                Every month. Twelve months.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Industry Experience Section */}
      <div className="py-12 bg-[--color-background]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[--color-foreground] mb-4">
              Additional industry experience
            </h2>
            <p className="text-[--color-muted]">
              Alongside acting, Timothy contributes across production and
              specialty performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <div className="text-2xl mb-0 font-bold text-blue-600 [data-theme=dark]:text-[--color-accent]">
                70+
              </div>
              <div className="font-bold mb-2 text-blue-600">Productions</div>
              <div className="text-sm text-[--color-muted]">
                Film, TV and theatre across Australia & the UK (including
                featured background and stand‑in)
              </div>
            </div>
            <div className="card p-6">
              <div className="font-bold text-gray-900 [data-theme=dark]:text-[--color-foreground]">
                Specialty performance
              </div>
              <div className="text-purple-600 mt-1 [data-theme=dark]:text-[--color-accent]">
                Prosthetics / Creature / MoCap
              </div>
              <div className="text-sm text-[--color-muted]">
                Star Wars, Guardians, Horizon Zero Dawn
              </div>
            </div>
            <div className="card p-6">
              <div className="font-bold text-gray-900 [data-theme=dark]:text-[--color-foreground]">
                Stand‑in work
              </div>
              <div className="text-red-600 mt-1 [data-theme=dark]:text-[--color-accent]">
                Multiple productions
              </div>
              <div className="text-sm text-[--color-muted]">
                Mission: Impossible and more
              </div>
            </div>
            <div className="card p-6">
              <div className="font-bold text-gray-900 [data-theme=dark]:text-[--color-foreground]">
                Current industry role
              </div>
              <div className="text-green-600 mt-1 [data-theme=dark]:text-[--color-accent]">
                Twenty 2 Bridges
              </div>
              <div className="text-sm text-[--color-muted]">
                Web developer & script consultant
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="py-16 bg-[--color-background]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[--color-foreground] mb-4">
              Explore
            </h2>
            <p className="text-lg text-[--color-muted]">
              Discover more about my work and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block card card-hover p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg mr-4 bg-transparent text-[--color-foreground] ring-1 ring-[--color-border]/50 group-hover:text-[--color-accent]">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[--color-foreground] group-hover:text-[--color-accent] transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[--color-muted]">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
