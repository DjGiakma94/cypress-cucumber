var localSelectors

export class test_002{
    clickLogin(){
        localSelectors = selectors.test_002;
        cy.get(localSelectors.id.selectLogin ).click()
    }

    insertUsername(){
        localSelectors = selectors.test_002;
        cy.get(localSelectors.id.login).type("pluto")
    }

    insertPassword(){
        localSelectors = selectors.test_002;
        cy.get(localSelectors.id.selectPassword).type("pippo")
    }
}
        


export const navigation = new test_002();