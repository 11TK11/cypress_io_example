const createBoardBtn = {selector: '.bold > span', text: 'Create new board'};

export default class Boards {
    
    static get createBoardBtn() {
        return createBoardBtn;
    } 

    static getBoardTitle(title) {
        return `div[title="${title}"]`;
    }
}