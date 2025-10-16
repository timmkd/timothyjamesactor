"use client";

import { useEffect, useState } from "react";

interface TripleTakeHeroProps {
  title: string;
  subtitle: string;
  mission: string[];
  startDate: string;
  endDate: string;
  descriptionTitle?: string;
  descriptionParagraphs?: string[];
}

const TripleTakeHero = ({
  title,
  subtitle,
  mission,
  startDate,
  endDate,
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