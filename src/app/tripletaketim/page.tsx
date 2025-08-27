"use client";

import TripleTakeHero from "@/components/TripleTakeHero";
import MonthlySceneCard from "@/components/MonthlySceneCard";
import tripletaketimData from "@/content/tripletaketim.json";
import type { Metadata } from "next";

export default function TripletaketimPage() {
  const { campaign, scenes } = tripletaketimData;

  // Format dates for display
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const startDate = formatDate(campaign.startDate);
  const endDate = formatDate(campaign.endDate);

  return (
    <div className="min-h-screen bg-[--color-background]">
      {/* Hero Section */}
      <TripleTakeHero
        title={campaign.title}
        subtitle={campaign.subtitle}
        tagline={campaign.tagline}
        mission={campaign.mission}
        startDate={startDate}
        endDate={endDate}
      />

      {/* Monthly Scenes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[--color-foreground] mb-4">
            Monthly Scenes
          </h2>
        </div>

        {/* Scene Cards */}
        <div className="space-y-8">
          {scenes.map((scene) => (
            <MonthlySceneCard key={scene.id} scene={scene} />
          ))}
        </div>
      </div>
    </div>
  );
}
