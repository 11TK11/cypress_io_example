const cardTitleTxtArea = 'textarea[placeholder="Enter a title for this card…"]';
const addCardBtn = 'input[value="Add Card"]';
const cardLocation = 'a.open-card-composer.js-open-card-composer';
const cardTitle = 'span.list-card-title';
const list = 'h2';

export default class Card {
    
    static get list() {
        return list;
    }
    
    static get cardTitleTxtArea() {
        return cardTitleTxtArea;
    }

    static get addCardBtn() {
        return addCardBtn;
    }

    static get cardLocation() {
        return cardLocation;
    }

    static get cardTitle() {
        return cardTitle;
    }

    static createCard(cardValues) {
        let fillCardformation = {
            'title': () => {
                    cy.get(cardTitleTxtArea)
                      .type(cardValues.title);
                }
            };
        Object.keys(cardValues).forEach(key => {
            fillCardformation[key].call();
        });
        cy.get(addCardBtn).click();
    }
}