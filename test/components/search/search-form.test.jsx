import React from 'react';
import SearchForm from '../../../src/components/search/search-form.jsx';
import renderer from 'react-test-renderer';

describe('<Volume />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

