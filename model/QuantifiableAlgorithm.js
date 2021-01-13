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
exports.QuantifiableAlgorithm = void 0;
var Algorithm_1 = require("./Algorithm");
/**
 * Abstract class for a generic algorithm that runs a task n times
 */
var QuantifiableAlgorithm = /** @class */ (function (_super) {
    __extends(QuantifiableAlgorithm, _super);
    function QuantifiableAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QuantifiableAlgorithm;
}(Algorithm_1.Algorithm));
exports.QuantifiableAlgorithm = QuantifiableAlgorithm;
