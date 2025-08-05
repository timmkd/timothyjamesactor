"use client";

import { useState, useMemo } from "react";
import { content, getUniqueCreditTypes } from "@/lib/content";
import CreditRow from "@/components/CreditRow";

export default function CVPage() {
  const [sortBy, setSortBy] = useState<"type" | "date">("type");

  const uniqueTypes = getUniqueCreditTypes();

  // Define the specific order for credit types - using exact names from the data
  const typeOrder = [
    "Feature Film",
    "Television",
    "Video Game",
    "Musical Theatre",
    "Commercial",
    "Short Film",
    "Corporate / Training",
  ];

  const sortedCredits = useMemo(() => {
    const sorted = [...content.credits];

    if (sortBy === "date") {
      // Sort by year (most recent first)
      sorted.sort((a, b) => b.year - a.year);
    } else {
      // Sort by type, then by year within each type
      sorted.sort((a, b) => {
        if (a.type === b.type) {
          return b.year - a.year; // Most recent first within same type
        }
        // Use the predefined order
        const aIndex = typeOrder.indexOf(a.type);
        const bIndex = typeOrder.indexOf(b.type);
        return aIndex - bIndex;
      });
    }

    return sorted;
  }, [sortBy, typeOrder]);

  // Group credits by type for the type view, maintaining the specified order
  const creditsByType = useMemo(() => {
    if (sortBy !== "type") return null;

    const grouped: { [key: string]: typeof content.credits } = {};
    // Use the predefined order to ensure correct sequence
    typeOrder.forEach((type) => {
      if (uniqueTypes.includes(type)) {
        grouped[type] = sortedCredits.filter((credit) => credit.type === type);
      }
    });
    return grouped;
  }, [sortedCredits, sortBy, uniqueTypes, typeOrder]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  CV / Résumé
                </h1>
              </div>
              <div>
                <label
                  htmlFor="sort-by"
                  className="block text-sm font-medium text-gray-700 mb-1 text-right"
                >
                  Sort by
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "type" | "date")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="type">Type</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
          </div>

          {/* Credits Display */}
          <div className="overflow-x-auto">
            <div className="px-6 py-4">
              {/* Credits by Type (with section headers) */}
              {sortBy === "type" && creditsByType && (
                <>
                  {typeOrder.map((type) => {
                    if (creditsByType[type] && creditsByType[type].length > 0) {
                      return (
                        <div key={type}>
                          <div className="bg-gray-100 px-4 py-2 mt-4 mb-2 rounded-md">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {type}
                            </h3>
                          </div>
                          {creditsByType[type].map((credit, index) => (
                            <CreditRow
                              key={`${credit.year}-${credit.production}-${index}`}
                              credit={credit}
                            />
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </>
              )}

              {/* Credits by Date (no headers) */}
              {sortBy === "date" && (
                <>
                  {sortedCredits.map((credit, index) => (
                    <CreditRow
                      key={`${credit.year}-${credit.production}-${index}`}
                      credit={credit}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Industry Experience Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg shadow-sm mt-8 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialty performance</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium text-gray-900">Star Wars: Rogue One (2016)</p>
                  <p className="text-gray-700">Stormtrooper - Main trooper team</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-medium text-gray-900">Pride and Prejudice and Zombies (2016)</p>
                  <p className="text-gray-700">Featured zombie - Extensive prosthetic performance</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-medium text-gray-900">Guardians of the Galaxy (2014)</p>
                  <p className="text-gray-700">Alien - Prosthetic performance</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-medium text-gray-900">Call the Midwife (BBC, 2013)</p>
                  <p className="text-gray-700">Featured period background</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-medium text-gray-900">Horizon Zero Dawn: Frozen Wilds (2017)</p>
                  <p className="text-gray-700">3D character modeling & motion capture</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Production experience</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">70+</p>
                    <p className="text-gray-700">Productions</p>
                    <p className="text-sm text-gray-500">UK & Australia</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-purple-600">Stand-in work</p>
                    <p className="text-gray-700">Mission Impossible</p>
                    <p className="text-sm text-gray-500">& multiple productions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Current industry role</h3>
                <p className="font-medium text-gray-900">
                  <a href="https://www.twenty2bridges.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    Twenty 2 Bridges
                  </a>
                </p>
                <p className="text-gray-700">Web developer & script consultant</p>
                <p className="text-sm text-gray-500 mt-2">Combining technical expertise with creative consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
