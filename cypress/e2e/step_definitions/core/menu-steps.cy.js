/// <reference types="cypress" />

import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("open the site", () => {
    cy.visit(Cypress.env("ALTERNATIVE_PATH"));
    //navigator.openSite();
});
