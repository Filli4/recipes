import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import recipesData from './data/recipes.json';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null); // Hantera vilket recept som redigeras

  useEffect(() => {
    // Ladda in mockdata när komponenten laddas
    setRecipes(recipesData);
  }, []);

  // Lägg till nytt recept
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Radera recept
  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Starta redigering av ett recept
  const handleEditRecipe = (id) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    setEditingRecipe(recipeToEdit);
  };

  // Uppdatera ett recept
  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
    setEditingRecipe(null); // Avsluta redigeringsläge
  };

  return (
    <div>
      <h1>Receptdelningsplattform</h1>
      {/* Om vi redigerar, visa redigeringsformuläret; annars visa standardformuläret */}
      <RecipeForm onAdd={handleAddRecipe} onUpdate={handleUpdateRecipe} editingRecipe={editingRecipe} />
      <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} onEdit={handleEditRecipe} />
    </div>
  );
}

export default App;
