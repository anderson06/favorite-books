import FavoriteBooks from '../pageobjects/favorite-books.page';

module.exports = function when() {
  this.When(
    /^I set "([^"]*)?" to the search field$/,
    bookName => FavoriteBooks.searchInput.setValue(bookName),
  );

  this.When(
    /^I submit the search form$/,
    () => FavoriteBooks.searchForm.submitForm(),
  );

  this.When(
    /^I click the next page button$/,
    () => FavoriteBooks.nextPage.click(),
  );

  this.When(
    /^I click the previous page button$/,
    () => FavoriteBooks.previousPage.click(),
  );

  this.When(
    /^I click the add to favorite icon on the (\d+)(st|nd|rd|th) result$/,
    (resultPosition) => {
      const index = resultPosition - 1;
      const favoritesButton = FavoriteBooks.favoritesButton(index);
      favoritesButton.click();
    },
  );

  this.When(
    /^I go to a search result page that has more than 10 results$/,
    () => FavoriteBooks.search('Game of Thrones'),
  );

  this.When(
    /^I reload the page$/,
    () => FavoriteBooks.open(),
  );

  this.When(
    /^I click on the (\d+)(st|nd|rd|th) result$/,
    (resultPosition) => {
      const index = resultPosition - 1;
      FavoriteBooks.results[index].click();
    },
  );
};
