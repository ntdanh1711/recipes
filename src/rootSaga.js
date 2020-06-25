/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import recipeSaga from './containers/RecipeScreen/saga';

function* rootSaga() {
  yield recipeSaga();
}

export default rootSaga;
