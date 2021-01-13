"use strict";
exports.__esModule = true;
exports.AlgorithmFactory = void 0;
var sequentialNumbers_1 = require("../model/sequentialNumbers");
var powNumbers_1 = require("../model/powNumbers");
/**
 * Factory to create the algorithms
 */
var AlgorithmFactory = /** @class */ (function () {
    function AlgorithmFactory() {
    }
    /**
     * Create and return the required algorithm
     * @param options JSON with algorithm options
     */
    AlgorithmFactory.prototype.createAlgorithm = function (options) {
        this.validateData(options);
        var algorithm = options.algorithm;
        var quantity = options.quantity;
        switch (algorithm) {
            case process.env.ALGORITHM_SEQUENTIAL_NUMBERS:
                return new sequentialNumbers_1.SequentialNumbers(quantity);
            case process.env.ALGORITHM_POW_NUMBERS:
                return new powNumbers_1.PowNumbers(quantity);
            default:
                console.log("This algorithm doesn't exists in the system.");
                return null;
        }
    };
    /**
     * Validate received data from JSON
     * @param options JSON with algorithm options
     */
    AlgorithmFactory.prototype.validateData = function (options) {
        if (options.quantity) {
            if (!Number(options.quantity)) {
                throw new Error("The parameter quantity in JSON (config.json) must be a number.");
            }
        }
        else {
            throw new Error("The parameter quantity in JSON (config.json) can't be null.");
        }
        if (!options.algorithm) {
            throw new Error("The parameter algorithm in JSON (config.json) can't be null.");
        }
    };
    return AlgorithmFactory;
}());
exports.AlgorithmFactory = AlgorithmFactory;
