class Favorites {
  constructor() {
    this.favorites = [];
    this.onChanges = [];
  }

  subscribe(onChange) {
    this.onChanges.push(onChange);
  }

  inform() {
    //Utils.store(this.key, this.todos);
    this.onChanges.forEach(cb => cb());
  }

  add(favorite) {
    this.favorites = this.favorites.concat(favorite);
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
      return;
    } else {
      this.add(favorite);
    }
  }
}

export default Favorites;

