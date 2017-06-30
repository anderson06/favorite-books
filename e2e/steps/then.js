module.exports = function then() {
  this.When(
    /^I expect to see some results about the book "([^"]*)?"$/,
    (bookName, done) => checkContainsText('element', '.result', false, bookName, done)
  );
};
