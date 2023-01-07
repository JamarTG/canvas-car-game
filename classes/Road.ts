import canvas from "./Canvas";

export default class Road {

	private image : HTMLImageElement;
	private xCoordinate : number;
	private yCoordinate : number;

	static speed = 8;
	static bottomYCoordinate  = 700;

	static WIDTH = 100;
	static HEIGHT = 120 ;
    
	constructor({ startingXCoordinate, startingYCoordinate }: { startingXCoordinate: number; startingYCoordinate: number; }) {
        
		this.image = this.newRoad();
        
		this.xCoordinate = startingXCoordinate;
		this.yCoordinate = startingYCoordinate;
	}

	getImage = () => this.image;
    

	getXCoordinate = () => this.xCoordinate;
    

	getYCoordinate = () => this.yCoordinate;
    

	resetYCoordinate(isFrontRoad:boolean): void {
		if(isFrontRoad){
			this.yCoordinate = 0;
		}
		else{
			this.yCoordinate = canvas.height * -1;
		}
        
	}

	updateYCoordinate(): void {
		this.yCoordinate += Road.speed;
	}

	newRoad(): HTMLImageElement {

		const newImage = new Image();
		newImage.src = "https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg";

		return newImage; 
    
	}

	static increaseSpeed(): void{
		Road.speed += 0.001;
	}

   
}