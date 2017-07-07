import React from 'react';
import { shallow, mount } from 'enzyme';
import { VolumeList, Volume } from '../../../src/components/volumes';
import Favorites from '../../../src/services/favorites';
import { aVolume } from '../../builders/volume';

jest.mock('../../../src/services/favorites');

describe('<VolumeList />', () => {
  beforeEach(() => {
    Favorites.mockClear();
  });

  it('should render a list of <Volume /> components', () => {
    const volumes = [aVolume(), aVolume(), aVolume()];
    const wrapper = shallow(<VolumeList volumes={volumes} />);
    expect(wrapper.find(Volume).length).toBe(3);
  });

  it('should instantiate favorite', () => {
    const volume = aVolume();
    shallow(<VolumeList volumes={[volume]} />);
    expect(Favorites.mock.instances.length).toBe(1);
  });

  it('should check for favorites', () => {
    const volume = aVolume();
    Favorites.prototype.isFavorite = jest.fn()
      .mockReturnValue(true);
    const wrapper = shallow(<VolumeList volumes={[volume]} />);
    expect(Favorites.prototype.isFavorite).toHaveBeenCalledTimes(1);
    expect(Favorites.prototype.isFavorite).toHaveBeenCalledWith(volume);
    expect(wrapper.find(Volume).props().favorite).toBe(true);
  });

  it('should re-render on new favorites', () => {
    const wrapper = mount(<VolumeList volumes={[aVolume()]} />);
    wrapper.instance().render = jest.fn();
    wrapper.update();
    const favorites = Favorites.mock.instances[0];
    favorites.add({ id: '000' });
    expect(wrapper.instance().render).toHaveBeenCalledTimes(1);
  });

  it('should call favorite.toggle on favorites button click', () => {
    const volume = aVolume();
    const favorite = { id: volume.id };
    const mockToggle = jest.fn();
    Favorites.prototype.toggle = mockToggle;
    const wrapper = shallow(<VolumeList volumes={[volume]} />);
    wrapper.instance().handleFavoriteButtonClick(favorite);
    expect(mockToggle).toHaveBeenCalledTimes(1);
    expect(mockToggle).toHaveBeenCalledWith(favorite);
  });

  it('should set onFavoriteButtonClick callback', () => {
    const wrapper = shallow(<VolumeList volumes={[aVolume()]} />);
    const { handleFavoriteButtonClick } = wrapper.instance();
    const { onFavoriteButtonClick } = wrapper.find(Volume).props();
    expect(onFavoriteButtonClick).toBe(handleFavoriteButtonClick);
  });
});
