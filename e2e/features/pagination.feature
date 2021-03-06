Feature: Books Search Pagination
  As a user
  I want to paginate the search results

  Scenario: Paginate to next page
    Given I'm on a search result page that has more than 10 results
    When  I click the next page button
    Then  I expect to see the next page of search results

  Scenario: Paginate to previous page
    Given I'm on a search result page that has more than 10 results
    When  I click the next page button
    And   I click the previous page button
    Then  I expect to see the same page of search results

