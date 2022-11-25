/// <reference types="cypress" />

import { navigation } from "../../../support/pom/core/search";
import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("open the site", () => {
    navigation.visitSite()
});

When("search {string}", (querySearch) => {
    navigation.setSearch(querySearch)
    navigation.goSearch()
});

Then("view the search result", () => {
    navigation.viewResults()
});

Then("the search result is null", () => {
    navigation.nullResults()
})