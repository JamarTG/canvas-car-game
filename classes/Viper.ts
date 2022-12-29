import canvas from "./Canvas.js";

export default class Viper {
    
    x : number;
    y : number;
    img : HTMLImageElement;
    score : number;
    turningSpeed : number;


    constructor () {
        
        this.x = canvas.width/ 2;
        this.y = 580;

        this.img  = this.createImage();
        this.score = 0;

        this.turningSpeed = 4;
    }

    createImage = () => {
        let newImage = new Image();
        newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';

        return newImage; 
    
    }

    isOnEdge = () => this.x <= 0 || this.x >= canvas.width;
}

