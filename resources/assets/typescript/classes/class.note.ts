export class NoteClass {
    xPos: number;
    yPos: number;
    width: number;
    height: number;
    text: string;
    type: string;
    
    constructor(xPos: number, yPos: number, width: number, height: number, text: string) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.text = text;
        this.type = 'note';
    }
}