import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";

export default function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-6 inline-block bg-white border px-3 py-1 rounded shadow-sm">
        ← Back to Results
      </button>
      {loading && <div>Loading...</div>}
      {!loading && recipe && <RecipeDetails recipe={recipe} />}
      {!loading && !recipe && <div>No recipe found.</div>}
    </div>
  );
}