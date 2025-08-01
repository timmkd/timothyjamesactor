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
  }, [sortBy]);

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
  }, [sortedCredits, sortBy, uniqueTypes]);

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
                <p className="mt-2 text-gray-600">
                  Professional credits and experience
                </p>
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
      </div>
    </div>
  );
}
