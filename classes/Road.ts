import canvas from "./Canvas";

export default class Road {
    private image : HTMLImageElement;
    private xCoordinate : number;
    private yCoordinate : number;
	static speed: number = 8;
    
    static BOTTOM_Y_COORDINATE:number  = 700;
    static WIDTH = 100;
    static HEIGHT = 120 ;
    static FRONT_ROAD_ORIGINAL_Y = 0;
    static BACK_ROAD_ORIGINAL_Y = canvas.height * -1;
    static IMG_SOURCE = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';

    constructor(startingXCoordinate : number , startingYCoordinate : number) {
        this.image = this.newRoad();
        this.xCoordinate = startingXCoordinate;
        this.yCoordinate = startingYCoordinate;
    }

    getImage = () => this.image;

    getXCoordinate = () => this.xCoordinate;

    getYCoordinate = () => this.yCoordinate;

    resetYCoordinate = (isFrontRoad:boolean) => 
    this.yCoordinate = isFrontRoad 
    ? Road.FRONT_ROAD_ORIGINAL_Y 
    : Road.BACK_ROAD_ORIGINAL_Y

    updateYCoordinate = () => this.yCoordinate += Road.speed;
    
    newRoad = () => {
        let newImage = new Image();
        newImage.src = Road.IMG_SOURCE;
        return newImage; 
    }

    static increaseSpeed = () => Road.speed += 0.005;  
}