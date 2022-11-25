Feature: cart
        
        @CART_001
        Scenario: open the cart
            Given open the site
            When open the cart
            Then the cart is opened

        @CART_002
        Scenario: add items to cart
            Given open the site
            When add the "1" item to cart
            And open the cart
            Then the cart has the "1" item

        @CART_003
        Scenario: empty Cart
            Given open the site
            When add the "1" item to cart
            And open the cart
            And empty cart
            Then the cart is empty

        @CART_004
        Scenario: add quantity of item
            Given open the site
            When add the "1" item to cart
            And open the cart
            And increase the quantity of "1" item
            And click on update
            Then the quantity of "1" item is different than 1

        