import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FavoritesButton from './FavoritesButton';
import * as diacritics from 'diacritics';
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

  highlight(query, text) {
    if (!query || !text) {
      return text;
    }
    const searchText = diacritics.remove(text.toLowerCase())
    const searchQuery = diacritics.remove(query.toLowerCase())
    const start = searchText.indexOf(searchQuery);
    const end = start + query.length;
    if (start === -1) {
      return text;
    }
    return (
      <span>
        {text.substring(0, start)}
        <span className="highlight">{text.substring(start, end)}</span>
        {text.substring(end, text.length)}
      </span>
    );
  }

  render() {
    let image = (
      <div className="placeholder circle valign-wrapper center-align teal lighten-2">
        <i className="material-icons fb-thumbnail-icon">library_books</i>
      </div>
    );
    if (this.props.thumbnail) {
      image = <img src={this.props.thumbnail} alt="book cover" className="circle" />;
    }
    return (
      <li
        className="fb-volume collection-item avatar"
        onClick={this.handleClick}
      >
        {image}
        <span className="title truncate">{this.highlight(this.props.searchQuery, this.props.title)}</span>
        <p className="fb-truncate fb-description">{this.highlight(this.props.searchQuery, this.props.description)}</p>
        <FavoritesButton
          onClick={this.props.onFavoriteButtonClick}
          favorite={this.props.favorite}
          volumeId={this.props.id}
        />
      </li>
    );
  }
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
