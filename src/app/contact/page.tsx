import { content } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Timothy James Actor",
  description:
    "Contact Timothy James for acting bookings through Campos Talent Management. Professional representation in Melbourne.",
};

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/timothyjamesactor",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@timothyjamesactor",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/timothyjamesactor",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[--color-foreground]">
            Contact
          </h1>
          <p className="mt-2 text-[--color-muted]">
            Get in touch for bookings and inquiries
          </p>
        </div>

        {/* Agent Information */}
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Agent
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-[--color-foreground]">
                {content.profile.agent.name}
              </h3>
              <p className="text-[--color-muted]">
                {content.profile.agent.contactName}
              </p>
            </div>
            <div>
              <p className="text-[--color-muted]">
                <span className="font-medium">Phone:</span>{" "}
                {content.profile.agent.phone}
              </p>
              <p className="text-[--color-muted]">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${content.profile.agent.email}`}
                  className="text-[--color-accent] hover:opacity-90"
                >
                  {content.profile.agent.email}
                </a>
              </p>
              <p className="text-[--color-muted]">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={content.profile.agent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-accent] hover:opacity-90"
                >
                  {content.profile.agent.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="card card-hover p-6 mb-8">
          <h2 className="text-xl font-semibold text-[--color-foreground] mb-4">
            Follow & connect
          </h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md ring-1 ring-[--color-border]/50 text-[--color-foreground] hover:bg-[--color-background] transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Booking Information */}
        <div className="card card-hover p-6">
          <h2 className="text-lg font-semibold text-[--color-foreground] mb-2">
            Booking information
          </h2>
          <p className="text-[--color-foreground]/90 mb-4">
            For all professional bookings, please contact the agent directly.
            For general inquiries or media requests, feel free to reach out
            through social media channels.
          </p>
          <p className="text-[--color-foreground]">
            <span className="font-semibold">Available for:</span> Film,
            Television, Theatre, Commercials, Corporate Training, Voice-over,
            and Modelling.
          </p>
        </div>
      </div>
    </div>
  );
}
