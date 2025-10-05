import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import Navbar from "./components/Navbar"; 

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-orange-500 text-white">
      {/* Navbar is always visible */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 border-t border-orange-400">
        
      </footer>
    </div>
  );
}