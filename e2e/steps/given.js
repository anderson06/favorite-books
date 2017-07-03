import FavoriteBooks from '../support/pageobjects/favorite-books.page';

module.exports = function given() {
  this.Given(
    /^I open the main page$/,
    () => FavoriteBooks.open()
  );

  this.Given(
    /^I'm on a search result page that has more than 10 results$/,
    () => {
      FavoriteBooks.open();
      FavoriteBooks.searchInput.setValue('Game of Throne');
      FavoriteBooks.searchForm.submitForm();
      FavoriteBooks.searchResults.waitForExist();
    }
  );
};
