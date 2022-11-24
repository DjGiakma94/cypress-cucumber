var localSelectors;

export class Cart{
 

    selectFirstItem(){
        localSelectors = selectors.cart;
        cy.get(localSelectors.class.selectFirstItem).click()
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
}

export const navigation = new Cart();