import React from 'react';
import PropTypes from 'prop-types';
import FavoritesButton from './FavoritesButton';
import './Volume.scss';

const Volume = ({ thumbnail, title, description }) => {
  let image = (
    <div className="placeholder circle valign-wrapper center-align teal lighten-2">
      <i className="material-icons fb-thumbnail-icon">library_books</i>
    </div>
  );
  if (thumbnail) {
    image = <img src={thumbnail} alt="book cover" className="circle" />;
  }
  return (
    <li
      className={'fb-volume collection-item avatar'}
    >
      {image}
      <span className="title truncate">{title}</span>
      <p className="fb-truncate">{description}</p>
      <FavoritesButton />
    </li>
  );
};

Volume.propTypes = {
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

Volume.defaultProps = {
  description: '',
  thumbnail: '',
  title: '',
};

export default Volume;
