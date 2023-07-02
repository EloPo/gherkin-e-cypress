Feature: Integration
    Scenario: Logging in and accessing a protected page
        Given I am on the login page
        When I enter my username and password
        And I click the login button
        Then I should be redirected to the dashboard page
        And I should see the welcome message
