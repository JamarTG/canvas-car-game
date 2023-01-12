import canvas from "./Canvas.js";
import ObstacleCar from "./ObstacleCar.js";

const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;

export default class Viper {
  private xCoordinate: number;
  private yCoordinate: number;
  private score: number;
  private turningSpeed: number;
  private movementDirection: string;
  private lives: number;

  static WIDTH = 120;
  static HEIGHT = 100;
  static INITIAL_X = canvas.width / 2;
  static INITIAL_Y = canvas.height - 100;
  static INITIAL_SCORE = 0;
  static INITAL_LIVES = 3;
  static INITIAL_MOVEMENT_DIRECTION = "";
  static INITIAL_TURNING_SPEED = 4;
  static VIPER_IMG_SOURCES = "https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg";
  static NEW_IMAGE_ELEMENT = document.createElement("img");
  static X_COORDINATE_MINUS_CAR_WIDTH = -40;
  static MIN_DIFF_BETW_XCOORD_FROM_LEFT = 42;
  static MIN_DIFF_BETW_XCOORD_FROM_RIGHT = 30;

  constructor() {
    this.lives = Viper.INITAL_LIVES;
    this.xCoordinate = Viper.INITIAL_X;
    this.yCoordinate = Viper.INITIAL_Y;
    this.score = Viper.INITIAL_SCORE;
    this.turningSpeed = Viper.INITIAL_TURNING_SPEED;
    this.movementDirection = Viper.INITIAL_MOVEMENT_DIRECTION;
  }

  isOnEdge = () => {
    const hasCollidedWithLeftEdge = this.xCoordinate <= Viper.X_COORDINATE_MINUS_CAR_WIDTH ;
    const hasCollidedWithRightEdge = this.xCoordinate >= canvas.width - Viper.WIDTH/2;
    
    return hasCollidedWithLeftEdge || hasCollidedWithRightEdge;
  }

  hasCollidedWithObstacleCar = (obstacleCar: ObstacleCar) => {
    let isUserCarLeftofObstacleCar = this.getXCoordinate() < obstacleCar.getXCoordinate();
    

    let isXCoordinatesIntersecting = isUserCarLeftofObstacleCar 
    ? Math.abs(
      this.xCoordinate - obstacleCar.getXCoordinate()) <= Viper.MIN_DIFF_BETW_XCOORD_FROM_LEFT
    : Math.abs(
      this.xCoordinate - obstacleCar.getXCoordinate()) <= Viper.MIN_DIFF_BETW_XCOORD_FROM_RIGHT 


    let isYCoordinatesIntersecting = Math.abs(obstacleCar.getYCoordinate() - this.yCoordinate) <= 90;
   
    return isXCoordinatesIntersecting && isYCoordinatesIntersecting;
  };

  increaseSideSpeed = () => {
    this.turningSpeed += 0.01
  }

  getLives = () => {
    let string = "";

    for (let i = 0; i < this.lives; i++) {
      string += "❤️";
    }

    return string;
  };

  getXCoordinate = () => this.xCoordinate;
  getYCoordinate = () => this.yCoordinate;
  getScore = () => this.score;
  getMovementDirection = () => this.movementDirection;

  respawn = (obstacleCar: ObstacleCar) => {

    canvasElement.classList.add("red");
    canvasElement.style.borderTop = "none";

    setTimeout(function () {
      canvasElement.classList.remove("red");
    }, 200);

    if (obstacleCar.getXCoordinate() >= canvas.width / 2) {
      this.xCoordinate = 20;
      this.changeCarDirection("up");
    } else {
      this.xCoordinate = 300;
      this.changeCarDirection("up");
    }

    this.yCoordinate = Viper.INITIAL_Y;
  };

  increaseScore = () => {
    ++this.score;
  };

  decreaseLives = () => {
    --this.lives;
  };

  moveToLeft = () => {
    this.xCoordinate -= this.turningSpeed;
  };

  moveToRight = () => {
    this.xCoordinate += this.turningSpeed;
  };

  goNeutral = () => {
    this.xCoordinate += 0;
  };

  setMovementDirection = (direction: string) => {
    this.movementDirection = direction;
    return this;
  };

  changeCarDirection = (direction: string) => {
    switch (direction) {
      case "left":
        this.moveToLeft();
        break;
      case "right":
        this.moveToRight();
        break;
      case "neutral":
        this.goNeutral();
        break;
      default:          
        break;
    }
  };
}