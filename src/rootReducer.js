/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { combineReducers } from 'redux';

import { recipeReducer } from './containers/RecipeScreen/reducer';

export default combineReducers({ recipeReducer });
