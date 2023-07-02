Feature: API
    Scenario: Getting user information
        Given I have a valid API token
        When I make a GET request to "/users/1"
        Then the response status should be 200
        And the response body should contain "John Doe"
        And the response body should contain "john.doe@example.com"
