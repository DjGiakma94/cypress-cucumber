var localSelectors;

export class Cart{
 

    routeItems(selector){
        cy.get(selector).click();
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.addToChar).click()
    }

    openCart(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.openCart).click();
    }

    checkCart(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.checkCart).contains("Cart");
    }

    cartHasItem(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.id.cartHasItem).should("exist")
    }

    emptyCart(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.emptyCart).click();
    }

    cartEmpty(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.id.cartHasItem).should('not.exist')
    }

    addQuantity(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.addQuantity).click().type("2");
    }

    clickOnUpadate(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.id.cartUpdate).click()
    }

    checkQuantity(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.addQuantity).should('not.have.value', '1');
    }
}

export const navigation = new Cart();