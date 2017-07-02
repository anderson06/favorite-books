import React from 'react';
import Volume from '../volume';
import renderer from 'react-test-renderer';

describe('<Volume />', () => {
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

  it('renders a book placeholder image when no thumbnail is passed', () => {
    const tree = renderer.create(
      <Volume
        id="000"
        title="Fake title"
        description="Fake description"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
