import Card from "../../pages/card_pages/Card";
import JsonCreator from "../../../support/utils/JsonCreator";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

let title;

When('I add a card in the {string} list', (listName) => {
    cy.get(Card.list).contains(listName).parent('div').parent('div')
      .children(Card.cardLocation).click();
    // //h2[text()="To Do"]//parent::div//parent::div//a[contains(@class,"open-card-composer js-open-card-composer")]')
});

When('I set the following values:', (table) => {
    let data = JsonCreator.jsonFromTable(table);
    title = data.title;
    Card.createCard(data);
});

Then('I validate the card is created', () => {
    cy.get(Card.cardTitle).should('contain', title);
});

When('I move the created card to {string} list', (arriveList) => {
    cy.move_card(title, arriveList);
});