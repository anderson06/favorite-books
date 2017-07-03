import FavoriteBooks from '../support/pageobjects/favorite-books.page';

module.exports = function when() {
  this.When(
    /^I set "([^"]*)?" to the search field$/,
    (bookName) => FavoriteBooks.searchInput.setValue(bookName)
  );

  this.When(
    /^I submit the search form$/,
    () => FavoriteBooks.searchForm.submitForm()
  );

  this.When(
    /^I click the next page button$/,
    () => FavoriteBooks.nextPage.click()
  );

  this.When(
    /^I click the previous page button$/,
    () => FavoriteBooks.previousPage.click()
  );
};
