import { createSelector } from 'reselect';

const recipeSelector = (state) => state.recipeReducer;

const getRecipesSelector = createSelector(
  recipeSelector,
  (recipes) => recipes.recipes,
);

const getLoadingSelector = createSelector(
  recipeSelector,
  (recipes) => recipes.isLoading,
);

const getErrorSelector = createSelector(
  recipeSelector,
  (recipes) => recipes.error,
);

const getTotalPagesSelector = createSelector(
  recipeSelector,
  (recipes) => recipes.totalPages,
);

export {
  getRecipesSelector, getLoadingSelector, getErrorSelector, getTotalPagesSelector,
};
