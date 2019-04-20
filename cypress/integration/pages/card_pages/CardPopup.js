const rightMenuItem = 'span';
const checklistTitleTxt = '#id-checklist';
const addChecklistBtn = 'input[value="Add"]';
const addTaskBtn = 'input[value="Add"]';
const itemDesciption = '[placeholder="Add an item…"]';
const stopAddingItemsBtn = '.icon-lg.icon-close.dark-hover.cancel.js-cancel-checklist-item';
const checklistName = 'h3';
const checklistItem = 'span';

export default class CardPopup {
    static get rightMenuItem() {
        return rightMenuItem;
    }

    static get checklistName() {
        return checklistName;
    }

    static get checklistItem() {
        return checklistItem;
    }

    static createChecklist(checklistValues) {
        let fillChecklistInformation = {
            'title': () => {
                    cy.get(checklistTitleTxt)
                      .type(checklistValues.title);
                }
            };
        Object.keys(checklistValues).forEach(key => {
            fillChecklistInformation[key].call();
        });
        cy.get(addChecklistBtn).click();
    }
    
    static createTasks(listTasks) {console.log(listTasks);
        listTasks.forEach((task) => {console.log(task);
            let fillTaskInformation = {
                'Item': () => {
                        cy.get(itemDesciption)
                          .type(task.Item);
                    }
                };console.log(fillTaskInformation);
            Object.keys(task).forEach(key => {console.log(key);
                fillTaskInformation[key].call();
            });
            cy.get(addTaskBtn).click();
        });
        cy.get(stopAddingItemsBtn).click();
    }
}