"use strict";
exports.__esModule = true;
var isPhone = function () {
    var userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};
exports["default"] = isPhone;
