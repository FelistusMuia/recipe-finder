import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim(), searchType);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm mb-6">
      <div className="flex gap-2 items-center">
        <input
          aria-label="Search recipes"
          placeholder="Search by ingredient or dish..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border rounded px-2 py-2"
          aria-label="Search type"
        >
          <option value="name">Name</option>
          <option value="ingredient">Ingredient</option>
        </select>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Search</button>
      </div>

      <div className="mt-3 text-sm text-gray-500">
        Tip: choose <strong>Name</strong> to search meal names (e.g., "Arrabiata") or <strong>Ingredient</strong> to find meals using an ingredient (e.g., "chicken").
      </div>
    </form>
  );
}
