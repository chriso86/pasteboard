export class ImageClass {
    url: string;
    xPos: number;
    yPos: number;
    height: number;
    width: number;
    type: string;

    constructor(url: string, xPos: number, yPos: number, height: number, width: number) {
        this.url = url;
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        this.width = width;
        this.type = 'image';
    }
}