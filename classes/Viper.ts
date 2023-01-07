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
	static INITIAL_Y = 580;

	constructor() {
		this.lives = 3;

		this.xCoordinate = Viper.INITIAL_X;
		this.yCoordinate = Viper.INITIAL_Y;

		this.score = 0;

		this.turningSpeed = 4;
		this.movementDirection = "";
	}

	createImage = () => {
		const newImage = document.createElement("img");

		newImage.src = "https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg";

		return newImage;
	};

	isOnEdge = () =>
		this.xCoordinate <= -40 || this.xCoordinate >= canvas.width - Viper.WIDTH/2;

	hasCollidedWithObstacleCar = (obstacleCar: ObstacleCar) => {
		return (
			Math.abs(this.xCoordinate - obstacleCar.getXCoordinate()) <= 45 &&
      Math.abs(obstacleCar.getYCoordinate() - this.yCoordinate) <= 90
		);
	};

	getLives = () => {
		let string = "";

		for (let i = 0; i < this.lives; i++) {
			string += "❤️";
		}

		return string;
	};

	getXCoordinate = () => {
		return this.xCoordinate;
	};
	getYCoordinate = () => {
		return this.yCoordinate;
	};

	getScore = () => {
		return this.score;
	};

	getMovementDirection = () => {
		return this.movementDirection;
	};

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
