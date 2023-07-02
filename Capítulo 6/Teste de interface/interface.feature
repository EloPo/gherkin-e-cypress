Feature: Interface
    Scenario: Navigating to the home page
        Given I am on the home page
        Then I should see the website logo
        And I should see a navigation menu

    Scenario: Searching for a product
        Given I am on the home page
        When I enter "cypress" in the search field
        And I click the search button
        Then I should see search results
        And the results should include "Cypress Testing Tool"

    Scenario: Adding a product to the cart
        Given I am on the product page
        When I click the "Add to Cart" button
        Then the cart should have 1 item
        And the cart total should be updated
