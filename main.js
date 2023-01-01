import Viper from "./classes/Viper.js";
import Road from "./classes/Road.js";
import ObstacleCar from "./classes/ObstacleCar.js";
import cartype from "./assets/CarType.js";
import canvas from "./classes/Canvas.js";
import isPhone from "./utilityFuncs/isPhone.js";
const canvasContext = canvas.getContext("2d");
const neutralButton = document.getElementById("center");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
let userCar = new Viper();
let obstacleCar = new ObstacleCar();
let frontRoad = new Road(0, 0);
let backRoad = new Road(0, canvas.height * -1);
const INITIAL_CANVAS_YCOORDINATE = 0;
const INITIAL_CANVAS_XCOORDINATE = 0;
let MASTERLOOP_ANIMATION_ID;
let GAME_START_ANIMATION_ID;
let isGameOver = false;
let hasGameStarted = false;
let formattedTime;
const clearCanvas = () => {
    canvasContext.clearRect(INITIAL_CANVAS_XCOORDINATE, INITIAL_CANVAS_YCOORDINATE, canvas.width, canvas.height);
};
const gameOverAnimation = () => {
    clearCanvas();
    cancelAnimationFrame(MASTERLOOP_ANIMATION_ID);
    canvasContext.fillStyle = "#D3D3D3";
    canvasContext.font = '100px "Press Start 2P", sans-serif';
    canvasContext.fillText("Game", 60, canvas.height / 2 - 150);
    canvasContext.fillText("Over", 60, canvas.height / 2 - 15);
    canvasContext.font = '30px "Press Start 2P", sans-serif';
    canvasContext.fillText(`You scored ${userCar.getScore()}`, 10, canvas.height / 2 + 40);
    canvasContext.fillStyle = "#55FF33";
    canvasContext.font = '20px "Press Start 2P", sans-serif';
    canvasContext.fillText("Press 'enter' to restart", 10, canvas.height / 2 + 100);
    canvas.classList.add("gameend");
    requestAnimationFrame(gameOverAnimation);
};
const drawInfo = () => {
    canvasContext.fillStyle = "grey";
    canvasContext.font = '15px "Press Start 2P", sans-serif';
    canvasContext.fillText(`${userCar.getLives()}`, 35, 40);
    canvasContext.font = '10px "Press Start 2P", sans-serif';
    canvasContext.fillText(`pts : ${userCar.getScore()}`, 40, 60);
    canvasContext.fillText(`spd : ${(obstacleCar.getSpeed() * 5).toFixed(1)} km/hr`, 40, 80);
    canvasContext.fillText(`tm  : ${formattedTime}`, 40, 100);
};
const roadAnimation = () => {
    canvasContext.drawImage(frontRoad.getImage(), frontRoad.getXCoordinate(), frontRoad.getYCoordinate(), canvas.width, canvas.height);
    canvasContext.drawImage(backRoad.getImage(), backRoad.getXCoordinate(), backRoad.getYCoordinate(), canvas.width, canvas.height);
    frontRoad.updateYCoordinate();
    backRoad.updateYCoordinate();
    if (frontRoad.getYCoordinate() >= canvas.height) {
        frontRoad.resetYCoordinate(true);
        backRoad.resetYCoordinate(false);
    }
};
const gameControls = (keyboardEvent) => {
    keyboardEvent = keyboardEvent || window.event;
    switch (keyboardEvent.key) {
        case "ArrowUp":
            userCar.setMovementDirection("neutral").changeCarDirection(userCar.getMovementDirection());
            break;
        case "ArrowDown":
            userCar.setMovementDirection("neutral").changeCarDirection(userCar.getMovementDirection());
            break;
        case "ArrowLeft":
            userCar.setMovementDirection("left").changeCarDirection(userCar.getMovementDirection());
            break;
        case "ArrowRight":
            userCar.setMovementDirection("right").changeCarDirection(userCar.getMovementDirection());
            break;
        default:
            break;
    }
};
const generateCar = () => {
    let newImage = document.createElement("img");
    if (!(obstacleCar.getYCoordinate() >= -100 &&
        obstacleCar.getYCoordinate() <= Road.bottomYCoordinate)) {
        ObstacleCar.src = `${cartype[Math.floor(Math.random() * cartype.length)]}`;
        newImage.src = ObstacleCar.src;
    }
    else {
        newImage.src = ObstacleCar.src;
    }
    canvasContext.drawImage(newImage, obstacleCar.getXCoordinate(), obstacleCar.getYCoordinate(), Road.WIDTH, Road.WIDTH);
    newImage.onload = obstacleCar.move;
};
const drawCar = () => {
    const carImg = document.createElement("img");
    carImg.src = "https://i.postimg.cc/1tjsKF9b/Black-viper.png";
    carImg.onload = () => {
        clearCanvas();
        roadAnimation();
        canvasContext.drawImage(carImg, userCar.getXCoordinate(), userCar.getYCoordinate(), Viper.WIDTH, Viper.HEIGHT);
    };
};
const masterGameLoop = () => {
    drawCar();
    drawInfo();
    generateCar();
    obstacleCar.increaseSpeed();
    Road.increaseSpeed();
    if (obstacleCar.getYCoordinate() >= Road.bottomYCoordinate) {
        obstacleCar.generateRandomCarPosition();
        Road.increaseSpeed();
        userCar.increaseScore();
    }
    if (userCar.isOnEdge() || userCar.hasCollidedWithObstacleCar(obstacleCar)) {
        canvas.classList.add('crash');
        setTimeout(() => {
            canvas.classList.remove('crash');
        }, 500);
        userCar.decreaseLives();
        userCar.respawn(obstacleCar);
        if (!userCar.getLives()) {
            isGameOver = true;
            requestAnimationFrame(gameOverAnimation);
            return;
        }
    }
    document.onkeydown = gameControls;
    userCar.changeCarDirection(userCar.getMovementDirection());
    MASTERLOOP_ANIMATION_ID = requestAnimationFrame(masterGameLoop);
};
const gameStartAnimation = () => {
    canvas.classList.add("gamestart");
    if (!isPhone()) {
        neutralButton.classList.add("hide");
        rightButton.classList.add("hide");
        leftButton.classList.add("hide");
    }
    canvasContext.clearRect(0, 0, 500, 700);
    canvasContext.fillStyle = "orange";
    canvasContext.font = '60px "Press Start 2P", sans-serif';
    canvasContext.fillText("Evasive", canvas.width / 10, canvas.height / 6 + 30);
    canvasContext.font = '40px "Press Start 2P", sans-serif';
    canvasContext.fillText("  Maneuvers", canvas.width / 10, canvas.height / 6 + 90);
    canvasContext.fillStyle = "white";
    canvasContext.font = '15px "Press Start 2P", sans-serif';
    canvasContext.fillText("Press 'Enter' to StartGame", (canvas.width / 20) * 3, canvas.height / 2.5 - 40);
    canvas.classList.add("gamestart");
    GAME_START_ANIMATION_ID = requestAnimationFrame(gameStartAnimation);
};
const startGame = () => {
    gameStartAnimation();
    addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (!hasGameStarted) {
                hasGameStarted = true;
                cancelAnimationFrame(GAME_START_ANIMATION_ID);
                canvasContext.clearRect(INITIAL_CANVAS_XCOORDINATE, INITIAL_CANVAS_YCOORDINATE, canvas.width, canvas.height);
                masterGameLoop();
            }
            else if (isGameOver) {
                location.reload();
            }
        }
    });
};
const clock = () => {
    let startTime = Date.now();
    let elapsed = 0;
    setInterval(() => {
        elapsed = Date.now() - startTime;
        formattedTime = new Date(elapsed).toISOString().substr(14, 7);
    }, 1);
};
clock();
startGame();
