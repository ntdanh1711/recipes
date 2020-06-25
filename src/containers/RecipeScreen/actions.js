import {
  FETCH_RECIPES,
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_SUCCESS,
  DELETE_RECIPE,
  DELETE_RECIPE_FAIL,
  DELETE_RECIPE_SUCCESS,
  RESET_STATE,
} from './actionTypes';

export const fetchRecipes = (params) => ({
  type: FETCH_RECIPES,
  payload: {
    params,
  },
});

export const fetchRecipesSuccess = (data) => ({
  type: FETCH_RECIPES_SUCCESS,
  data,
});

export const fetchRecipesFail = (error) => ({
  type: FETCH_RECIPES_FAIL,
  error,
});

export const deleteRecipe = (params) => ({
  type: DELETE_RECIPE,
  payload: {
    params,
  },
});

export const deleteRecipeSuccess = (data) => ({
  type: DELETE_RECIPE_SUCCESS,
  data,
});

export const deleteRecipeFail = (error) => ({
  type: DELETE_RECIPE_FAIL,
  error,
});

export const resetState = () => ({
  type: RESET_STATE,
});
