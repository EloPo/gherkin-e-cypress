import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the home page", () => {
    cy.visit("/");
});

Given("I am on the product page", () => {
    cy.visit("/product/123");
});

Then("I should see the website logo", () => {
    cy.get(".logo").should("be.visible");
});

Then("I should see a navigation menu", () => {
    cy.get(".navigation-menu").should("be.visible");
});

When("I enter {string} in the search field", (searchTerm) => {
    cy.get("#search-input").type(searchTerm);
});

When("I click the search button", () => {
    cy.get("#search-button").click();
});

Then("I should see search results", () => {
    cy.get(".search-results").should("be.visible");
});

Then("the results should include {string}", (expectedProduct) => {
    cy.get(".search-results").contains(expectedProduct).should("be.visible");
});

When("I click the {string} button", (buttonText) => {
    cy.contains(buttonText).click();
});

Then("the cart should have {int} item", (expectedItemCount) => {
    cy.get(".cart-items").should("have.length", expectedItemCount);
});

Then("the cart total should be updated", () => {
    cy.get(".cart-total").should("not.be.empty");
});
