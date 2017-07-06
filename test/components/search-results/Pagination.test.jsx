import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '../../../src/components/search-results';

describe('<Pagination />', () => {
  it('should have a next/previous buttons', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find('#next-page').length).toBe(1);
    expect(wrapper.find('#previous-page').length).toBe(1);
  });

  it('should have next page click handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Pagination onNextPageClick={handler} />);
    wrapper.find('#next-page').simulate('click');
    expect(handler).toBeCalled();
  });

  it('should have previous page click handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Pagination currentPage={2} totalPages={2} onPreviousPageClick={handler} />);
    wrapper.find('#previous-page').simulate('click');
    expect(handler).toBeCalled();
  });

  it('shouldn\'t allow go before the first page', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Pagination currentPage={0} onPreviousPageClick={handler} />);
    wrapper.find('#previous-page').simulate('click');
    expect(handler).not.toBeCalled();
    expect(wrapper.find('#previous-page').hasClass('disabled')).toBe(false);
  });

  it('shouldn\'t allow go after the last page', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Pagination currentPage={9} totalPages={10} onNextPageClick={handler} />);
    wrapper.find('#next-page').simulate('click');
    expect(handler).not.toBeCalled();
    expect(wrapper.find('#next-page').hasClass('disabled')).toBe(false);
  });
});

