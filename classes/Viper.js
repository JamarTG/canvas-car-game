import canvas from "./Canvas.js";
import ObstacleCar from "./ObstacleCar.js";
const canvasElement = document.getElementById("canvas");
export default class Viper {
    constructor() {
        this.updateFlyState = () => {
            if (this.isFlying) {
                if (this.hasReachedUpperThreshold()) {
                    this.isFalling = true;
                    this.isFlying = false;
                }
                else {
                    this.grow();
                }
            }
            else if (this.isFalling) {
                if (this.isFalling) {
                    if (this.hasReachedLowerThreshold()) {
                        this.isFalling = false;
                    }
                    else {
                        this.shrink();
                    }
                }
            }
        };
        this.setFlyState = () => {
            this.isFlying = true;
        };
        this.isOnEdge = () => {
            const hasCollidedWithLeftEdge = this.xCoordinate <= Viper.X_COORDINATE_MINUS_CAR_WIDTH;
            const hasCollidedWithRightEdge = this.xCoordinate >= canvas.width - Viper.WIDTH / 2;
            return hasCollidedWithLeftEdge || hasCollidedWithRightEdge;
        };
        this.getUpperHeightThreshold = () => {
            return this.upperHeightThreshold;
        };
        this.getLowerHeightThreshold = () => {
            return this.lowerHeightThreshold;
        };
        this.getUpperWidthThreshold = () => {
            return this.upperWidthThreshold;
        };
        this.getLowerWidthThreshold = () => {
            return this.lowerWidthThreshold;
        };
        this.hasReachedUpperThreshold = () => {
            return this.getHeight() >= this.getUpperHeightThreshold()
                && this.getWidth() >= this.getUpperWidthThreshold();
        };
        this.hasReachedLowerThreshold = () => {
            return this.getHeight() <= this.getLowerHeightThreshold()
                && this.getWidth() <= this.getLowerWidthThreshold();
        };
        this.hasCollidedWithObstacleCar = (obstacleCar) => {
            let isUserCarLeftofObstacleCar = this.getXCoordinate() < obstacleCar.getXCoordinate();
            let isXCoordinatesIntersecting = isUserCarLeftofObstacleCar
                ? Math.abs(this.xCoordinate - obstacleCar.getXCoordinate()) <= Viper.MIN_DIFF_BETW_XCOORD_FROM_LEFT
                : Math.abs(this.xCoordinate - obstacleCar.getXCoordinate()) <= Viper.MIN_DIFF_BETW_XCOORD_FROM_RIGHT;
            let isYCoordinatesIntersecting = Math.abs(obstacleCar.getYCoordinate() - this.yCoordinate) <= 90;
            if (this.isFlying || this.isFalling) {
                return false;
            }
            return isXCoordinatesIntersecting && isYCoordinatesIntersecting;
        };
        this.increaseSideSpeed = () => {
            this.turningSpeed += 0.01;
        };
        this.grow = () => {
            this.height += .5;
            this.width += .5;
        };
        this.shrink = () => {
            this.height -= .5;
            this.width -= .5;
        };
        this.getHeight = () => {
            return this.height;
        };
        this.getWidth = () => {
            return this.width;
        };
        this.getLives = () => {
            let string = "";
            for (let i = 0; i < this.lives; i++) {
                string += "❤️";
            }
            return string;
        };
        this.getXCoordinate = () => this.xCoordinate;
        this.getYCoordinate = () => this.yCoordinate;
        this.getScore = () => this.score;
        this.getMovementDirection = () => this.movementDirection;
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
        this.upperHeightThreshold = 120;
        this.upperWidthThreshold = 140;
        this.lowerHeightThreshold = 100;
        this.lowerWidthThreshold = 120;
        this.isFlying = false;
        this.isFalling = false;
        this.height = 100;
        this.width = 120;
        this.lives = Viper.INITAL_LIVES;
        this.xCoordinate = Viper.INITIAL_X;
        this.yCoordinate = Viper.INITIAL_Y;
        this.score = Viper.INITIAL_SCORE;
        this.turningSpeed = Viper.INITIAL_TURNING_SPEED;
        this.movementDirection = Viper.INITIAL_MOVEMENT_DIRECTION;
    }
}
Viper.WIDTH = 120;
Viper.HEIGHT = 100;
Viper.INITIAL_X = canvas.width / 2;
Viper.INITIAL_Y = canvas.height - 100;
Viper.INITIAL_SCORE = 0;
Viper.INITAL_LIVES = 3;
Viper.INITIAL_MOVEMENT_DIRECTION = "";
Viper.INITIAL_TURNING_SPEED = 4;
Viper.VIPER_IMG_SOURCES = "https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg";
Viper.NEW_IMAGE_ELEMENT = document.createElement("img");
Viper.X_COORDINATE_MINUS_CAR_WIDTH = -40;
Viper.MIN_DIFF_BETW_XCOORD_FROM_LEFT = 42;
Viper.MIN_DIFF_BETW_XCOORD_FROM_RIGHT = 30;
