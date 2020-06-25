/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Table } from 'antd';

import RecipeTable from '../RecipeTable';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<RecipeTable />);
});

describe('RecipeTable', () => {
  it('Should have Table', () => {
    expect(wrapper.find(Table).exists()).toBe(true);
  });
});
