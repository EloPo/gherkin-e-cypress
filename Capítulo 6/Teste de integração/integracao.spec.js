import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
    cy.visit("/login");
});

When("I enter my username and password", () => {
    cy.get("#username").type("myusername");
    cy.get("#password").type("mypassword");
});

And("I click the login button", () => {
    cy.get("button[type='submit']").click();
});

Then("I should be redirected to the dashboard page", () => {
    cy.url().should("include", "/dashboard");
});

Then("I should see the welcome message", () => {
    cy.get(".welcome-message").should("contain", "Welcome, myusername!");
});
