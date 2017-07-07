import React from 'react';
import PropTypes from 'prop-types';
import FavoritesButton from './FavoritesButton';
import './Volume.scss';

const Volume = (props) => {
  let image = (
    <div className="placeholder circle valign-wrapper center-align teal lighten-2">
      <i className="material-icons fb-thumbnail-icon">library_books</i>
    </div>
  );
  if (props.thumbnail) {
    image = <img src={props.thumbnail} alt="book cover" className="circle" />;
  }
  return (
    <li className="fb-volume collection-item avatar">
      {image}
      <span className="title truncate">{props.title}</span>
      <p className="fb-truncate">{props.description}</p>
      <FavoritesButton
        onClick={props.onFavoriteButtonClick}
        favorite={props.favorite}
        volumeId={props.id}
      />
    </li>
  );
};

Volume.propTypes = {
  onFavoriteButtonClick: PropTypes.func,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  favorite: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
};

Volume.defaultProps = {
  onFavoriteButtonClick: () => {},
  favorite: false,
  description: '',
  thumbnail: '',
  title: '',
  id: '',
};

export default Volume;
