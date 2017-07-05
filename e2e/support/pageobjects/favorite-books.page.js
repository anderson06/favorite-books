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

  get nextPage() {
    return $('#next-page');
  }

  get previousPage() {
    return $('#previous-page');
  }

  get favoriteIcon() {
    return $('#previous-page');
  }

  get isFavoriteClassName() {
    return 'fb-is-favorite';
  }

  page(index) {
    return $(`.fb-page-${index}`);
  }

  result(index) {
    return $(`'.fb-volume-${index}`);
  }

  open() {
    browser.url('/');
  }
}

export default new FavoriteBooks();
