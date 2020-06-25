import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

const RecipeInput = ({ onSearchKeyWord }) => (
  <Search
    placeholder="input search text"
    onSearch={(value) => onSearchKeyWord(value)}
    enterButton
  />
);

RecipeInput.propTypes = {
  onSearchKeyWord: PropTypes.func,
};

RecipeInput.defaultProps = {
  onSearchKeyWord: () => {},
};

export default RecipeInput;
