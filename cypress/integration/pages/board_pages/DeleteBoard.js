const optionLink = 'a';
const deleteBtnPopup = 'input[value="Delete"]';
const tittleMessage = 'div h1';
const descriptionMessage = '.big-message > p';

export default class DeleteBoard {
    
    static get optionLink() {
        return optionLink;
    }

    static get deleteBtnPopup() {
        return deleteBtnPopup;
    }

    static get tittleMessage() {
        return tittleMessage;
    }

    static get descriptionMessage() {
        return descriptionMessage;
    }
}