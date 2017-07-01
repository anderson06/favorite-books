import React from 'react';
import PropTypes from 'prop-types';
import './Volume.scss';

const Volume = ({id, thumbnail, title, description}) => {
  let image = (
    <div className="circle valign-wrapper center-align teal lighten-2">
      <i className="material-icons fb-thumbnail-icon">library_books</i>
    </div>
  );
  if (thumbnail) {
    image = <img src={thumbnail} className="circle" />
  }
  return (
    <li
      key={id}
      className="fb-volume collection-item avatar"
    >
      {image}
      <span className="title truncate">{title}</span>
      <p className="fb-truncate">{description}</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a>
    </li>
  );
};

Volume.propTypes = {
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Volume;
