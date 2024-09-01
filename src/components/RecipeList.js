import React from 'react';


const RecipeList = ({ recipes, onDelete, onEdit, onRate }) => {
  const handleRateChange = (recipeId, change) => {
    // Find the recipe to rate
    const recipe = recipes.find((r) => r.id === recipeId);
    if (!recipe) return;

    // Calculate new rating within bounds
    const newRating = Math.max(0, Math.min(10, recipe.rating + change));

    // Call the onRate function with the new rating
    onRate(recipeId, newRating);
  };

  return (
    <ul className="recipe-list">
    {recipes.map((recipe) => (
      <li key={recipe.id} className="recipe-item">
        <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
        <h2>{recipe.title}</h2>
        <div className="recipe-detail">
          <p>Ingredienser: {recipe.ingredients}</p>
          <p>Instruktioner: {recipe.instructions}</p>
          <p>Betyg: {recipe.rating}</p>
        </div>
        <button onClick={() => onEdit(recipe.id)} className="edit-button">Redigera</button>
        <button onClick={() => onDelete(recipe.id)} className="delete-button">Radera</button>

        {/* Rating system with buttons to increase or decrease rating */}
        <div className="rating">
          <button
            onClick={() => handleRateChange(recipe.id, -1)}
            disabled={recipe.rating <= 0}
          >
            -
          </button>
          <span>Betyg: {recipe.rating}/10</span>
          <button
            onClick={() => handleRateChange(recipe.id, 1)}
            disabled={recipe.rating >= 10}
          >
            +
          </button>
        </div>
      </li>
    ))}
  </ul>
  );
};

export default RecipeList;
