Cypress.Commands.add("loadFixtures", () => {
    cy.fixture("selectors").then((selectors) => {
      globalThis.selectors = selectors;
    });
  
    cy.fixture("dataEntry").then((dataEntry) => {
      globalThis.dataEntry = dataEntry;
    });
  });
  
Cypress.Commands.add("ClickNextPage", () => {
    cy.get("#pnnext")
      .contains("Next")
      .then((ele) => {
        let counter = 0;
        while (ele.length > 0) {
          cy.get("#pnnext").contains("Next").click();
          counter++;
          cy.log("Page n." + counter);
          cy.wait(Cypress.env("TimeShort"));
          if (counter == 8) break;
        }
      });
});



  