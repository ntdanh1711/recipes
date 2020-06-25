import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRecipes, deleteRecipe } from './actions';
import {
  getRecipesSelector,
  getLoadingSelector,
  getErrorSelector,
  getTotalPagesSelector,
} from './selectors';
import RecipeTable from '../../components/RecipeTable';
import RecipeInput from '../../components/RecipeInput';

const RecipeScreen = (props) => {
  const {
    getRecipes, recipeList, isLoading, error, totalPages, deleteRecipeItem,
  } = props;

  const [keyword, setKeyWord] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getRecipes({ keyword, pageNumber });
  }, []);

  useEffect(() => {
    getRecipes({ keyword, pageNumber });
  }, [pageNumber]);

  useEffect(() => {
    getRecipes({ keyword, pageNumber: 1 });
  }, [keyword]);

  const onConfirmDelete = (recipeId) => {
    if (window.confirm('Do you really want to delete?')) {
      deleteRecipeItem({ recipeId, keyword, pageNumber });
    }
  };

  return (
    <div style={{ width: '700px', margin: '5rem auto' }}>
      {error && (
      <div>
        Error
        {error.message}
      </div>
      )}
      <RecipeInput onSearchKeyWord={setKeyWord} />
      <RecipeTable
        recipeData={recipeList}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
        isLoading={isLoading}
        onConfirmDelete={onConfirmDelete}
      />
    </div>
  );
};

RecipeScreen.propTypes = {
  recipeList: PropTypes.arrayOf(PropTypes.shape({
    results: PropTypes.object,
  })),
  error: PropTypes.shape({
    message: PropTypes.string,
    errors: PropTypes.array,
  }),
  isLoading: PropTypes.bool,
  totalPages: PropTypes.number,
  getRecipes: PropTypes.func,
  deleteRecipeItem: PropTypes.func,
};

RecipeScreen.defaultProps = {
  recipeList: [],
  error: {},
  isLoading: false,
  totalPages: 1,
  getRecipes: () => {},
  deleteRecipeItem: () => {},
};

const mapStateToProps = (state) => ({
  error: getErrorSelector(state),
  isLoading: getLoadingSelector(state),
  recipeList: getRecipesSelector(state),
  totalPages: getTotalPagesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: (params) => {
    dispatch(fetchRecipes(params));
  },
  deleteRecipeItem: (params) => {
    dispatch(deleteRecipe(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeScreen);
