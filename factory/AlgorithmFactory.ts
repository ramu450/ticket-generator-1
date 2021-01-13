import {SequentialNumbers} from '../model/sequentialNumbers'
import {PowNumbers} from '../model/powNumbers'
import { Algorithm } from '../model/Algorithm';

/**
 * Factory to create the algorithms
 */
export class AlgorithmFactory{

    /**
     * Create and return the required algorithm
     * @param options JSON with algorithm options
     */
    public createAlgorithm(options) : Algorithm{

        this.validateData(options);

        let algorithm = options.algorithm
        let quantity = options.quantity

        switch(algorithm){

            case process.env.ALGORITHM_SEQUENTIAL_NUMBERS: 
                return new SequentialNumbers(quantity);

            case process.env.ALGORITHM_POW_NUMBERS: 
                return new PowNumbers(quantity);
            
            default: 
                console.log("This algorithm doesn't exists in the system.");
                return null;
        }
    }
    
    /**
     * Validate received data from JSON
     * @param options JSON with algorithm options
     */
    private validateData(options){

        if (options.quantity){
            if (!Number(options.quantity)){
                throw new Error("The parameter quantity in JSON (config.json) must be a number.");
            }
        }
        else{
            throw new Error("The parameter quantity in JSON (config.json) can't be null.");
        }

        if (!options.algorithm) {
            throw new Error("The parameter algorithm in JSON (config.json) can't be null.");
        }
    }
}
