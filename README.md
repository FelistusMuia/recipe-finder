Recipe Finder App

A React web application that allows users to search for and view detailed recipes. The app fetches real recipe data from TheMealDB API and displays them in a simple, user-friendly interface.


Features

Search for recipes by keyword (e.g., chicken, pasta, rice).

Displays recipe cards with images and names.

View full recipe details including ingredients and instructions.

Responsive layout that adapts to mobile and desktop screens.

Organized folder structure with reusable components.


Technologies Used

React (Vite)

Tailwind CSS

React Router

TheMealDB API


Setup Instructions

Clone the repository

git clone https://github.com/FelistusMuia/recipe-finder.git


Navigate to the project folder

cd recipe-finder


Install dependencies

npm install


Start the development server

npm run dev


Open your browser and go to

http://localhost:5173



What's Working

Search bar fetches data from TheMealDB API and displays recipes.

Each recipe card links to a details page showing ingredients and instructions.

Images are displayed at the top of the recipe details page and resize properly.

Layout and design implemented using Tailwind CSS.

Navigation between pages works properly through React Router.



What's Not Working

The Favorites page layout is set up but not yet functional.

Some recipes fetched from the API lack complete data (missing instructions or measures).

No error or loading states yet for API requests.

No pagination or category filters implemented.

Challenges Faced

Structuring API calls and managing fetched data in React.

Adjusting image sizes and ensuring proper layout responsiveness.

Passing data between components when navigating between pages.

Setting up React Router paths correctly for all pages.

Handling missing or incomplete data from the API.


Future Improvements

Make the Favorites page functional using local storage.

Add a loader or spinner during data fetching.

Add categories or area-based filtering.

Improve error handling and UX design.

Add animations and better UI feedback.