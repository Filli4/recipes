import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes, onDelete, onEdit, onRate }) => {
  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.id} className="recipe-item">
          <h2>{recipe.title}</h2>
          <RecipeDetail recipe={recipe} />
          <button onClick={() => onEdit(recipe.id)} className="edit-button">Redigera</button>
          <button onClick={() => onDelete(recipe.id)} className="delete-button">Radera</button>

          {/* Betygsättning - lägg till knappar för att öka eller minska betyget */}
          <div className="rating">
            <button onClick={() => onRate(recipe.id, recipe.rating + 1)}>+</button>
            <span>Betyg: {recipe.rating}</span>
            <button onClick={() => onRate(recipe.id, recipe.rating - 1)} disabled={recipe.rating <= 0}>-</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
