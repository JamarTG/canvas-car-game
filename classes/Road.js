"use strict";
exports.__esModule = true;
var Road = /** @class */ (function () {
    function Road(startX, startY) {
        this.newRoad = function () {
            var newImage = new Image();
            newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';
            return newImage;
        };
        this.img = this.newRoad();
        this.x = startX;
        this.y = startY;
    }
    Road.speed = 13;
    Road.end = 700;
    return Road;
}());
exports["default"] = Road;
