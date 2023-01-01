/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/CarType.js":
/*!***************************!*\
  !*** ./assets/CarType.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n﻿/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['https://i.postimg.cc/Mv02SdF4/Mini-van.png', 'https://i.postimg.cc/nXH8cq8L/taxi.png', 'https://i.postimg.cc/rdmv5cwX/truck.png', 'https://i.postimg.cc/xXgwkqY3/Ambulance.png', 'https://i.postimg.cc/CBnX6N8c/Audi.png', 'https://i.postimg.cc/2qKgwJ1q/Mini-truck.png']);\r\n\n\n//# sourceURL=webpack://optimized-car-game/./assets/CarType.js?");

/***/ }),

/***/ "./classes/Canvas.js":
/*!***************************!*\
  !*** ./classes/Canvas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n﻿const canvas = document.getElementById(\"canvas\");\r\ncanvas.height = 700;\r\ncanvas.width = 500;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (canvas);\r\n\n\n//# sourceURL=webpack://optimized-car-game/./classes/Canvas.js?");

/***/ }),

/***/ "./classes/ObstacleCar.js":
/*!********************************!*\
  !*** ./classes/ObstacleCar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ObstacleCar)\n/* harmony export */ });\n/* harmony import */ var _Canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.js */ \"./classes/Canvas.js\");\n﻿\r\nclass ObstacleCar {\r\n    constructor() {\r\n        this.getXCoordinate = () => {\r\n            return this.xCoordinate;\r\n        };\r\n        this.getYCoordinate = () => {\r\n            return this.yCoordinate;\r\n        };\r\n        this.getSpeed = () => {\r\n            return this.speed;\r\n        };\r\n        this.increaseSpeed = () => {\r\n            this.speed += 0.001;\r\n        };\r\n        this.generateRandomCarPosition = () => {\r\n            this.yCoordinate = -400;\r\n            this.xCoordinate = Math.ceil(Math.random() * 420);\r\n        };\r\n        this.move = () => {\r\n            this.yCoordinate += this.speed;\r\n        };\r\n        this.xCoordinate = Math.ceil(Math.random() * _Canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width) - 50;\r\n        this.yCoordinate = -400;\r\n        this.speed = 3;\r\n    }\r\n}\r\nObstacleCar.src = \"\";\r\n\n\n//# sourceURL=webpack://optimized-car-game/./classes/ObstacleCar.js?");

/***/ }),

/***/ "./classes/Road.js":
/*!*************************!*\
  !*** ./classes/Road.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Road)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./classes/Canvas.js\");\n﻿\r\nclass Road {\r\n    constructor(startingXCoordinate, startingYCoordinate) {\r\n        this.getImage = () => {\r\n            return this.image;\r\n        };\r\n        this.getXCoordinate = () => {\r\n            return this.xCoordinate;\r\n        };\r\n        this.getYCoordinate = () => {\r\n            return this.yCoordinate;\r\n        };\r\n        this.resetYCoordinate = (isFrontRoad) => {\r\n            if (isFrontRoad) {\r\n                this.yCoordinate = 0;\r\n            }\r\n            else {\r\n                this.yCoordinate = _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height * -1;\r\n            }\r\n        };\r\n        this.updateYCoordinate = () => {\r\n            this.yCoordinate += Road.speed;\r\n        };\r\n        this.newRoad = () => {\r\n            let newImage = new Image();\r\n            newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';\r\n            return newImage;\r\n        };\r\n        this.image = this.newRoad();\r\n        this.xCoordinate = startingXCoordinate;\r\n        this.yCoordinate = startingYCoordinate;\r\n    }\r\n}\r\nRoad.speed = 8;\r\nRoad.bottomYCoordinate = 700;\r\nRoad.WIDTH = 100;\r\nRoad.HEIGHT = 120;\r\nRoad.increaseSpeed = () => {\r\n    Road.speed += 0.001;\r\n};\r\n\n\n//# sourceURL=webpack://optimized-car-game/./classes/Road.js?");

/***/ }),

