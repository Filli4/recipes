import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes, onDelete, onEdit }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <button onClick={() => onDelete(recipe.id)}>Radera</button>
          <button onClick={() => onEdit(recipe.id)}>Redigera</button>
          <RecipeDetail recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
