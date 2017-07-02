import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  return (
    <form
      id="search-form"
      className="fb-search"
      onSubmit={props.onSubmit}
    >
      <input
        onChange={props.onChange}
        className="fb-search-input"
        placeholder="Book Name"
        required="required"
        autoComplete="off"
        autoFocus={true}
        type="search"
        name="search"
        id="search"
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchForm;

