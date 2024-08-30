import React, { useState, useEffect } from 'react';

const RecipeForm = ({ onAdd, onUpdate, editingRecipe }) => {
  // Local state for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Populate form fields if editing a recipe
  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title);
      setIngredients(editingRecipe.ingredients);
      setInstructions(editingRecipe.instructions);
    } else {
      setTitle('');
      setIngredients('');
      setInstructions('');
    }
  }, [editingRecipe]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecipe) {
      // Update existing recipe
      onUpdate({ ...editingRecipe, title, ingredients, instructions });
    } else {
      // Add new recipe
      const newRecipe = {
        id: Date.now(), // Unique ID for the recipe
        title,
        ingredients,
        instructions,
        rating: 0, // Default rating
      };
      onAdd(newRecipe);
    }
    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredienser"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Instruktioner"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <button type="submit">{editingRecipe ? 'Uppdatera Recept' : 'Lägg till Recept'}</button>
    </form>
  );
};

export default RecipeForm;
