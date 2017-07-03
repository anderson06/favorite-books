import React from 'react';
import { arrayOf, shape, number } from 'prop-types';
import { Volumes, Volume } from '../volumes';
import Pagination from './pagination';

const SearchResults = (props) => {
  if (props.volumes.length === 0) {
    return null;
  }
  return (
    <div className={`fb-page-${props.currentPage + 1}`}>
      <Volumes {...props} />
      <Pagination {...props} />
    </div>
  );
};

SearchResults.propTypes = {
  volumes: arrayOf(shape(Volume.propTypes)),
  currentPage: number,
};

SearchResults.defaultProps = {
  volumes: [],
  currentPage: 0,
};

export default SearchResults;

