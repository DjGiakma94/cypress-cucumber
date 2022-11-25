/// <reference types="cypress" />

import { Before, Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import { navigation} from "../../../support/pom/testbook/test_002";

When("click on the login page", () => {
    navigation.clickLogin()
})

And("insert wrong username", () => {
    navigation.insertUsername()
})

And("insert wrong password", () => {
    navigation.insertPassword()
}) 

Then("error message for login", () => {
    
})