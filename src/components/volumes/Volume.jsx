import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavoritesButton from './FavoritesButton';
import updateProtocol from '../../utilities/updateProtocol';
import highlight from '../../utilities/highlight';
import './Volume.scss';

class Volume extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.onClick) {
      this.props.onClick({ id: this.props.id });
    }
  }

  render() {
    let image = (
      <div className="placeholder circle valign-wrapper center-align teal lighten-2">
        <i className="material-icons fb-thumbnail-icon">library_books</i>
      </div>
    );
    if (this.props.thumbnail) {
      image = (
        <img
          src={updateProtocol(this.props.thumbnail)}
          alt="book cover"
          className="fb-volume-cover"
        />
      );
    }
    return (
      <li
        className="fb-volume collection-item avatar"
        onClick={this.handleClick}
      >
        {image}
        <span className="title truncate">
          {highlight(this.props.searchQuery, this.props.title)}
        </span>
        <p className="fb-truncate fb-description">
          {highlight(this.props.searchQuery, this.props.description)}
        </p>
        <FavoritesButton
          onClick={this.props.onFavoriteButtonClick}
          favorite={this.props.favorite}
          volumeId={this.props.id}
        />
      </li>
    );
  }
}

Volume.propTypes = {
  onFavoriteButtonClick: PropTypes.func,
  searchQuery: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
};

Volume.defaultProps = {
  onFavoriteButtonClick: () => {},
  onClick: () => {},
  favorite: false,
  searchQuery: '',
  description: '',
  thumbnail: '',
  title: '',
  id: '',
};

export default Volume;
