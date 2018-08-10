/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://cps-render-prod.elb.tnl-prod.ntch.co.uk/edition/news/house-of-fraser-calls-in-administrators-kr997tnpx')
  });

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.wait(10000);

    //cy.contains('Comments (');
     cy.get('iframe').then($iframe => {
       var b = $iframe.contents().find("body");
       return cy.wrap(b).contains('Comments').should('be.visible');
     });
  });
});
