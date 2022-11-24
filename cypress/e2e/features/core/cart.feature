Feature: cart
        

        Scenario: open the cart
            Given open the site
            When open the cart
            Then the cart is opened

        Scenario: add items to cart
            Given open the site
            When add the "1" item to cart
            And open the cart
            Then the cart has the "1" item

        Scenario: Empty Cart
            Given open the site
            When add the "1" item to cart
            And open the cart
            And empty cart
            Then the cart is empty