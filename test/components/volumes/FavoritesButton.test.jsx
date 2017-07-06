import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesButton } from '../../../src/components/volumes';

describe('<FavoritesButton />', () => {
  it('is not favorite by default', () => {
    const wrapper = shallow(<FavoritesButton />);
    expect(wrapper.hasClass('fb-favorite--on')).toBe(false);
  });

  it('should show favorite status', () => {
    const wrapper = shallow(<FavoritesButton favorite />);
    expect(wrapper.hasClass('fb-favorite--on')).toBe(true);
  });
});

