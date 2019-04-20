import RightMenu from "../../pages/RightMenu";
import DeleteBoard from "../../pages/board_pages/DeleteBoard";
import { When } from 'cypress-cucumber-preprocessor/steps';
import { Then } from 'cypress-cucumber-preprocessor/steps';

When('I click option {string} on right menu', (option) => {
  cy.get(RightMenu.getMainMenu(option))
    .click();
});

When('I click on close button in the "Close Board" popup', () => {
  cy.get(RightMenu.closeBoardBtn)
    .click();
});

When('I click on {string} link on "Close" page', (link) => {
  cy.get(DeleteBoard.optionLink).contains(link)
    .click();
});

When('I click on delete button in the "Delete Board" popup', () => {
  cy.get(DeleteBoard.deleteBtnPopup)
    .click();
});

Then('I validate the {string} title message exist on "Delete" page', (message) => {
  cy.get(DeleteBoard.tittleMessage).should('contain', message);
});

Then('I validate the {string} description message exist on "Delete" page', (message) => {
  cy.get(DeleteBoard.descriptionMessage).should('contain', message);
});
