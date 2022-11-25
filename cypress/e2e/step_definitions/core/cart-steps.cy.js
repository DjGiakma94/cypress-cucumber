/// <reference types="cypress" />

import { navigation } from "../../../support/pom/core/cart";
import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

function routeItems(selectItem) {
    switch (selectItem) {
        case "1":
            navigation.routeItems("#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img");
            break;
        case "3":
            navigation.routeItems("#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > :nth-child(1) > img");
            break;
    }
}

When("add the {string} item to cart", (selectItem) => {
    routeItems(selectItem)
});

And("open the cart", () => {
    navigation.openCart()
});

And("empty cart", () => {
    navigation.emptyCart()
})

And("increase the quantity of {string} item", () => {
    navigation.addQuantity()
})

And("click on update", () => {
    navigation.clickOnUpadate()
})

Then("the quantity of {string} item is different than 1", () => {
    navigation.checkQuantity()
})

Then("the cart is opened", () => {
    navigation.checkCart()
});

Then("the cart has the {string} item", () => {
    navigation.cartHasItem()
})

Then("the cart is empty", () => {
    navigation.cartEmpty()
})