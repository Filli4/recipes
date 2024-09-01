import React, { useState, useEffect } from 'react';


const RecipeForm = ({ onAdd, onUpdate, editingRecipe }) => {
  // Local state for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rate, setRate] = useState(null);

  // Populate form fields if editing a recipe
  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title);
      setIngredients(editingRecipe.ingredients);
      setInstructions(editingRecipe.instructions);
      setImageUrl(editingRecipe.image_url);
      setRate(editingRecipe.rating || 0);
    } else {
      setTitle('');
      setIngredients('');
      setInstructions('');
      setImageUrl('');
      setRate('');
    }
  }, [editingRecipe]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingRecipe) {
      // Update existing recipe
      onUpdate({ ...editingRecipe, title, ingredients, instructions, image_url: imageUrl, rating: rate });
    } else {
      // Add new recipe
      const newRecipe = {
        id: Date.now(), // Unique ID for the recipe
        title,
        ingredients,
        instructions,
        image_url: imageUrl,
        rating: rate, // Default rating
      };
      onAdd(newRecipe);
    }

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImageUrl('');
    setRate('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="form-input"
      />
      <input
        type="text"
        placeholder="Ingredienser"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        className="form-input"
      />
      <input
        type="text"
        placeholder="Instruktioner"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        className="form-input"
      />
      <input
        type="text"
        placeholder="Bild-URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        className="form-input"
      />
      <div className="rating-container">
        <input
          type='number'
          placeholder='Rate'
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
          className="rating-input"
          min="0"
          max="10"
        />
        <span className="rating-label">/10</span>
      </div>
      <button type="submit" className="submit-button">
        {editingRecipe ? 'Uppdatera Recept' : 'Lägg till Recept'}
      </button>
    </form>
  );
};

export default RecipeForm;
