var localSelectors;

export class Search{
    
    visitSite(){
        cy.visit(Cypress.env("ALTERNATIVE_PATH"));
    }

    setSearch(querySearch){
        localSelectors = selectors.search;
        cy.get(localSelectors.id.search).click().type(querySearch)
    }

    goSearch(){
        localSelectors = selectors.search;
        cy.get(localSelectors.class.startSearch).click();
    }

    viewResults(){
        localSelectors = selectors.search;
        cy.get(localSelectors.class.existResults).should("exist");
    }

    nullResults(){
        localSelectors = selectors.search;
        cy.get(localSelectors.class.existResults).should("not.exist");
    }
}

export const navigation = new Search();
