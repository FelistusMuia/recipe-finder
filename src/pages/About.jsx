import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-500 via-orange-400 to-yellow-300 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg font-[Poppins]">
          Cooking Meets Creativity 
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed text-white/90 mb-6 font-[Lora]">
          Behind every delicious recipe lies curiosity, inspiration, and a spark of
          creativity. <span className="font-semibold">Recipe Finder</span> is more
          than a search tool it's a journey of flavors, cultures, and discovery.
        </p>

        <p className="text-md md:text-lg leading-relaxed text-white/90 mb-8 font-[Lora]">
          From the simplest home meals to global dishes, this space invites you to
          explore and create. Every search, every click, brings you closer to a story
          served on a plate.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-orange-100 transition-all duration-300"
          >
            Discover Recipes
          </a>
        </div>
      </div>
    </section>
  );
}