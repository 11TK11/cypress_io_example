import RandomCreator from "../../support/utils/RandomCreator";
import Boards from "../pages/board_pages/Boards";
import Card from "../pages/card_pages/Card";
import { Given } from "cypress-cucumber-preprocessor/steps";

let boardName = RandomCreator.boardName();
let listName = RandomCreator.listName();
let cardName = RandomCreator.cardName();

Given('I create a card with default values', () => {
    cy.api_request('POST', '/boards/', `"name": "${boardName}", "defaultLists": "false"`)
      .then((response) => {
        let boardId = response.body.id;
        cy.api_request('POST', '/lists',`"idBoard":"${boardId}", "name":"${listName}"`)
          .then((response) => {
            let listId = response.body.id;
            cy.api_request('POST', '/cards',`"idList":"${listId}", "name":"${cardName}"`);
          });
    }); 
});

Given('I search for the created card', () => {
    cy.get(Boards.getBoardTitle(boardName))
      .click();
    cy.get(Card.cardTitle).contains(cardName).parent('div').parent('a')
      .click();
});