/* eslint-disable no-undef */
import { recipeReducer } from '../reducer';

describe('RECIPE REDUCER', () => {
  const initialState = {
    recipes: [],
    error: null,
    isLoading: false,
    totalPages: 1,
  };
  it('should return the initial state', () => {
    expect(recipeReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle "fetchRecipes" action', () => {
    expect(recipeReducer({}, { type: 'fetchRecipes' })).toEqual({ isLoading: true });
  });
  it('should handle "fetchRecipesSuccess" action', () => {
    const mockData = {
      recipes: [{
        id: 1,
      }],
      totalPages: 2,
    };
    expect(recipeReducer({}, { type: 'fetchRecipesSuccess', data: mockData }))
      .toEqual({ recipes: mockData.recipes, isLoading: false, totalPages: 2 });
  });
  it('should handle "fetchRecipesFail" action', () => {
    expect(recipeReducer({}, { type: 'fetchRecipesFail', error: 'fetch error' }))
      .toEqual({ isLoading: false, error: 'fetch error' });
  });
});
