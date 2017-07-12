import FavoriteBooks from '../support/pageobjects/favorite-books.page';

module.exports = function given() {
  this.Given(
    /^I open the main page$/,
    () => FavoriteBooks.open(),
  );

  this.Given(
    /^I'm on a search result page that has more than 10 results$/,
    () => FavoriteBooks.search('Game of Thrones'),
  );

  this.Given(
    /^I search for "([^"]*)?"$/,
    bookName => FavoriteBooks.search(bookName),
  );
};
