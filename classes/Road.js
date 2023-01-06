import canvas from "./Canvas";
export default class Road {
    constructor(startingXCoordinate, startingYCoordinate) {
        this.getImage = () => {
            return this.image;
        };
        this.getXCoordinate = () => {
            return this.xCoordinate;
        };
        this.getYCoordinate = () => {
            return this.yCoordinate;
        };
        this.resetYCoordinate = (isFrontRoad) => {
            if (isFrontRoad) {
                this.yCoordinate = 0;
            }
            else {
                this.yCoordinate = canvas.height * -1;
            }
        };
        this.updateYCoordinate = () => {
            this.yCoordinate += Road.speed;
        };
        this.newRoad = () => {
            let newImage = new Image();
            newImage.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';
            return newImage;
        };
        this.image = this.newRoad();
        this.xCoordinate = startingXCoordinate;
        this.yCoordinate = startingYCoordinate;
    }
}
Road.speed = 8;
Road.bottomYCoordinate = 700;
Road.WIDTH = 100;
Road.HEIGHT = 120;
Road.increaseSpeed = () => {
    Road.speed += 0.001;
};
