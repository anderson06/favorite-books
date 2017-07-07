import React from 'react';
import { shallow } from 'enzyme';
import { Volume, FavoritesButton } from '../../../src/components/volumes';
import { aVolume } from '../../builders/volume';

describe('<Volume />', () => {
  it('renders a book placeholder image when no thumbnail is passed', () => {
    const volume = aVolume();
    delete volume.thumbnail;
    const wrapper = shallow(<Volume {...volume} />);
    expect(wrapper.find('.placeholder').length).toBe(1);
  });

  it('should set onClick prop to FavoritesButton', () => {
    const onFavoriteButtonClick = () => {};
    const wrapper = shallow(
      <Volume
        {...aVolume()}
        onFavoriteButtonClick={onFavoriteButtonClick}
      />);
    const { onClick } = wrapper.find(FavoritesButton).props();
    expect(onClick).toBe(onFavoriteButtonClick);
  });

  it('should set favorite prop to FavoritesButton', () => {
    const wrapper = shallow(<Volume {...aVolume()} favorite />);
    const { favorite } = wrapper.find(FavoritesButton).props();
    expect(favorite).toBe(true);
  });

  it('should set volumeId prop to FavoritesButton', () => {
    const volume = aVolume();
    const wrapper = shallow(<Volume {...volume} />);
    const { volumeId } = wrapper.find(FavoritesButton).props();
    expect(volumeId).toBe(volume.id);
  });
});
