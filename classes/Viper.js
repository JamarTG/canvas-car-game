"use strict";
exports.__esModule = true;
var Canvas_js_1 = require("./Canvas.js");
var Viper = /** @class */ (function () {
    function Viper() {
        var _this = this;
        this.createImage = function () {
            var newImage = new Image();
            newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';
            return newImage;
        };
        this.isOnEdge = function () { return _this.x <= 0 || _this.x >= Canvas_js_1["default"].width; };
        this.x = Canvas_js_1["default"].width / 2;
        this.y = 580;
        this.img = this.createImage();
        this.score = 0;
        this.turningSpeed = 4;
    }
    return Viper;
}());
exports["default"] = Viper;
