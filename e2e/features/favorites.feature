Feature: Manage Favorites
  As a user
  I want to add a book to favorites

  Scenario: Add 1st result to favorites
    Given I'm on a search result page that has more than 10 results
    When  I click the add to favorite icon on the 1st result
    Then  I expect to see an icon that shows the 1st result is one of my favorite books

  Scenario: Remove 1st result from favorites
    Given I'm on a search result page that has more than 10 results
    When  I click the add to favorite icon on the 1st result
    And   I click the add to favorite icon on the 1st result
    Then  I expect to see an icon that shows the 1st result is not one of my favorite books

  Scenario: Store 1st result to favorites
    Given I'm on a search result page that has more than 10 results
    When  I click the add to favorite icon on the 1st result
    And   I reload the page
    And   I go to a search result page that has more than 10 results
    Then  I expect to see an icon that shows the 1st result is one of my favorite books
