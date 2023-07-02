import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I have a valid API token", () => {
    // Set the API token as a Cypress environment variable
    Cypress.env("apiToken", "YOUR_API_TOKEN");
});

When("I make a GET request to {string}", (url) => {
    cy.request({
        method: "GET",
        url: url,
        headers: {
            Authorization: `Bearer ${Cypress.env("apiToken")}`,
        },
    }).as("apiResponse");
});

Then("the response status should be {int}", (statusCode) => {
    cy.get("@apiResponse").its("status").should("equal", statusCode);
});

Then("the response body should contain {string}", (expectedContent) => {
    cy.get("@apiResponse").its("body").should("contain", expectedContent);
});
