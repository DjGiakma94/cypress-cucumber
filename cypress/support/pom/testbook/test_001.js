var localSelectors

export class test_001{
    
    
    checkSum(){
        localSelectors = selectors.test_001;
        cy.get(localSelectors.id.subTotal).invoke("text").then((text) => {
            let num1 = text.replace("€", "").replace("$","")
            cy.get(localSelectors.id.rate).invoke("text").then((text2) => {
                let num2= text2.replace("€", "").replace("$","")
                let sum = Number(num1) + Number(num2)
                let finalSum= "$"+(sum.toFixed(2))
                cy.get(localSelectors.class.total).invoke("text").should("eq", finalSum)
            })
        })
    }

    addFirstResult(){
        localSelectors = selectors.test_001;
        cy.get(localSelectors.id.addFirstResult).click()
    }

    addFirstMenu(){
        localSelectors = selectors.test_001;
        cy.get(localSelectors.class.addFirstMenu).click()
    }

    selectSize(){
        localSelectors = selectors.test_001;
        cy.get(localSelectors.id.selectSize).click()
    }

    addTocart(){
        localSelectors = selectors.search;
        cy.get(localSelectors.class.char).click()
    }
}
        


export const navigation = new test_001();