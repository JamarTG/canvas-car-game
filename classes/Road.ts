import canvas from "./Canvas";

export default class Road {

    private image : HTMLImageElement;
    private xCoordinate : number;
    private yCoordinate : number;
    

	static speed: number = 8;
    static bottomYCoordinate:number  = 700;

    static WIDTH = 100;
    static HEIGHT = 120 ;
    
    constructor(startingXCoordinate : number , startingYCoordinate : number) {
        
        this.image = this.newRoad();
        
        this.xCoordinate = startingXCoordinate;
        this.yCoordinate = startingYCoordinate;

        
        
    }

    getImage = () => this.image;

    getXCoordinate = () => this.xCoordinate;
    getYCoordinate = () => this.yCoordinate;

    setYCoordinate = (yCoordinateValue : number) => this.yCoordinate = yCoordinateValue;
    setXCoordinate = (xCoordinateValue : number) => this.xCoordinate = xCoordinateValue
    

    resetYCoordinate = (isFrontRoad:boolean) =>  this.yCoordinate = isFrontRoad ? 0 : canvas.height  * -1;
        

    updateYCoordinate = () => this.yCoordinate += Road.speed;
    

    newRoad = () => {

        let newImage = new Image();
        newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';

        return newImage; 
    
    }

    static increaseSpeed = () => {
        Road.speed += 0.01;
    }

   
}