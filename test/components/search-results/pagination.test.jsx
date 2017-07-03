import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '../../../src/components/search-results';

describe('<Pagination />', () => {
  it('should have a next button', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find('#next-page').length).toBe(1);
  });

  it('should have next page click handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Pagination onNextPageClick={handler} />);
    wrapper.find('#next-page').simulate('click');
    expect(handler).toBeCalled();
  });
});

