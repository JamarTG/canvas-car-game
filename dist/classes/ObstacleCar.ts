import canvas from "./Canvas.js";

export default class ObstacleCar {
  private xCoordinate: number;
  private yCoordinate: number;
  private speed: number;

  static src: string = "";

  constructor() {
    this.xCoordinate = Math.ceil(Math.random() * canvas.width) - 50;
    this.yCoordinate = -400;
    this.speed = 5;
  }

  getXCoordinate = () => {
    return this.xCoordinate;
  };

  getYCoordinate = () => {
    return this.yCoordinate;
  };

  getSpeed = () => {
    return this.speed;
  };

  increaseSpeed = () => {
    this.speed += 0.005;
  };

  generateRandomCarPosition = () => {
    this.yCoordinate = -400;
    this.xCoordinate = Math.ceil(Math.random() * 420);
  };

  move = () => {
    this.yCoordinate += this.speed;
  };
}