/// <reference types="cypress" />

import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import { navigation } from "../../../support/pom/core/menu";


function routeMenu(menuItem) {
    switch (menuItem) {
        case "HOME":
            navigation.routeMenu(".nav-pills > :nth-child(1)");
            break;
        case "APPAREL & ACCESSORIES":
            navigation.routeMenu(".nav-pills > :nth-child(2)");
            break;
        case "MAKEUP":
            navigation.routeMenu(".nav-pills > :nth-child(3)");
            break;
        case "SKINCARE":
            navigation.routeMenu(".nav-pills > :nth-child(4)");
            break;
        case "FRAGRANCE":
            navigation.routeMenu(".nav-pills > :nth-child(5)");
            break;
        case "MEN":
            navigation.routeMenu(".nav-pills > :nth-child(6)");
            break;
        case "HAIR CARE":
            navigation.routeMenu(".nav-pills > :nth-child(7)");
            break;
        case "BOOKS":
            navigation.routeMenu(".nav-pills > :nth-child(8)");
            break;
        default:
            cy.log("routeMenu: Case is not defined");
    }
}


When("click on the {string} menu page", (menuItem) => {
    routeMenu(menuItem);
});

Then("{string} menu is selected", (menuItem) => {
    navigation.isSelected(menuItem);
});