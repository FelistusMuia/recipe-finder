import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-lg">Loading recipe...</p>;
  if (!recipe) return <p className="text-center mt-10 text-lg">Recipe not found.</p>;

  const ingredients = parseIngredients(recipe);

  return (
    <article className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Top Image Section */}
      <div className="w-full">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-96 object-cover md:rounded-t-xl"
        />
      </div>

      {/* Recipe Details */}
      <div className="p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{recipe.strMeal}</h1>
        {recipe.strCategory && (
          <div className="text-center text-gray-500 mb-6">
            {recipe.strCategory} • {recipe.strArea}
          </div>
        )}

        {/* Ingredients */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-1">
            Instructions
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {recipe.strInstructions}
          </p>
        </section>

        {/* Video Section */}
        {recipe.strYoutube && (
          <section className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-1">
              Video Tutorial
            </h2>
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Watch on YouTube
            </a>
          </section>
        )}
      </div>
    </article>
  );
}