import { content } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Timothy James{" "}
                <span className="text-3xl md:text-4xl font-medium text-gray-600">
                  Actor
                </span>
              </h1>
              <div
                className="text-xl text-gray-600 mb-4"
                dangerouslySetInnerHTML={{ __html: content.profile.summary }}
              />
              <p className="text-lg text-blue-600 font-medium mb-4">
                Actor • Dad • Japanese Speaker • Tech Geek
              </p>
              <p className="text-gray-700 mb-8">
                Age range: 30-47 | Based: Melbourne | Available globally
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/cv"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View CV
                </Link>
                <Link
                  href="/videos"
                  className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
                >
                  Watch showreel
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/source_images/headshots/Timothy James - glasses.png"
                  alt="Timothy James - Professional Headshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Experience Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional industry experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">70+</h3>
              <p className="text-gray-700">Film & TV Productions</p>
              <p className="text-sm text-gray-500">UK & Australia</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialty performance</h3>
              <p className="text-gray-700">Star Wars • Guardians • Horizon Zero Dawn</p>
              <p className="text-sm text-gray-500">Prosthetic, creature & motion capture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stand-in Work</h3>
              <p className="text-gray-700">Mission Impossible: Rogue Nation</p>
              <p className="text-sm text-gray-500">& Multiple Productions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current role</h3>
              <p className="text-gray-700">Web developer & script consultant</p>
              <p className="text-sm text-gray-500">Twenty 2 Bridges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Showreel Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest showreel
            </h2>
            <p className="text-gray-600">2024 character reel - 2:30</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video relative">
              <iframe
                src="https://player.vimeo.com/video/1066502106?h=360&w=640&autoplay=0&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Timothy James Showreel - March 2025"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore</h2>
            <p className="text-lg text-gray-600">
              Discover more about my work and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`${card.color} text-white p-3 rounded-lg mr-4`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}