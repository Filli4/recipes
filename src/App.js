import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import recipesData from './data/recipes.json';
import './App.css'; // Import the CSS file

function App() {
  const [recipes, setRecipes] = useState([]); // State to manage recipe list
  const [editingRecipe, setEditingRecipe] = useState(null); // State to manage currently editing recipe

  // Load initial recipe data from recipes.json when the component mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

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

  return (
    <div className="app-container">
      <h1>Receptdelningsplattform</h1>
      {/* Form to add or edit a recipe */}
      <RecipeForm
        onAdd={handleAddRecipe}
        onUpdate={handleUpdateRecipe}
        editingRecipe={editingRecipe}
      />
      {/* List to display all recipes */}
      <RecipeList
        recipes={recipes}
        onDelete={handleDeleteRecipe}
        onEdit={handleEditRecipe}
      />
    </div>
  );
}

export default App;
