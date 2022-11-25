Feature: First testbook

        @FIRST_001
        Scenario: verify the sum of imports
            Given open the site
            When add the "1" item to cart
            And click on the "HOME" menu page
            And add the "3" item to cart
            Then the sum of import is equal to total


        @FIRST_002
        Scenario: choose size and add shoes to cart
            Given open the site
            When click on the "APPAREL & ACCESSORIES" menu page 
            And open first menu
            And open first result
            And select size
            And add item to cart
            Then the cart has the "1" item


