const titleTxt = 'input[placeholder="Add board title"]';
const privacyBtn = '.subtle-chooser-trigger.unstyled-button.vis-chooser-trigger';
const privacyOption = 'span';
const privacyPublicOption = 'input[value="Yes, Make Board Public"]';
const boardForm = '.create-board-form';

export default class BoardPopup {
    
    static get titleTxt() {
        return titleTxt;
    }

    static get privacyBtn() {
        return privacyBtn;
    }

    static get privacyOption() {
        return privacyOption;
    }

    static get privacyPublicOption() {
        return privacyPublicOption;
    }

    static get boardForm() {
        return boardForm;
    }

    createBoard(boarValues) {
        let fillBoardInformation = {
            'title': () => {
                cy.get(titleTxt).type(boarValues.title);
            },
            'privacy': () => {
                cy.get(privacyBtn).click();
                cy.get(privacyOption)
                  .contains(boarValues.privacy).click();
                if(boarValues.privacy === "Public") {
                    cy.get(privacyPublicOption).click();
                }
            }
        };
        Object.keys(boarValues).forEach(key => {
            fillBoardInformation[key].call();
        });
        cy.get(boardForm).submit();
    }
}