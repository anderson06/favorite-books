import submitForm from '../support/action/submitForm';
import clickElement from '../support/action/clickElement';
import setInputField from '../support/action/setInputField';

module.exports = function when() {
  this.When(
    /^I set "([^"]*)?" to the search field$/,
    (bookName, done) => setInputField('set', bookName, "#search", done)
  );

  this.When(
    /^I submit the search form$/,
    (done) => submitForm('#search-form', done)
  );
};
