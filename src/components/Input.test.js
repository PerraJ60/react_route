import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});