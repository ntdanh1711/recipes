/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import RecipeSceen from '../containers/RecipeScreen/RecipeScreen';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App', () => {
  it('Should render RecipeSceen', () => {
    expect(wrapper.find(RecipeSceen).exists()).toBe(true);
  });
});
