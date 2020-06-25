import axios from 'axios';

export const fetchRecipes = (keyword, pageNumber) => {
  const keywordQuery = keyword ? `search=${keyword}&` : '';
  const requestURL = `http://localhost:8081/recipes?${keywordQuery}page=${pageNumber}&pageSize=5`;
  return axios.get(requestURL)
    .then((response) => response);
};

export const deleteRecipe = (recipeId) => {
  const requestURL = `http://localhost:8081/recipes/${recipeId}`;
  return axios.delete(requestURL)
    .then((response) => response);
};
