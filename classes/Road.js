import canvas from "./Canvas";
export default class Road {
    constructor(startingXCoordinate, startingYCoordinate) {
        this.getImage = () => this.image;
        this.getXCoordinate = () => this.xCoordinate;
        this.getYCoordinate = () => this.yCoordinate;
        this.resetYCoordinate = (isFrontRoad) => this.yCoordinate = isFrontRoad
            ? Road.FRONT_ROAD_ORIGINAL_Y
            : Road.BACK_ROAD_ORIGINAL_Y;
        this.updateYCoordinate = () => this.yCoordinate += Road.speed;
        this.newRoad = () => {
            let newImage = new Image();
            newImage.src = Road.IMG_SOURCE;
            return newImage;
        };
        this.image = this.newRoad();
        this.xCoordinate = startingXCoordinate;
        this.yCoordinate = startingYCoordinate;
    }
}
Road.speed = 8;
Road.BOTTOM_Y_COORDINATE = 700;
Road.WIDTH = 100;
Road.HEIGHT = 120;
Road.FRONT_ROAD_ORIGINAL_Y = 0;
Road.BACK_ROAD_ORIGINAL_Y = canvas.height * -1;
Road.IMG_SOURCE = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';
Road.increaseSpeed = () => Road.speed += 0.005;
