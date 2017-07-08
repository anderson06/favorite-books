/* eslint class-methods-use-this: "off" */

class FavoriteBooks {
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
    return 'fb-favorite--on';
  }

  get results() {
    return $$('.fb-volume');
  }

  favoritesButton(index) {
    return $$('.fb-volume')[index].$('.fb-favorite');
  }

  page(index) {
    return $(`.fb-page-${index}`);
  }

  open() {
    browser.url('/');
  }

  search(searchQuery) {
    this.open();
    this.searchInput.waitForExist();
    this.searchInput.setValue(searchQuery);
    this.searchForm.submitForm();
    this.searchResults.waitForExist();
  }
}

export default new FavoriteBooks();
