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
exports.SequentialNumbers = void 0;
var QuantifiableAlgorithm_1 = require("./QuantifiableAlgorithm");
/**
 * Sequential Numbers algorithm, show a sequence of numbers step by step (1, 2, 3, 4... n)
 */
var SequentialNumbers = /** @class */ (function (_super) {
    __extends(SequentialNumbers, _super);
    function SequentialNumbers(quantity) {
        var _this = _super.call(this) || this;
        _this.quantity = quantity;
        return _this;
    }
    /**
     * Implementation
     */
    SequentialNumbers.prototype.doTask = function () {
        for (var i = 1; i <= this.quantity; i++) {
            console.log(("" + i).padStart(6, "0"));
        }
    };
    return SequentialNumbers;
}(QuantifiableAlgorithm_1.QuantifiableAlgorithm));
exports.SequentialNumbers = SequentialNumbers;
