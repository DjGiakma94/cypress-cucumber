/// <reference types="cypress" />
import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import { navigation} from "../../../support/pom/testbook/test_001";


And("open first result", () => {
    navigation.addFirstResult()
})

And("open first menu", () => {
    navigation.addFirstMenu()
})
And("select size", () => {
    navigation.selectSize()
})

And("add item to cart", () => {
    navigation.addTocart()
})

Then("the sum of import is equal to total", () => {
    navigation.checkSum()
})