class Favorites {
  constructor() {
    this.favorites = [];
    this.onChanges = [];
  }

  subscribe(onChange) {
    this.onChanges.push(onChange);
  }

  inform() {
    // Utils.store(this.key, this.todos);
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

export default Favorites;

