import React from "react";

function parseIngredients(recipe) {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      items.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`.trim());
    }
  }
  return items;
}

export default function RecipeDetails({ recipe }) {
  const ingredients = parseIngredients(recipe);
  return (
    <article className="bg-white rounded shadow-sm overflow-hidden">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full object-cover h-80" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-3">{recipe.strMeal}</h1>
        {recipe.strCategory && <div className="text-sm text-gray-500 mb-3">{recipe.strCategory} • {recipe.strArea}</div>}

        <section className="mb-6">
          <h2 className="font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2">Instructions</h2>
          <p className="whitespace-pre-line">{recipe.strInstructions}</p>
        </section>

        {recipe.strYoutube && (
          <section className="mb-6">
            <h2 className="font-semibold mb-2">Video</h2>
            <a href={recipe.strYoutube} target="_blank" rel="noreferrer" className="text-indigo-600 underline">
              Watch on YouTube
            </a>
          </section>
        )}
      </div>
    </article>
  );
}