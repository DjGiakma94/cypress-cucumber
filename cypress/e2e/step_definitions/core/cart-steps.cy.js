/// <reference types="cypress" />

import { navigation } from "../../../support/pom/core/cart";
import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";


When("add the {string} item to cart", (querySearch) => {
    navigation.selectFirstItem()
});

And("open the cart", () => {
    navigation.openCart()
});

Then("the cart is opened", () => {
    navigation.checkCart()
});

Then("the cart has the {string} item", () => {
    navigation.cartHasItem()
})