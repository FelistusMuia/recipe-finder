import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // searchType: "name" or "ingredient"
  const handleSearch = async (query, searchType = "name") => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      let url = "";
      if (searchType === "name") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="text-center py-8">Loading...</div>}
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
      {!loading && !error && <RecipeList recipes={recipes} />}
    </div>
  );
}