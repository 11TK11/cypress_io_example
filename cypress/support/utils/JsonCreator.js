export default class JsonCreator {
    
    static jsonRequest(body, api) {
        let json;
        json = `{ ${body}, "key": "${api.key}", "token": "${api.token}"}`;

        return JSON.parse(json);
    }

    static jsonFromTable(table) {
        let row = table.rawTable.slice(1);
        let json = '';
        row.forEach(element => {
                        json += `"${element[0]}": "${element[1]}",`;
                 });
        json = `{${json.substr(0, json.length - 1)}}`;

        return JSON.parse(json);
    }

    static jsonArrayFromColumn(table) {
        let row = table.rawTable.slice(1);
        let array = [];
        row.forEach(element => {
            let json = {};
            json = {"Item":element[0]};
            array.push(json);
        });

        return array;
    }
}