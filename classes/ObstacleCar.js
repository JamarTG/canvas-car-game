import canvas from "./Canvas.js";
export default class ObstacleCar {
    constructor() {
        this.getXCoordinate = () => {
            return this.xCoordinate;
        };
        this.getYCoordinate = () => {
            return this.yCoordinate;
        };
        this.getSpeed = () => this.speed;
        this.increaseSpeed = () => this.speed += 0.001;
        this.generateRandomCarPosition = () => {
            this.yCoordinate = -400;
            this.xCoordinate = Math.ceil(Math.random() * 420) + 10;
        };
        this.move = () => {
            this.yCoordinate += this.speed;
        };
        this.xCoordinate = Math.ceil(Math.random() * canvas.width) - 5;
        this.yCoordinate = -400;
        this.speed = 3;
    }
}
ObstacleCar.src = "";
