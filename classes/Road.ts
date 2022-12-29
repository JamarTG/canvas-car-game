import { SwipeableDrawer } from "../../../../../node_modules/@material-ui/core/index";
import canvas from "./Canvas";
export default class Road {

    img : HTMLImageElement;
    x : number;
    y : number;
    

	static speed: number = 13;
    static end:number  = 700;

    constructor(startX : number , startY : number) {
        
        this.img = this.newRoad();
        
        this.x = startX;
        this.y = startY;

        
        
    }

    newRoad = () => {

        let newImage = new Image();
        newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';

        return newImage; 
    
    }

   
}