/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import styles from './RecipeTable.css';

const RecipeTable = (props) => {
  const {
    recipeData, setPageNumber, pageNumber, isLoading, totalPages,
    onConfirmDelete,
  } = props;
  const pagination = {
    current: pageNumber,
    pageSize: 5,
    total: totalPages * 5,
  };

  const columns = [
    {
      title: 'Recipe Name',
      dataIndex: 'title',
      render: (title, recipe) => (
        <div
          key={recipe.id}
          className={styles.tableContainer}
        >
          <h3>{title}</h3>
          <h4 className={styles.description}>{recipe.description}</h4>
        </div>
      ),
      width: '80%',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id) => (
        <input
          type="button"
          className={styles.deleteButton}
          value="Delete"
          onClick={() => onConfirmDelete(id)}
        />
      ),
    },
  ];

  const handleTableChange = (paginationChange) => {
    setPageNumber(paginationChange.current);
  };

  return (
    <Table
      columns={columns}
      dataSource={recipeData}
      pagination={pagination}
      loading={isLoading}
      onChange={handleTableChange}
    />
  );
};

RecipeTable.propTypes = {
  recipeData: PropTypes.arrayOf(PropTypes.shape({
    results: PropTypes.object,
  })),
  pageNumber: PropTypes.number,
  isLoading: PropTypes.bool,
  totalPages: PropTypes.number,
  setPageNumber: PropTypes.func,
  onConfirmDelete: PropTypes.func,
};

RecipeTable.defaultProps = {
  recipeData: [],
  pageNumber: 1,
  isLoading: false,
  totalPages: 1,
  setPageNumber: () => {},
  onConfirmDelete: () => {},
};

export default RecipeTable;
