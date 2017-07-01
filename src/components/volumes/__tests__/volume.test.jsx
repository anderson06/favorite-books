import React from 'react';
import Volume from '../volume';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Volume
      id="000"
      title="Fake title"
      description="Fake description"
      thumbnail="fake-thumbnail.png"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
