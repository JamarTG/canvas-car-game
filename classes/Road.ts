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

    getImage = () => {
        return this.image;
    }

    getXCoordinate = () => {    
        return this.xCoordinate;
    }

    getYCoordinate = () => {
        return this.yCoordinate;

    }

    resetYCoordinate = (isFrontRoad:boolean) => {
        if(isFrontRoad){
            this.yCoordinate = 0;
        }
        else{
            this.yCoordinate = canvas.height * -1;
        }
        
    }

    updateYCoordinate = () => {
        this.yCoordinate += Road.speed;
    }

    newRoad = () => {

        let newImage = new Image();
        newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';

        return newImage; 
    
    }

    static increaseSpeed = () => {
        Road.speed += 0.001;
    }

   
}