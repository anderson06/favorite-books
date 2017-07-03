class FavoriteBooks {
  get searchInput() {
    return $('#search');
  }

  get searchInput() {
    return $('#search');
  }

  get searchForm() {
    return $('#search-form');
  }

  get searchResults() {
    return $('.fb-volumes');
  }

  open() {
    browser.url('/');
  }
}

export default new FavoriteBooks();
