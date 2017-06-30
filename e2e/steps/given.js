import openWebsite from '../support/action/openWebsite';

module.exports = function given() {
  this.Given(
    /^I open the main page$/,
    (done) => openWebsite('site', '/', done)
  );
};
