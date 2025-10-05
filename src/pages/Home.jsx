import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [searchType, setSearchType] = useState("name");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!search) return;

    let url = "";
    if (searchType === "name") {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    } else {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  return (
    <div>
      {/* Search Section */}
      <div className="py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Search Your Favorite Recipe Here!!
          </h1>

          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Search by ingredient or dish......."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow border rounded-md px-3 py-2 focus:ring-2 text-black focus:ring-indigo-500 outline-none"
            />
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border rounded-md px-2 py-2 text-grey"
            >
              <option value="name">Name</option>
              <option value="ingredient">Ingredient</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Search
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Tip: choose <strong>Name</strong> to search meal names (e.g.,
            "Arrabiata") or <strong>Ingredient</strong> to find meals (e.g.,
            "chicken").
          </p>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="max-w-5xl mx-auto py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.length > 0 ? (
          recipes.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  {meal.strMeal}
                </h2>
                <Link
                  to={`/recipe/${meal.idMeal}`}
                  className="text-indigo-600 text-sm hover:underline"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes to show. Try searching for something!
          </p>
        )}
      </div>
    </div>
  );
}