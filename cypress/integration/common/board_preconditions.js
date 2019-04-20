import RandomCreator from "../../support/utils/RandomCreator";
import JsonCreator from "../../support/utils/JsonCreator";
import Convertor from "../../support/utils/Convertor";
import Boards from "../pages/board_pages/Boards";
import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

let boardName;

Given('I create a board with required values', () => {
  boardName = RandomCreator.boardName();
  cy.api_request('POST', '/boards/', `"name": "${boardName}"`);    
});

Given('I create a board with the following values:', (table) => {
  let dataJson, data;
  dataJson = JsonCreator.jsonFromTable(table);
  boardName = dataJson.name;
  data = Convertor.jsonToApiBody(dataJson);
  cy.api_request('POST', '/boards/', data); 
});

Given('I search for the created board', () => {
  cy.get(Boards.getBoardTitle(boardName))
    .click();
});

Then('I validate the created board doesn´t exist', () => {
  cy.get(Boards.getBoardTitle(boardName)).should('not.exist');
});