@wip
Feature: Highlight search result
  As a user
  In order to improve my search experience
  I want to see my search highlightes in the search results

  Scenario: Highlight search result
    Given I search for "A Game of Thrones"
    Then  I expect to see some highlights containing "A Game of Thrones"

