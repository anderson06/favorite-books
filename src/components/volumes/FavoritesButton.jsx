import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './FavoritesButton.scss';

const FavoritesButton = ({ favorite, volumeId, onClick }) => (
  <a
    href="#!"
    className={classNames(
      'secondary-content',
      'fb-favorite',
      { 'fb-favorite--on': favorite },
    )}
    onClick={() => onClick({ id: volumeId })}
  >
    <i className="material-icons">grade</i>
  </a>
);

FavoritesButton.propTypes = {
  favorite: PropTypes.bool,
};

FavoritesButton.defaultProps = {
  favorite: false,
};

export default FavoritesButton;

