
export class Menu{
    
    routeMenu(selectors){
        cy.get(selectors).click();
    }

    isSelected(menuItem){
        let selector = ".current > a";

        if(menuItem == "HOME"){selector = ".active.menu_home";}
        
        cy.get(selector).invoke("text").then(val =>{
            expect(val.toUpperCase().trim()).to.be.equals(menuItem.trim());
        });
    }
}


export const navigation = new Menu();
