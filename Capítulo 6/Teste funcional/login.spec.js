import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
    cy.visit("/login");
});

When("I enter valid credentials", () => {
    cy.get("#username").type("myusername");
    cy.get("#password").type("mypassword");
});

When("I enter invalid credentials", () => {
    cy.get("#username").type("invalidusername");
    cy.get("#password").type("invalidpassword");
});

When("I click the login button", () => {
    cy.get("#login-button").click();
});

Then("I should be logged in", () => {
    cy.get(".user-profile").should("be.visible");
});

Then("I should see an error message", () => {
    cy.get(".error-message").should("be.visible");
});
