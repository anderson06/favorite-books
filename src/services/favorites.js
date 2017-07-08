import store from '../utilities/store';

class Favorites {
  constructor() {
    this.favorites = store(Favorites.key) || [];
    this.onChanges = [];
  }

  subscribe(onChange) {
    this.onChanges.push(onChange);
  }

  inform() {
    store(Favorites.key, this.favorites);
    this.onChanges.forEach(cb => cb());
  }

  add(favorite) {
    this.favorites = this.favorites.concat(favorite);
    this.inform();
  }

  remove(favorite) {
    this.favorites = this.favorites
      .filter(f => f.id !== favorite.id);
    this.inform();
  }

  isFavorite(volume) {
    if (!volume || !volume.id) {
      return false;
    }
    return this.favorites
      .filter(favorite => favorite.id === volume.id)
      .length > 0;
  }

  all() {
    return this.favorites.slice();
  }

  toggle(favorite) {
    if (this.isFavorite(favorite)) {
      this.remove(favorite);
    } else {
      this.add(favorite);
    }
  }
}

Favorites.key = 'FAVORITES';

export default Favorites;

