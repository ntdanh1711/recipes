/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'antd';

import RecipeInput from '../RecipeInput';

const { Search } = Input;
let wrapper;

beforeEach(() => {
  wrapper = shallow(<RecipeInput />);
});

describe('RecipeInput', () => {
  it('Should have Search input', () => {
    expect(wrapper.find(Search).exists()).toBe(true);
  });
});
