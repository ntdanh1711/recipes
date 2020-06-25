import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_RECIPES, DELETE_RECIPE } from './actionTypes';
import { fetchRecipes, deleteRecipe } from './services';
import {
  fetchRecipesSuccess,
  fetchRecipesFail,
  fetchRecipes as fetchRecipesAction,
  deleteRecipeFail,
} from './actions';

export function* getRecipesSaga(action) {
  const {
    params: { keyword, pageNumber },
  } = action.payload;

  try {
    const response = yield call(fetchRecipes, keyword, pageNumber);
    if (response && response.status === 200) {
      const { data } = response;
      yield put(fetchRecipesSuccess(data));
    }
  } catch (err) {
    yield put(fetchRecipesFail(err));
  }
}

export function* deleteRecipeSaga(action) {
  const {
    params: { recipeId, keyword, pageNumber },
  } = action.payload;

  try {
    const response = yield call(deleteRecipe, recipeId);
    if (response && response.status === 200) {
      yield put(fetchRecipesAction({ keyword, pageNumber }));
    }
  } catch (err) {
    yield put(deleteRecipeFail(err));
  }
}

export default function* recipeSaga() {
  yield takeLatest(FETCH_RECIPES, getRecipesSaga);
  yield takeLatest(DELETE_RECIPE, deleteRecipeSaga);
}
