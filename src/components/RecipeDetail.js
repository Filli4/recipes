import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="recipe-detail">
      <p>Ingredienser: {recipe.ingredients}</p>
      <p>Instruktioner: {recipe.instructions}</p>
      <p>Betyg: {recipe.rating}</p>
    </div>
  );
};

export default RecipeDetail;
