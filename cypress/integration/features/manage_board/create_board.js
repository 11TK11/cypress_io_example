import Boards from "../../pages/board_pages/Boards";
import BoardPopup from "../../pages/board_pages/BoardPopup";
import Board from "../../pages/board_pages/Board";
import JsonCreator from "../../../support/utils/JsonCreator";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
var title;

When('I click on create a new board', () => {
    cy.get(Boards.createBoardBtn.selector)
      .contains(Boards.createBoardBtn.text)
      .click();
});

When('I set the following values:', (table) => {
    let data = JsonCreator.jsonFromTable(table);
    title = data.title; 
    BoardPopup.createBoard(data);
});

Then('I validate the board is created', () => {
    cy.get(Board.boarTitle).should('contain', title);
});