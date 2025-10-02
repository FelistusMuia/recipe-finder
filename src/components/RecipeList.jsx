import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <div className="text-center text-gray-500 py-8">No recipes to show. Try searching for "chicken", "rice", or "pasta".</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((r) => (
        <RecipeCard key={r.idMeal} recipe={r} />
      ))}
    </div>
  );
}