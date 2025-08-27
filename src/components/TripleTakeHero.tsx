"use client";

import { useEffect, useState } from "react";

interface TripleTakeHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  mission: string[];
  startDate: string;
  endDate: string;
}

const TripleTakeHero = ({ 
  title, 
  subtitle, 
  tagline,
  mission, 
  startDate, 
  endDate 
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[--color-foreground] mb-4">
            <span className="text-purple-600 dark:text-purple-400">{title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[--color-muted] max-w-4xl mx-auto mb-2">
            {subtitle}
          </p>
          <p className="text-lg text-[--color-muted] max-w-3xl mx-auto">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Statement */}
          <div className="card card-hover p-8">
            <h2 className="text-2xl font-bold mb-4 text-[--color-foreground]">
              {startDate} - {endDate}
            </h2>
            <ul className="space-y-3 text-[--color-foreground]">
              {mission.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-3 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Preview */}
          <div className="card p-8 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="text-2xl font-bold mb-4 text-[--color-foreground]">
                One Scene, Three Takes
              </h3>
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
              <p className="text-sm font-medium text-[--color-muted] mt-6">
                Every month. Twelve months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleTakeHero;