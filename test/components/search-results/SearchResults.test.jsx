import React from 'react';
import { shallow } from 'enzyme';
import { VolumeList } from '../../../src/components/volumes';
import { SearchResults, Pagination } from '../../../src/components/search-results';
import { aVolume } from '../../builders/volume';

describe('<SearchResults />', () => {
  it('should be null when no volumes are given', () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.node).toBeNull();
  });

  describe('when volumes are given', () => {
    let wrapper;
    let volumes;

    beforeEach(() => {
      volumes = [aVolume(), aVolume(), aVolume()];
      wrapper = shallow(<SearchResults volumes={volumes} />);
    });

    it('should have a <VolumeList /> component', () => {
      expect(wrapper.find(VolumeList).length).toBe(1);
      expect(wrapper.find(VolumeList).props().volumes).toBe(volumes);
    });

    it('should pass undefined for onVolumeClick to <VolumeList /> component', () => {
      expect(wrapper.find(VolumeList).props().onVolumeClick).not.toBeDefined();
    });

    it('should have a <Pagination /> component', () => {
      expect(wrapper.find(Pagination).length).toBe(1);
    });

    it('should have a className showing the current page', () => {
      wrapper = shallow(<SearchResults volumes={volumes} currentPage={2} />);
      expect(wrapper.hasClass('fb-page-3')).toBe(true);
    });
  });

  describe('when volumes and onVolumeClick are passed', () => {
    let wrapper;
    let volumes;
    let onVolumeClick = () => {};

    beforeEach(() => {
      volumes = [aVolume(), aVolume(), aVolume()];
      wrapper = shallow(<SearchResults volumes={volumes} onVolumeClick={onVolumeClick} />);
    });

    it('should pass onVolumeClick to <VolumeList /> component', () => {
      expect(wrapper.find(VolumeList).props().onVolumeClick).toBe(onVolumeClick);
    });
  });

  describe('when volumes and searQuery are passed', () => {
    let wrapper;
    let volumes;
    let searchQuery = 'a search query';

    beforeEach(() => {
      volumes = [aVolume(), aVolume(), aVolume()];
      wrapper = shallow(<SearchResults volumes={volumes} searchQuery={searchQuery} />);
    });

    it('should pass searchQuery to <VolumeList /> component', () => {
      expect(wrapper.find(VolumeList).props().searchQuery).toBe(searchQuery);
    });
  });
});

