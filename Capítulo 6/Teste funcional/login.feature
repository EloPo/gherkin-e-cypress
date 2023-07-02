Feature: Login
    Scenario: Successful login
        Given I am on the login page
        When I enter valid credentials
        And I click the login button
        Then I should be logged in

    Scenario: Failed login
        Given I am on the login page
        When I enter invalid credentials
        And I click the login button
        Then I should see an error message
