import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <p>Ingredienser: {recipe.ingredients}</p>
      <p>Instruktioner: {recipe.instructions}</p>
      <p>Betyg: {recipe.rating}</p>
      {/* Här kan ni lägga till fler detaljer eller funktioner */}
    </div>
  );
};

export default RecipeDetail;
