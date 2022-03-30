import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('Go to my page', () => {
    //cy.visit(Cypress.env('url'));
    cy.visit('/')
    //cy.logInfo("Cypres is Awesome 1..");
    cy.screenshot();

   // cy.attachScreenshot();
    //cy.logInfo("Cypres is Awesome 2..");
    cy.screenshot();

    //cy.logInfo("Cypres is Awesome 3..");
    cy.screenshot();
})