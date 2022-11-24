/// <reference types="cypress" />

import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
var localSelectors;
var localDataEntry;

before(() => {
    cy.log("Execute before stepß");
    localSelectors = selectors.test_003;
    localDataEntry = dataEntry.test_003;
});

When("search {string}", (querySearch) => {
    cy.get(localSelectors.id.search).type(querySearch),
    cy.get(localSelectors.class.startSearch).click();
});

Then("view the search result", () => {
    cy.get(localSelectors.class.addToChar).click().should("exist");
});