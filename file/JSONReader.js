"use strict";
exports.__esModule = true;
exports.JSONReader = void 0;
var fs = require('fs');
/**
 * This class allow to read a JSON using FileSystem
 */
var JSONReader = /** @class */ (function () {
    function JSONReader() {
    }
    JSONReader.prototype.readJSONData = function (path) {
        try {
            var data = fs.readFileSync(path);
            return JSON.parse(data);
        }
        catch (e) {
            throw e;
        }
    };
    return JSONReader;
}());
exports.JSONReader = JSONReader;
