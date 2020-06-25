/* eslint-disable no-undef */
import {
  fetchRecipes,
  fetchRecipesFail,
  fetchRecipesSuccess,
  deleteRecipe,
  deleteRecipeFail,
  deleteRecipeSuccess,
} from '../actions';

describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'fetchRecipes',
      payload: {
        params: 1,
      },
    };
    expect(fetchRecipes(1)).toEqual(expectedAction);
  });
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'fetchRecipesFail',
      error: 'Not found',
    };
    expect(fetchRecipesFail('Not found')).toEqual(expectedAction);
  });
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'fetchRecipesSuccess',
      data: {
        id: 1,
      },
    };
    expect(fetchRecipesSuccess({ id: 1 })).toEqual(expectedAction);
  });
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'deleteRecipe',
      payload: {
        params: 1,
      },
    };
    expect(deleteRecipe(1)).toEqual(expectedAction);
  });
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'deleteRecipeFail',
      error: 'delete error',
    };
    expect(deleteRecipeFail('delete error')).toEqual(expectedAction);
  });
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'deleteRecipeSuccess',
      data: 'Delete Done',
    };
    expect(deleteRecipeSuccess('Delete Done')).toEqual(expectedAction);
  });
});
