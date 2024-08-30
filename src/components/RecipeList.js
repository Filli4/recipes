import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes, onDelete, onEdit }) => {
  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.id} className="recipe-item">
          <h2>{recipe.title}</h2>
          <RecipeDetail recipe={recipe} />
          <button onClick={() => onEdit(recipe.id)} className="edit-button">Redigera</button>
          <button onClick={() => onDelete(recipe.id)} className="delete-button">Radera</button>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
