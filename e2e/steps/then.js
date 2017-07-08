import FavoriteBooks from '../support/pageobjects/favorite-books.page';

module.exports = function then() {
  this.When(
    /^I expect to see some results about the book "([^"]*)?"$/,
    (bookName) => {
      FavoriteBooks.searchResults.waitForVisible();
      const searchResults = FavoriteBooks.searchResults.getText();
      expect(searchResults).to.include(bookName);
    },
  );

  this.When(
    /^I expect to see the next page of search results$/,
    () => FavoriteBooks.page(2).waitForVisible(),
  );

  this.When(
    /^I expect to see the same page of search results$/,
    () => FavoriteBooks.page(1).waitForVisible(),
  );

  this.When(
    /^I expect to see an icon that shows the (\d+)(st|nd|rd|th) result is( not)* one of my favorite books$/,
    (resultPosition, _, shouldNotBeFavorite) => {
      const index = parseInt(resultPosition) - 1;
      const favoritesButton = FavoriteBooks.favoritesButton(index);
      const classesList = favoritesButton.getAttribute('className').split(' ');

      if (shouldNotBeFavorite) {
        expect(classesList).to.not.include(FavoriteBooks.isFavoriteClassName);
      } else {
        expect(classesList).to.include(FavoriteBooks.isFavoriteClassName);
      }
    },
  );
};
