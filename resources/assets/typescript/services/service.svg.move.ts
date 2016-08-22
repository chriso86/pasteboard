import { Injectable } from '@angular/core';

@Injectable()
export class SvgMoveService {
    private selectedElement: any;
    private currentX: any;
    private currentY: any;
    private currentMatrix: Array<number> = [];

    getSelectedElement() {
        return this.selectedElement;
    }

    setSelectedElement(element: any) {
        this.selectedElement = element;
    }

    getCurrentX() {
        return this.currentX;
    }

    setCurrentX(xPos: number) {
        this.currentX = xPos;
    }

    getCurrentY() {
        return this.currentY;
    }

    setCurrentY(yPos: number) {
        this.currentY = yPos;
    }

    getCurrentMatrix() {
        return this.currentMatrix;
    }

    setCurrentMatrix(matrix: any) {
        this.currentMatrix = matrix;
    }

    getCurrentMatrixValue(index: number) {
        return this.currentMatrix[index];
    }

    setCurrentMatrixValue(index: number, value: number) {
        this.currentMatrix[index] = value;
    }

    resetCurrentState() {
        this.selectedElement = false;
        this.currentX = 0;
        this.currentY = 0;
        this.currentMatrix.length = 0;
    }
}