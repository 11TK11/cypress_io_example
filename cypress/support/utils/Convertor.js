export default class Convertor {
    
    static jsonToApiBody(json) {
        return JSON.stringify(json).replace('{','').replace('}','');
    }
}