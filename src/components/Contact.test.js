import React from 'react';
import renderer from 'react-test-renderer';

import Contact from './Contact';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});