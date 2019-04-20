import CardPopup from "../../pages/card_pages/CardPopup";
import JsonCreator from "../../../support/utils/JsonCreator";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

let title;
let checklistItems;
When('I add {string} to card', (item) => {
    cy.get(CardPopup.rightMenuItem).contains(item).click();
});

When('I set the following values:', (table) => {
    let data = JsonCreator.jsonFromTable(table);
    title = data.title;
    CardPopup.createChecklist(data);
});

When('I add the following items to the checklist:', (table) => {
    let data = JsonCreator.jsonArrayFromColumn(table)
    checklistItems = data;
    CardPopup.createTasks(data);
});

Then('I validate the checklist is created', () => {
    cy.get(CardPopup.checklistName).contains(title).should('exist');
    checklistItems.forEach(element => {
        cy.get(CardPopup.checklistItem).contains(element.Item).should('exist');
    });
});