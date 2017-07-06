import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = (props) => {
  const { totalPages, currentPage } = props;
  const firstPage = currentPage === 0;
  const lastPage = currentPage + 1 === totalPages;

  function handlePreviousPageClick(event) {
    if (!firstPage) {
      props.onPreviousPageClick(event);
    }
  }

  function handleNextPageClick(event) {
    if (!lastPage) {
      props.onNextPageClick(event);
    }
  }

  return (
    <ul className="pagination">
      <li className={`${firstPage ? 'disabled' : 'waves-effect'}`}>
        <a
          onClick={handlePreviousPageClick}
          id="previous-page"
          href="#!"
        >
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
      <li className="fb-pagination-info">
          página { currentPage + 1 }
      </li>
      <li className={`${lastPage ? 'disabled' : 'waves-effect'}`}>
        <a
          onClick={handleNextPageClick}
          id="next-page"
          href="#!"
        >
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onNextPageClick: PropTypes.func,
  onPreviousPageClick: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: 0,
  totalPages: 0,
  onNextPageClick: () => {},
  onPreviousPageClick: () => {},
};

export default Pagination;

