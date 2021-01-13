import { Algorithm } from './Algorithm';
import { Quantifiable } from "../interface/quantifiable";

/**
 * Abstract class for a generic algorithm that runs a task n times 
 */
export abstract class QuantifiableAlgorithm extends Algorithm implements Quantifiable{
    quantity: Number;    
}