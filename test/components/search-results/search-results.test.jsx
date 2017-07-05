import React from 'react';
import { shallow } from 'enzyme';
import { Volumes } from '../../../src/components/volumes';
import { SearchResults, Pagination } from '../../../src/components/search-results';
import { volume } from '../../builders/volume';

describe('<SearchResults />', () => {
  it('should be null when no volumes are given', () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.node).toBeNull();
  });

  describe('when volumes are given', () => {
    let wrapper;
    let volumes;

    beforeEach(() => {
      volumes = [ volume(), volume(), volume() ];
      wrapper = shallow(<SearchResults volumes={volumes} />);
    });

    it('should have a <Volumes /> component', () => {
      expect(wrapper.find(Volumes).length).toBe(1);
      expect(wrapper.find(Volumes).props().volumes).toBe(volumes);
    });

    it('should have a <Pagination /> component', () => {
      expect(wrapper.find(Pagination).length).toBe(1);
    });

    it('should have a className showing the current page', () => {
      wrapper = shallow(<SearchResults volumes={volumes} currentPage={2} />);
      expect(wrapper.hasClass('fb-page-3')).toBe(true);
    });
  });
});
