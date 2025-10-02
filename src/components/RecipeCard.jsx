import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const { idMeal, strMeal, strMealThumb } = recipe;

  return (
    <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col">
      <img src={strMealThumb} alt={strMeal} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2">{strMeal}</h3>
        <div className="mt-auto flex items-center justify-between">
          <Link to={`/recipe/${idMeal}`} className="text-sm bg-indigo-600 text-white px-3 py-2 rounded">View Recipe</Link>
        </div>
      </div>
    </div>
  );
}