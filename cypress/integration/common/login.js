import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open homepage', () => {
  cy.visit("/")
})

Then('I see homepage',()=>{
    cy.url().should('include','/fr/default.aspx')
})
