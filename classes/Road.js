import canvas from "./Canvas";
export default class Road {
    constructor({ startingXCoordinate, startingYCoordinate }) {
        this.getImage = () => this.image;
        this.getXCoordinate = () => this.xCoordinate;
        this.getYCoordinate = () => this.yCoordinate;
        this.image = this.newRoad();
        this.xCoordinate = startingXCoordinate;
        this.yCoordinate = startingYCoordinate;
    }
    resetYCoordinate(isFrontRoad) {
        if (isFrontRoad) {
            this.yCoordinate = 0;
        }
        else {
            this.yCoordinate = canvas.height * -1;
        }
    }
    updateYCoordinate() {
        this.yCoordinate += Road.speed;
    }
    newRoad() {
        const newImage = new Image();
        newImage.src = "https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg";
        return newImage;
    }
    static increaseSpeed() {
        Road.speed += 0.001;
    }
}
Road.speed = 8;
Road.bottomYCoordinate = 700;
Road.WIDTH = 100;
Road.HEIGHT = 120;
