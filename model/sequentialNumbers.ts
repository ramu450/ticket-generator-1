import { QuantifiableAlgorithm } from './QuantifiableAlgorithm';
/**
 * Sequential Numbers algorithm, show a sequence of numbers step by step (1, 2, 3, 4... n)
 */
export class SequentialNumbers extends QuantifiableAlgorithm {

    constructor(quantity: Number){
        super();
        this.quantity = quantity;
    }

    /**
     * Implementation
     */
    doTask(): void {
        for (let i = 1; i <= this.quantity; i++) {
            console.log(`${i}`.padStart(6, "0"));
        }
    }
}
