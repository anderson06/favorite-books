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

  page(index) {
    return $(`.fb-page-${index}`);
  }

  open() {
    browser.url('/');
  }
}

export default new FavoriteBooks();
