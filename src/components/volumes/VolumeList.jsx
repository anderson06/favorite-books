import React, { Component } from 'react';
import { arrayOf, shape } from 'prop-types';
import Volume from './Volume';
import Favorites from '../../models/favorites';

class VolumeList extends Component {
  constructor() {
    super();
    this.favorites = new Favorites();
    this.handleFavoriteButtonClick = this.handleFavoriteButtonClick.bind(this);
  }

  componentDidMount() {
    this.favorites.subscribe(() => this.forceUpdate());
  }

  handleFavoriteButtonClick(favorite) {
    this.favorites.toggle(favorite);
  }

  render() {
    if (this.props.volumes.length === 0) {
      return null;
    }
    const listVolumes = this.props.volumes.map(volume => (
      <Volume
        key={volume.id}
        {...volume}
        favorite={this.favorites.isFavorite(volume)}
        onFavoriteButtonClick={this.handleFavoriteButtonClick}
        onClick={this.props.onVolumeClick}
        searchQuery={this.props.searchQuery}
      />
    ));
    return (
      <ul className="fb-volumes collection">
        {listVolumes}
      </ul>
    );
  }
}

VolumeList.propTypes = {
  volumes: arrayOf(shape(Volume.propTypes)),
};

VolumeList.defaultProps = {
  volumes: [],
};

export default VolumeList;

