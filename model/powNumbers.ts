import { QuantifiableAlgorithm } from './QuantifiableAlgorithm';
/**
 * PowNumbers algorithm, make a sequencial pow of each step an show result in console (1*1 = 1, 2*2 = 4, 3*3 = 9)
 */
export class PowNumbers extends QuantifiableAlgorithm{
    
    constructor(quantity: Number){
        super();
        this.quantity = quantity;
    }

    /**
     * Implementation
     */
    doTask(): void {
        for (let i = 1; i <= this.quantity; i++) {
            console.log(`${i * i}`.padStart(6, "0"));
        }
    }
}