/***/ "./classes/Viper.js":
/*!**************************!*\
  !*** ./classes/Viper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Viper)\n/* harmony export */ });\n/* harmony import */ var _Canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.js */ \"./classes/Canvas.js\");\n/* harmony import */ var _ObstacleCar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObstacleCar.js */ \"./classes/ObstacleCar.js\");\n﻿\r\n\r\nconst canvasElement = document.getElementById(\"canvas\");\r\nclass Viper {\r\n    constructor() {\r\n        this.createImage = () => {\r\n            let newImage = document.createElement(\"img\");\r\n            newImage.src = \"https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg\";\r\n            return newImage;\r\n        };\r\n        this.isOnEdge = () => this.xCoordinate <= 0 || this.xCoordinate >= _Canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width - Viper.WIDTH;\r\n        this.hasCollidedWithObstacleCar = (obstacleCar) => {\r\n            return (Math.abs(this.xCoordinate - obstacleCar.getXCoordinate()) <= 45 &&\r\n                Math.abs(obstacleCar.getYCoordinate() - this.yCoordinate) <= 90);\r\n        };\r\n        this.getLives = () => {\r\n            let string = \"\";\r\n            for (let i = 0; i < this.lives; i++) {\r\n                string += \"❤️\";\r\n            }\r\n            return string;\r\n        };\r\n        this.getXCoordinate = () => {\r\n            return this.xCoordinate;\r\n        };\r\n        this.getYCoordinate = () => {\r\n            return this.yCoordinate;\r\n        };\r\n        this.getScore = () => {\r\n            return this.score;\r\n        };\r\n        this.getMovementDirection = () => {\r\n            return this.movementDirection;\r\n        };\r\n        this.respawn = (obstacleCar) => {\r\n            canvasElement.classList.add(\"red\");\r\n            canvasElement.style.borderTop = \"none\";\r\n            setTimeout(function () {\r\n                canvasElement.classList.remove(\"red\");\r\n            }, 200);\r\n            if (obstacleCar.getXCoordinate() >= _Canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width / 2) {\r\n                this.xCoordinate = 20;\r\n                this.changeCarDirection(\"up\");\r\n            }\r\n            else {\r\n                this.xCoordinate = 300;\r\n                this.changeCarDirection(\"up\");\r\n            }\r\n            this.yCoordinate = Viper.INITIAL_Y;\r\n        };\r\n        this.increaseScore = () => {\r\n            ++this.score;\r\n        };\r\n        this.decreaseLives = () => {\r\n            --this.lives;\r\n        };\r\n        this.moveToLeft = () => {\r\n            this.xCoordinate -= this.turningSpeed;\r\n        };\r\n        this.moveToRight = () => {\r\n            this.xCoordinate += this.turningSpeed;\r\n        };\r\n        this.goNeutral = () => {\r\n            this.xCoordinate += 0;\r\n        };\r\n        this.setMovementDirection = (direction) => {\r\n            this.movementDirection = direction;\r\n            return this;\r\n        };\r\n        this.changeCarDirection = (direction) => {\r\n            switch (direction) {\r\n                case \"left\":\r\n                    this.moveToLeft();\r\n                    break;\r\n                case \"right\":\r\n                    this.moveToRight();\r\n                    break;\r\n                case \"neutral\":\r\n                    this.goNeutral();\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        };\r\n        this.lives = 3;\r\n        this.xCoordinate = Viper.INITIAL_X;\r\n        this.yCoordinate = Viper.INITIAL_Y;\r\n        this.score = 0;\r\n        this.turningSpeed = 4;\r\n        this.movementDirection = \"\";\r\n    }\r\n}\r\nViper.WIDTH = 120;\r\nViper.HEIGHT = 100;\r\nViper.INITIAL_X = _Canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width / 2;\r\nViper.INITIAL_Y = 580;\r\n\n\n//# sourceURL=webpack://optimized-car-game/./classes/Viper.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Viper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Viper.js */ \"./classes/Viper.js\");\n/* harmony import */ var _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Road.js */ \"./classes/Road.js\");\n/* harmony import */ var _classes_ObstacleCar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/ObstacleCar.js */ \"./classes/ObstacleCar.js\");\n/* harmony import */ var _assets_CarType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/CarType.js */ \"./assets/CarType.js\");\n/* harmony import */ var _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Canvas.js */ \"./classes/Canvas.js\");\n/* harmony import */ var _utilityFuncs_isPhone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilityFuncs/isPhone.js */ \"./utilityFuncs/isPhone.js\");\n﻿\r\n\r\n\r\n\r\n\r\n\r\nconst canvasContext = _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getContext(\"2d\");\r\nconst neutralButton = document.getElementById(\"center\");\r\nconst leftButton = document.getElementById(\"left\");\r\nconst rightButton = document.getElementById(\"right\");\r\nlet userCar = new _classes_Viper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nlet obstacleCar = new _classes_ObstacleCar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nlet frontRoad = new _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0);\r\nlet backRoad = new _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height * -1);\r\nconst INITIAL_CANVAS_YCOORDINATE = 0;\r\nconst INITIAL_CANVAS_XCOORDINATE = 0;\r\nlet MASTERLOOP_ANIMATION_ID;\r\nlet GAME_START_ANIMATION_ID;\r\nlet isGameOver = false;\r\nlet hasGameStarted = false;\r\nlet formattedTime;\r\nconst clearCanvas = () => {\r\n    canvasContext.clearRect(INITIAL_CANVAS_XCOORDINATE, INITIAL_CANVAS_YCOORDINATE, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\r\n};\r\nconst gameOverAnimation = () => {\r\n    clearCanvas();\r\n    cancelAnimationFrame(MASTERLOOP_ANIMATION_ID);\r\n    canvasContext.fillStyle = \"#D3D3D3\";\r\n    canvasContext.font = '100px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(\"Game\", 60, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2 - 150);\r\n    canvasContext.fillText(\"Over\", 60, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2 - 15);\r\n    canvasContext.font = '30px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(`You scored ${userCar.getScore()}`, 10, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2 + 40);\r\n    canvasContext.fillStyle = \"#55FF33\";\r\n    canvasContext.font = '20px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(\"Press 'enter' to restart\", 10, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2 + 100);\r\n    _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].classList.add(\"gameend\");\r\n    requestAnimationFrame(gameOverAnimation);\r\n};\r\nconst drawInfo = () => {\r\n    canvasContext.fillStyle = \"grey\";\r\n    canvasContext.font = '15px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(`${userCar.getLives()}`, 35, 40);\r\n    canvasContext.font = '10px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(`pts : ${userCar.getScore()}`, 40, 60);\r\n    canvasContext.fillText(`spd : ${(obstacleCar.getSpeed() * 5).toFixed(1)} km/hr`, 40, 80);\r\n    canvasContext.fillText(`tm  : ${formattedTime}`, 40, 100);\r\n};\r\nconst roadAnimation = () => {\r\n    canvasContext.drawImage(frontRoad.getImage(), frontRoad.getXCoordinate(), frontRoad.getYCoordinate(), _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\r\n    canvasContext.drawImage(backRoad.getImage(), backRoad.getXCoordinate(), backRoad.getYCoordinate(), _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\r\n    frontRoad.updateYCoordinate();\r\n    backRoad.updateYCoordinate();\r\n    if (frontRoad.getYCoordinate() >= _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height) {\r\n        frontRoad.resetYCoordinate(true);\r\n        backRoad.resetYCoordinate(false);\r\n    }\r\n};\r\nconst gameControls = (keyboardEvent) => {\r\n    keyboardEvent = keyboardEvent || window.event;\r\n    switch (keyboardEvent.key) {\r\n        case \"ArrowUp\":\r\n            userCar.setMovementDirection(\"neutral\").changeCarDirection(userCar.getMovementDirection());\r\n            break;\r\n        case \"ArrowDown\":\r\n            userCar.setMovementDirection(\"neutral\").changeCarDirection(userCar.getMovementDirection());\r\n            break;\r\n        case \"ArrowLeft\":\r\n            userCar.setMovementDirection(\"left\").changeCarDirection(userCar.getMovementDirection());\r\n            break;\r\n        case \"ArrowRight\":\r\n            userCar.setMovementDirection(\"right\").changeCarDirection(userCar.getMovementDirection());\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n};\r\nconst generateCar = () => {\r\n    let newImage = document.createElement(\"img\");\r\n    if (!(obstacleCar.getYCoordinate() >= -100 &&\r\n        obstacleCar.getYCoordinate() <= _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bottomYCoordinate)) {\r\n        _classes_ObstacleCar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src = `${_assets_CarType_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Math.floor(Math.random() * _assets_CarType_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length)]}`;\r\n        newImage.src = _classes_ObstacleCar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src;\r\n    }\r\n    else {\r\n        newImage.src = _classes_ObstacleCar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src;\r\n    }\r\n    canvasContext.drawImage(newImage, obstacleCar.getXCoordinate(), obstacleCar.getYCoordinate(), _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WIDTH, _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WIDTH);\r\n    newImage.onload = obstacleCar.move;\r\n};\r\nconst drawCar = () => {\r\n    const carImg = document.createElement(\"img\");\r\n    carImg.src = \"https://i.postimg.cc/1tjsKF9b/Black-viper.png\";\r\n    carImg.onload = () => {\r\n        clearCanvas();\r\n        roadAnimation();\r\n        canvasContext.drawImage(carImg, userCar.getXCoordinate(), userCar.getYCoordinate(), _classes_Viper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WIDTH, _classes_Viper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEIGHT);\r\n    };\r\n};\r\nconst masterGameLoop = () => {\r\n    drawCar();\r\n    drawInfo();\r\n    generateCar();\r\n    obstacleCar.increaseSpeed();\r\n    _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].increaseSpeed();\r\n    if (obstacleCar.getYCoordinate() >= _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bottomYCoordinate) {\r\n        obstacleCar.generateRandomCarPosition();\r\n        _classes_Road_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].increaseSpeed();\r\n        userCar.increaseScore();\r\n    }\r\n    if (userCar.isOnEdge() || userCar.hasCollidedWithObstacleCar(obstacleCar)) {\r\n        _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].classList.add('crash');\r\n        setTimeout(() => {\r\n            _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].classList.remove('crash');\r\n        }, 500);\r\n        userCar.decreaseLives();\r\n        userCar.respawn(obstacleCar);\r\n        if (!userCar.getLives()) {\r\n            isGameOver = true;\r\n            requestAnimationFrame(gameOverAnimation);\r\n            return;\r\n        }\r\n    }\r\n    document.onkeydown = gameControls;\r\n    userCar.changeCarDirection(userCar.getMovementDirection());\r\n    MASTERLOOP_ANIMATION_ID = requestAnimationFrame(masterGameLoop);\r\n};\r\nconst gameStartAnimation = () => {\r\n    _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].classList.add(\"gamestart\");\r\n    if (!(0,_utilityFuncs_isPhone_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()) {\r\n        neutralButton.classList.add(\"hide\");\r\n        rightButton.classList.add(\"hide\");\r\n        leftButton.classList.add(\"hide\");\r\n    }\r\n    canvasContext.clearRect(0, 0, 500, 700);\r\n    canvasContext.fillStyle = \"orange\";\r\n    canvasContext.font = '60px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(\"Evasive\", _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / 10, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 6 + 30);\r\n    canvasContext.font = '40px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(\"  Maneuvers\", _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / 10, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 6 + 90);\r\n    canvasContext.fillStyle = \"white\";\r\n    canvasContext.font = '15px \"Press Start 2P\", sans-serif';\r\n    canvasContext.fillText(\"Press 'Enter' to StartGame\", (_classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / 20) * 3, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2.5 - 40);\r\n    _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].classList.add(\"gamestart\");\r\n    GAME_START_ANIMATION_ID = requestAnimationFrame(gameStartAnimation);\r\n};\r\nconst startGame = () => {\r\n    gameStartAnimation();\r\n    addEventListener(\"keydown\", (event) => {\r\n        if (event.key === \"Enter\") {\r\n            if (!hasGameStarted) {\r\n                hasGameStarted = true;\r\n                cancelAnimationFrame(GAME_START_ANIMATION_ID);\r\n                canvasContext.clearRect(INITIAL_CANVAS_XCOORDINATE, INITIAL_CANVAS_YCOORDINATE, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _classes_Canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\r\n                masterGameLoop();\r\n            }\r\n            else if (isGameOver) {\r\n                location.reload();\r\n            }\r\n        }\r\n    });\r\n};\r\nconst clock = () => {\r\n    let startTime = Date.now();\r\n    let elapsed = 0;\r\n    setInterval(() => {\r\n        elapsed = Date.now() - startTime;\r\n        formattedTime = new Date(elapsed).toISOString().substr(14, 7);\r\n    }, 1);\r\n};\r\nclock();\r\nstartGame();\r\n\n\n//# sourceURL=webpack://optimized-car-game/./main.js?");

/***/ }),

/***/ "./utilityFuncs/isPhone.js":
/*!*********************************!*\
  !*** ./utilityFuncs/isPhone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n﻿const isPhone = () => {\r\n    var userAgent = navigator.userAgent;\r\n    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPhone);\r\n\n\n//# sourceURL=webpack://optimized-car-game/./utilityFuncs/isPhone.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;