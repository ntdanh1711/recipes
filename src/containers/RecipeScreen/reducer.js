import {
  FETCH_RECIPES,
  FETCH_RECIPES_FAIL,
  FETCH_RECIPES_SUCCESS,
  DELETE_RECIPE_FAIL,
  RESET_STATE,
} from './actionTypes';

const initialState = {
  recipes: [],
  error: null,
  isLoading: false,
  totalPages: 1,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, isLoading: true };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.data.recipes,
        totalPages: action.data.totalPages,
        isLoading: false,
      };
    case FETCH_RECIPES_FAIL:
      return { ...state, error: action.error, isLoading: false };
    case DELETE_RECIPE_FAIL:
      return { ...state, error: action.error };
    case RESET_STATE:
      return {
        ...state, recipes: [], error: null, isLoading: false,
      };
    default:
      return state;
  }
};
