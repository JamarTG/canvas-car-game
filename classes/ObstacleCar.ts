import canvas from "./Canvas.js";

export default class ObstacleCar {
	private xCoordinate: number;
	private yCoordinate: number;
	private speed: number;

	static src = "";

	constructor() {
		this.xCoordinate = Math.ceil(Math.random()*canvas.width) - 5;
		this.yCoordinate = -400;
		this.speed = 3;
	}

	getXCoordinate = () => {
		return this.xCoordinate;
	};

	getYCoordinate = () => {
		return this.yCoordinate;
	};

	getSpeed = () => this.speed;

	increaseSpeed = () => this.speed += 0.001;  

	generateRandomCarPosition = () => {
		this.yCoordinate = -400;
		this.xCoordinate =  Math.ceil(Math.random() * 420) + 10;
	};
  
	move = () => {
		this.yCoordinate += this.speed;
	};
}
