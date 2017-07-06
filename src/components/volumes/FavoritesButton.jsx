import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FavoritesButton = ({ favorite }) => {
  return (
    <a
      href="#!"
      className={classNames(
        'secondary-content',
        'fb-favorite',
        { 'fb-favorite--on': favorite }
      )}
    >
      <i className="material-icons">grade</i>
    </a>
  );
};

FavoritesButton.propTypes = {
  favorite: PropTypes.bool,
};

FavoritesButton.defaultProps = {
  favorite: false,
};

export default FavoritesButton;

