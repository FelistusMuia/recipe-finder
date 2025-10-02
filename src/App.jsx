import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-indigo-600">Recipe Finder</Link>
          <nav className="text-sm text-gray-600">
            <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer" className="mr-4">TheMealDB</a>
            <Link to="/" className="hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500">
          Built with React, Tailwind CSS, and TheMealDB — Deploy on Vercel.
        </div>
      </footer>
    </div>
  );
}