import canvas from "./Canvas.js";
import ObstacleCar from "./ObstacleCar.js";
const canvasElement = document.getElementById("canvas");
export default class Viper {
    constructor() {
        this.createImage = () => {
            let newImage = document.createElement("img");
            newImage.src = "https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg";
            return newImage;
        };
        this.isOnEdge = () => this.xCoordinate <= 0 || this.xCoordinate >= canvas.width - Viper.WIDTH;
        this.hasCollidedWithObstacleCar = (obstacleCar) => {
            return (Math.abs(this.xCoordinate - obstacleCar.getXCoordinate()) <= 45 &&
                Math.abs(obstacleCar.getYCoordinate() - this.yCoordinate) <= 90);
        };
        this.getLives = () => {
            let string = "";
            for (let i = 0; i < this.lives; i++) {
                string += "❤️";
            }
            return string;
        };
        this.getXCoordinate = () => {
            return this.xCoordinate;
        };
        this.getYCoordinate = () => {
            return this.yCoordinate;
        };
        this.getScore = () => {
            return this.score;
        };
        this.getMovementDirection = () => {
            return this.movementDirection;
        };
        this.respawn = (obstacleCar) => {
            canvasElement.classList.add("red");
            canvasElement.style.borderTop = "none";
            setTimeout(function () {
                canvasElement.classList.remove("red");
            }, 200);
            if (obstacleCar.getXCoordinate() >= canvas.width / 2) {
                this.xCoordinate = 20;
                this.changeCarDirection("up");
            }
            else {
                this.xCoordinate = 300;
                this.changeCarDirection("up");
            }
            this.yCoordinate = Viper.INITIAL_Y;
        };
        this.increaseScore = () => {
            ++this.score;
        };
        this.decreaseLives = () => {
            --this.lives;
        };
        this.moveToLeft = () => {
            this.xCoordinate -= this.turningSpeed;
        };
        this.moveToRight = () => {
            this.xCoordinate += this.turningSpeed;
        };
        this.goNeutral = () => {
            this.xCoordinate += 0;
        };
        this.setMovementDirection = (direction) => {
            this.movementDirection = direction;
            return this;
        };
        this.changeCarDirection = (direction) => {
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
        this.lives = 3;
        this.xCoordinate = Viper.INITIAL_X;
        this.yCoordinate = Viper.INITIAL_Y;
        this.score = 0;
        this.turningSpeed = 4;
        this.movementDirection = "";
    }
}
Viper.WIDTH = 120;
Viper.HEIGHT = 100;
Viper.INITIAL_X = canvas.width / 2;
Viper.INITIAL_Y = 580;
