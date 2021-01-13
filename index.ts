import './config/config';
import { JSONReader } from './file/JSONReader';
import { AlgorithmFactory } from './factory/AlgorithmFactory';

//Read data from JSON (config.json)
let reader = new JSONReader();
let json = reader.readJSONData(process.env.JSON_PATH);

if (json){

    //Create the algorithm factory
    let algorithmFactory = new AlgorithmFactory() 

    //Run factory to create the algorithm defined in config
    let algorithm = algorithmFactory.createAlgorithm(json);

    //Run algorithm
    algorithm.doTask();
}
else{
    throw new Error("Can't get information from JSON (config.json) check if format is correct on README.txt")
}