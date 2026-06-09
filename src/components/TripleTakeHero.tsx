"use client";

import { useEffect, useState } from "react";
import { trackTripleTakeEvent } from "@/components/AnalyticsTracker";

interface TripleTakeHeroProps {
  title: string;
  subtitle: string;
  mission: string[];
  startDate: string;
  endDate: string;
  instagramUrl: string;
  descriptionTitle?: string;
  descriptionParagraphs?: string[];
}

const TripleTakeHero = ({
  title,
  subtitle,
  mission,
  startDate,
  endDate,
  instagramUrl,
  descriptionTitle,
  descriptionParagraphs
}: TripleTakeHeroProps) => {
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

  return (
    <div className={isDark ? "bg-gray-900" : "bg-gradient-to-br from-purple-50 to-blue-50"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[--color-foreground] mb-4">
            <span className="text-purple-600 dark:text-purple-400">{title}</span>
          </h1>
          <p className="text-xl text-[--color-muted] max-w-4xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-6">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTripleTakeEvent.instagramFollow("hero")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-colors font-medium"
              aria-label="Follow @tripletaketim on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @tripletaketim
            </a>
          </div>
        </div>

        {/* Single Compact Card */}
        <div className="max-w-5xl mx-auto">
          <div className="card card-hover p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Statement */}
              <div>
                <h2 className="text-lg font-bold mb-3 text-[--color-foreground]">
                  {startDate} - {endDate}
                </h2>
                <ul className="space-y-2 text-sm text-[--color-foreground]">
                  {mission.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-2 text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Three Takes */}
              {descriptionParagraphs && descriptionParagraphs.length > 0 && (
                <div>
                  {descriptionTitle && (
                    <h2 className="text-lg font-bold text-[--color-foreground] mb-3">
                      {descriptionTitle}
                    </h2>
                  )}
                  <div className="space-y-2 text-sm text-[--color-foreground]">
                    {descriptionParagraphs.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="text-center mt-8">
          <div className="inline-block animate-bounce">
            <svg
              className="w-6 h-6 text-purple-600 dark:text-purple-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          <p className="text-xs text-[--color-muted] mt-2">Scroll to see the scenes</p>
        </div>
      </div>
    </div>
  );
};

export default TripleTakeHero;