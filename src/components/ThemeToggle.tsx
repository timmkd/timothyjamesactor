"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    let initial: ThemeMode | null = null;
    if (saved === "light" || saved === "dark") {
      initial = saved;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      initial = "dark";
    } else {
      initial = "light";
    }
    setMode(initial);
    document.documentElement.setAttribute("data-theme", initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    if (!mode) return;
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 text-gray-700"
    >
      {isDark ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.66-4.95l1.41-1.41-1.79-1.8-1.41 1.42 1.79 1.79zM20 13h3v-2h-3v2zM4.95 18.36l1.41 1.41 1.8-1.79-1.42-1.41-1.79 1.79zM13 1h-2v3h2V1zm6.24 3.05l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79z" />
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.004 2a1 1 0 01.94.63 8 8 0 108.427 8.427 1 1 0 011.274 1.274A10 10 0 1111.37 1.086 1 1 0 0112.003 2z" />
        </svg>
      )}
    </button>
  );
}
