import Chance from "chance";
const board = 'Board';
const list = 'List';
const card = 'Card';

export default class RandomCreator {
    static boardName() {
        let chance = new Chance();
        
        return `${board} ${chance.word({syllablest:5})}`; 
    }

    static listName() {
        let chance = new Chance();
        
        return `${list} ${chance.word()}`;
    }
    
    static cardName() {
        let chance = new Chance();
        
        return `${card} ${chance.word()}`;
    }
}