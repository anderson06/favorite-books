Feature: Book Info
  As a user
  I want to click on a book and see more info

  Scenario: Click on a book and see more info
    Given I'm on a search result page that has more than 10 results
    When  I click on the 1st result
    Then  I expect to see more info about the book

