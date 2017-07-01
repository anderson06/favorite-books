import React from 'react';
import PropTypes from 'prop-types';

const Volume = ({id, thumbnail, title, description}) => {
  console.log(id);
  return (
    <li
      key={id}
      className="fb-volume collection-item avatar"
    >
      <img src={thumbnail} className="circle" />
      <span className="title">{title}</span>
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
