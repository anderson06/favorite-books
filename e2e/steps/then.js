import FavoriteBooks from '../support/pageobjects/favorite-books.page';

module.exports = function then() {
  this.When(
    /^I expect to see some results about the book "([^"]*)?"$/,
    (bookName) => {
      FavoriteBooks.searchResults.waitForVisible()
      const searchResults = FavoriteBooks.searchResults.getText();
      expect(searchResults).to.include(bookName);
    }
  );

  this.When(
    /^I expect to see the next page of search results$/,
    () => FavoriteBooks.page(2).waitForVisible()
  );

  this.When(
    /^I expect to see the same page of search results$/,
    () => FavoriteBooks.page(1).waitForVisible()
  );

  this.When(
    /^I expect to see an icon that shows the (\d+)(st|nd|rd|th) result is one of my favorite books$/,
    (resultNumber) => {
      const element = FavoriteBooks.result(resultNumber);
      const classesList = element.getAttribute('className').split(' ');
      expect(classesList).to.include(FavoriteBooks.isFavoriteClassName);
    }
  );
};
