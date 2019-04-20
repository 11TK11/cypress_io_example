const closeBoardBtn = 'input[value="Close"]';

export default class RightMenu {
    static get closeBoardBtn() {
        return closeBoardBtn;
    }

    static getMainMenu(option) {
        return `a:contains("${option}")`;
    }
}