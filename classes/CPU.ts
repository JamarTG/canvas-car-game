import CarType from "../assets/CarType.js";
import canvas from "./Canvas.js";

export default class CPUCar{
  
    x : number;
    y : number;
    speed : number;
    
    static src : string = ''; 

    constructor(){

        this.x = Math.ceil(Math.random() * canvas.width) - 50;
        this.y = -400;
        this.speed = 3;
   
    }

 
}