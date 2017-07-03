import React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => (
  <ul className="pagination">
    <li className="waves-effect">
      <a
        onClick={props.onNextPageClick}
        id="next-page"
        href="#!"
      >
        <i className="material-icons">chevron_right</i>
      </a>
    </li>
  </ul>
);

Pagination.propTypes = {
  onNextPageClick: PropTypes.func,
};

Pagination.defaultProps = {
  onNextPageClick: () => {},
};

export default Pagination;

