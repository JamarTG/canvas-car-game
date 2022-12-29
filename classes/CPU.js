"use strict";
exports.__esModule = true;
var Canvas_js_1 = require("./Canvas.js");
var CPUCar = /** @class */ (function () {
    function CPUCar() {
        this.x = Math.ceil(Math.random() * Canvas_js_1["default"].width) - 50;
        this.y = -400;
        this.speed = 3;
    }
    CPUCar.src = '';
    return CPUCar;
}());
exports["default"] = CPUCar;
