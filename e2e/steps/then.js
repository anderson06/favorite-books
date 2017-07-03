import checkContainsText from '../support/check/checkContainsText';
import waitForVisible from '../support/action/waitForVisible';
import FavoriteBooks from '../pageobjects/favorite-books.page';

module.exports = function then() {
  this.When(
    /^I expect to see some results about the book "([^"]*)?"$/,
    (bookName, done) => {
      FavoriteBooks.searchResults.waitForVisible()
      const searchResults = FavoriteBooks.searchResults.getText();
      expect(searchResults).to.include(bookName);
    }
  );

  this.When(
    /^I expect to see the next page of search results$/,
    (done) => FavoriteBooks.page(2).waitForVisible()
  );
};
