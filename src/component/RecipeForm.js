import React, { useState, useEffect } from 'react';

const RecipeForm = ({ onAdd, onUpdate, editingRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecipe) {
      // Uppdatera befintligt recept
      onUpdate({ ...editingRecipe, title, ingredients, instructions });
    } else {
      // Lägg till nytt recept
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients,
        instructions,
        rating: 0,
      };
      onAdd(newRecipe);
    }
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
      />
      <input
        type="text"
        placeholder="Ingredienser"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <input
        type="text"
        placeholder="Instruktioner"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button type="submit">{editingRecipe ? 'Uppdatera Recept' : 'Lägg till Recept'}</button>
    </form>
  );
};

export default RecipeForm;
