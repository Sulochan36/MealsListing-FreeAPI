import React, { useEffect, useState } from "react";
import { fetchMeals } from "./utils/meals";
import type { Meal } from "./types/meal";
import MealCard from "./components/MealCard";

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
    <div className="h-64 bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  </div>
);

const App = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMeals = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchMeals(2, 20);
      setMeals(result.meals);
    } catch {
      setError("Failed to load meals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMeals();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          🍽️ Meal Explorer
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Discover delicious recipes in one scroll
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-center text-red-500 mb-6 text-sm">
          {error}
        </p>
      )}

      {/* FEED */}
      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-8">

        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))
          : meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}

      </div>
    </div>
  );
};

export default App;