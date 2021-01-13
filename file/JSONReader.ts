let fs = require('fs');

/**
 * This class allow to read a JSON using FileSystem
 */
export class JSONReader{

    public readJSONData(path: String) : JSON{

        try{
            let data = fs.readFileSync(path);

            return JSON.parse(data);
        }
        catch(e){

            throw e;
        }
    }
}