import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

export const selectIngredients = (state: RootState) =>
  state.burgerIngredients.ingredients;

export const selectLoadingStatus = (state: RootState) =>
  state.burgerIngredients.status;

export const selectIngredientsError = (state: RootState) =>
  state.burgerIngredients.error;

export const selectBuns = createSelector([selectIngredients], (ingredients) =>
  ingredients.filter((ingredient) => ingredient.type === 'bun')
);

export const selectSauces = createSelector([selectIngredients], (ingredients) =>
  ingredients.filter((ingredient) => ingredient.type === 'sauce')
);

export const selectMains = createSelector([selectIngredients], (ingredients) =>
  ingredients.filter((ingredient) => ingredient.type === 'main')
);
