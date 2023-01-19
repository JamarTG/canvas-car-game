import Viper from "./classes/Viper.js";
import Road from "./classes/Road.js";
import ObstacleCar from "./classes/ObstacleCar.js";
import cartype from "./assets/CarType.js";
import canvas from "./classes/Canvas.js";


const canvasContext = canvas.getContext("2d")!;

let userCar = new Viper();
let obstacleCar = new ObstacleCar();

let frontRoad = new Road(0, 0);
let backRoad = new Road(0, canvas.height * -1);

const INITIAL_CANVAS_YCOORDINATE = 0;
const INITIAL_CANVAS_XCOORDINATE = 0;

let MASTERLOOP_ANIMATION_ID: number;
let GAME_START_ANIMATION_ID: number;

let isGameOver = false;
let hasGameStarted = false;

let formattedTime: string;

const clearCanvas = () => {
  canvasContext.clearRect(
    INITIAL_CANVAS_XCOORDINATE,
    INITIAL_CANVAS_YCOORDINATE,
    canvas.width,
    canvas.height
  );
};

const gameOverAnimation = () => {
  clearCanvas();
  cancelAnimationFrame(MASTERLOOP_ANIMATION_ID);
  canvasContext.fillStyle = "#D3D3D3";
  canvasContext.font = '100px "Press Start 2P", sans-serif';
  canvasContext.fillText("Game", 60, canvas.height / 2 - 210);
  canvasContext.fillText("Over", 60, canvas.height / 2 - 85);
  canvasContext.font = '45px "Press Start 2P", sans-serif';
  canvasContext.fillText(
    `Score: ${userCar.getScore()}`,
    60,
    canvas.height / 2 + 250
  );

  canvasContext.fillStyle = "#55FF33";
  canvasContext.font = '15px "Press Start 2P", sans-serif';
  canvasContext.fillText(
    "Press 'enter' to restart",
    60,
    canvas.height / 2 + 300
  );

  canvas.classList.add("gameend");

  requestAnimationFrame(gameOverAnimation);
};

const drawInfo = () => {
  canvasContext.fillStyle = "grey";
  canvasContext.font = '15px "Press Start 2P", sans-serif';
  canvasContext.fillText(`${userCar.getLives()}`, 35, 40);
  canvasContext.font = '10px "Press Start 2P", sans-serif';
  canvasContext.fillText(`pts : ${userCar.getScore()}`, 40, 60);
  canvasContext.fillText(
    `spd : ${(obstacleCar.getSpeed()).toFixed(1)} km/hr`,
    40,
    80
  );
  canvasContext.fillText(`tm  : ${formattedTime}`, 40, 100);
};

const roadAnimation = () => {
  canvasContext.drawImage(
    frontRoad.getImage(),
    frontRoad.getXCoordinate(),
    frontRoad.getYCoordinate(),
    canvas.width,
    canvas.height
  );
  canvasContext.drawImage(
    backRoad.getImage(),
    backRoad.getXCoordinate(),
    backRoad.getYCoordinate(),
    canvas.width,
    canvas.height
  );
  frontRoad.updateYCoordinate();
  backRoad.updateYCoordinate();

  if (frontRoad.getYCoordinate() >= canvas.height) {
    frontRoad.resetYCoordinate(true);
    backRoad.resetYCoordinate(false);
  }
};

const gameControls = (keyboardEvent: KeyboardEvent) => {
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
    
  if (!(
      obstacleCar.getYCoordinate() >= -100 &&
      obstacleCar.getYCoordinate() <= Road.BOTTOM_Y_COORDINATE
  )) {
    ObstacleCar.src = `${cartype[Math.floor(Math.random() * cartype.length)]}`;
    newImage.src = ObstacleCar.src;
  } else {
    newImage.src = ObstacleCar.src;
  }

  canvasContext.drawImage(
    newImage,
    obstacleCar.getXCoordinate(),
    obstacleCar.getYCoordinate(),
    Road.WIDTH,
    Road.WIDTH
  );
  newImage.onload = obstacleCar.move;
};

const drawCar = () => {

  const carImg = document.createElement("img");
  
  carImg.src = "https://i.postimg.cc/1tjsKF9b/Black-viper.png";
  
  carImg.onload = () => {
    
    clearCanvas();
    roadAnimation();
    canvasContext.drawImage(
      carImg,
      userCar.getXCoordinate(),
      userCar.getYCoordinate(),
      userCar.getWidth(),
      userCar.getHeight()
    );
  };
};

const masterGameLoop = () => {
  
  generateCar();
  drawInfo();
  drawCar();

  obstacleCar.increaseSpeed();
  Road.increaseSpeed();

  if (obstacleCar.getYCoordinate() >= Road.BOTTOM_Y_COORDINATE) {
    obstacleCar.generateRandomCarPosition();
    Road.increaseSpeed();
    userCar.increaseScore();
  }
  if (userCar.isOnEdge() || userCar.hasCollidedWithObstacleCar(obstacleCar)) {
    canvas.classList.add('crash');
	  userCar.setMovementDirection('up');
    setTimeout(() => canvas.classList.remove('crash'),500)

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
  canvasContext.clearRect(0, 0, 500, 700);
  canvasContext.fillStyle = "orange";
  canvasContext.font = '60px "Press Start 2P", sans-serif';
  canvasContext.fillText("Evasive", canvas.width / 10, canvas.height / 6 - 20);

  canvasContext.font = '40px "Press Start 2P", sans-serif';
  canvasContext.fillText(
    "  Maneuvers",
    canvas.width / 10,
    canvas.height / 6 + 30
  );

  canvasContext.fillStyle = "#55FF33";
  canvasContext.font = '15px "Press Start 2P", sans-serif';
  canvasContext.fillText(
    "Press 'Enter' to StartGame",
    (canvas.width / 20) * 3,
    canvas.height / 3 - 50
  );

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
        canvasContext.clearRect(
          INITIAL_CANVAS_XCOORDINATE,
          INITIAL_CANVAS_YCOORDINATE,
          canvas.width,
          canvas.height
        );
        masterGameLoop();
      } else if (isGameOver) {
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