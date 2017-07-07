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

  it('should call onClick with volumeId', () => {
    const volumeId = '1';
    const onClick = jest.fn();
    const wrapper = shallow(<FavoritesButton volumeId={volumeId} onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith({ id: volumeId });
  });
});

