import Navigation from "../pages/Navigation";
import { When } from "cypress-cucumber-preprocessor/steps";

When('I go {string} page', (option) => {
    cy.visit(Navigation.root);
    cy.get(Navigation.leftMenuItem).contains(option)
      .click();
});