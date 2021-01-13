"use strict";
exports.__esModule = true;
require("./config/config");
var JSONReader_1 = require("./file/JSONReader");
var AlgorithmFactory_1 = require("./factory/AlgorithmFactory");
//Read data from JSON (config.json)
var reader = new JSONReader_1.JSONReader();
var json = reader.readJSONData(process.env.JSON_PATH);
if (json) {
    //Create the algorithm factory
    var algorithmFactory = new AlgorithmFactory_1.AlgorithmFactory();
    //Run factory to create the algorithm defined in config
    var algorithm = algorithmFactory.createAlgorithm(json);
    //Run algorithm
    algorithm.doTask();
}
else {
    throw new Error("Can't get information from JSON (config.json) check if format is correct on README.txt");
}
