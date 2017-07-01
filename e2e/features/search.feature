Feature: Books Search
  As a user
  In order to serch for books
  I want to search for a book using a key word and see the results in the same page

  Scenario: Search with key word and see results
    Given I open the main page
    When  I set "A Game of Thrones" to the search field
    And   I submit the search form
    Then  I expect to see some results about the book "A Game of Thrones"
