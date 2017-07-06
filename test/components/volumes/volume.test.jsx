import React from 'react';
import { shallow } from 'enzyme';
import { Volume } from '../../../src/components/volumes';
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
    const wrapper = shallow(
      <Volume
        id="000"
        title="Fake title"
        description="Fake description"
      />
    );
    expect(wrapper.find('.placeholder').length).toBe(1);
  });
});
