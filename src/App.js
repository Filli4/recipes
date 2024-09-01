import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Lägg till Axios för att hantera API-anrop
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import recipesData from './data/recipes.json';
import './App.css'; // Import the CSS file

function App() {
  const [recipes, setRecipes] = useState([]); // State to manage recipe list
  const [editingRecipe, setEditingRecipe] = useState(null); // State to manage currently editing recipe
  const apiKey = 'dd5b416fe841475a9ee6dd045516d0bb'; // Din Spoonacular API-nyckel

  // Load initial recipe data from recipes.json when the component mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  // Function to fetch recipes from Spoonacular API based on a search query
  const fetchRecipesFromAPI = async (query) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
    
    
    try {
      const response = await axios.get(url);
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes from API", error);
    }
  };
console.log(fetchRecipesFromAPI);

  // Add a new recipe to the list
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Delete a recipe by its ID
  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Set a recipe for editing by its ID
  const handleEditRecipe = (id) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    setEditingRecipe(recipeToEdit);
  };

  // Update a recipe in the list
  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
    );
    setEditingRecipe(null); // Clear the editing state after update
  };

  // Update recipe rating
  const handleRateRecipe = (id, newRating) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, rating: newRating } : recipe
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Receptdelningsplattform</h1>
      {/* Form to add or edit a recipe */}
      <RecipeForm
        onAdd={handleAddRecipe}
        onUpdate={handleUpdateRecipe}
        editingRecipe={editingRecipe}
        onSearch={fetchRecipesFromAPI} // Pass down the API search function
      />
      {/* List to display all recipes */}
      <RecipeList
        recipes={recipes}
        onDelete={handleDeleteRecipe}
        onEdit={handleEditRecipe}
        onRate={handleRateRecipe} // Pass down the rate function
      />
    </div>
  );
}

export default App;
