import React, { Component } from 'react';
import { arrayOf, shape } from 'prop-types';
import Volume from './Volume';
import Favorites from '../../services/favorites';

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
    const { volumes, onVolumeClick } = this.props;
    if (volumes.length === 0) {
      return null;
    }
    const listVolumes = volumes.map(volume => (
      <Volume
        key={volume.id}
        {...volume}
        favorite={this.favorites.isFavorite(volume)}
        onFavoriteButtonClick={this.handleFavoriteButtonClick}
        onClick={onVolumeClick}
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

