import checkContainsText from '../support/check/checkContainsText';
import waitForVisible from '../support/action/waitForVisible';

module.exports = function then() {
  this.When(
    /^I expect to see some results about the book "([^"]*)?"$/,
    (bookName, done) => {
      waitForVisible('.fb-volumes', false, done);
      checkContainsText('element', '.fb-volume', false, bookName, done);
    }
  );
};
