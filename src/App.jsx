import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-orange-500 text-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </main>

     <footer className="bg-orange-600 border-t border-orange-400">
  <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-white text-center font-playfair">
    © {new Date().getFullYear()} RecipeFinder
  </div>
</footer>
    </div>
  );
}