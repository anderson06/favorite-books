@wip
Feature: Add Book to Favorites
  As a user
  I want to add a book to favorites

  Scenario: Favorite icon on 1st result
    Given I'm on a search result page that has more than 10 results
    When  I click the add to favorite icon on the 1st result
    Then  I expect to see an icon that shows the 1st result is one of my favorite books

