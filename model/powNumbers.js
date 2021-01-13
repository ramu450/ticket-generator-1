"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PowNumbers = void 0;
var QuantifiableAlgorithm_1 = require("./QuantifiableAlgorithm");
/**
 * PowNumbers algorithm, make a sequencial pow of each step an show result in console (1*1 = 1, 2*2 = 4, 3*3 = 9)
 */
var PowNumbers = /** @class */ (function (_super) {
    __extends(PowNumbers, _super);
    function PowNumbers(quantity) {
        var _this = _super.call(this) || this;
        _this.quantity = quantity;
        return _this;
    }
    /**
     * Implementation
     */
    PowNumbers.prototype.doTask = function () {
        for (var i = 1; i <= this.quantity; i++) {
            console.log(("" + i * i).padStart(6, "0"));
        }
    };
    return PowNumbers;
}(QuantifiableAlgorithm_1.QuantifiableAlgorithm));
exports.PowNumbers = PowNumbers;
