import { Directive } from '@angular/core';
import { SvgMoveService } from '../services/service.svg.move';

@Directive({
    selector: '[svgMove]',
    inputs: ['svgMove'],
    host: {
        '(mousedown)': 'selectElement($event)',
        '(mousemove)': 'moveElement($event, entity)',
        '(mouseup)': 'deselectElement($event)',
        '(mouseout)': 'deselectElement($event)'
    },
    providers: [ 
        SvgMoveService
    ]
})

export class SvgMoveDirective {
    elements: Array<string> = [ 'text' ];

    constructor(private svgMoveService: SvgMoveService) {
        console.log('DIRECTIVE CONSTRUCTED');
    }

    selectElement(event: any): void {
        var selectedElement;
        
        // Store selected element
        this.svgMoveService.setSelectedElement(event.target);
        selectedElement = this.svgMoveService.getSelectedElement();

        if(this.elements.indexOf(selectedElement.nodeName) > -1) {
            this.svgMoveService.setSelectedElement(this.getMovableElement(selectedElement.parentElement));
        }

        console.log('SELECTED');

        // Set X and Y
        this.svgMoveService.setCurrentX(event.clientX);
        this.svgMoveService.setCurrentY(event.clientY);
        
        // Get selected element and apply element matrix
        var matrixCoords = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(',');
        
        for(let i in matrixCoords) {
            matrixCoords[i] = parseInt(matrixCoords[i]);
        }

        this.svgMoveService.setCurrentMatrix(matrixCoords);
    }

    // Move selected element on mouse move event
    moveElement(event: any, entity: any): void {
        var selectedElement = this.svgMoveService.getSelectedElement();
        var currentX = this.svgMoveService.getCurrentX();
        var currentY = this.svgMoveService.getCurrentY();
        var currentMatrix;

        console.log('MOVING');

        if(!selectedElement) return;
        
        var svgBoard = document.getElementById('svg-board');
        var maxX = svgBoard.clientWidth - selectedElement.width.baseVal.value;
        var maxY = svgBoard.clientHeight - selectedElement.height.baseVal.value;

        // Set difference of the position
        var differenceX = event.clientX - currentX;
        var differenceY = event.clientY - currentY;
        var currentXTransformation = this.svgMoveService.getCurrentMatrixValue(4);
        var currentYTransformation = this.svgMoveService.getCurrentMatrixValue(5);
        
        this.svgMoveService.setCurrentMatrixValue(4, (currentXTransformation + differenceX));
        this.svgMoveService.setCurrentMatrixValue(5, (currentYTransformation + differenceY));
        
        currentMatrix = this.svgMoveService.getCurrentMatrix();

        // Prevent moving outside viewport on top and left
        this.svgMoveService.setCurrentMatrixValue(4, currentMatrix[4] <= 0 ? 0 : currentMatrix[4]);
        this.svgMoveService.setCurrentMatrixValue(5, currentMatrix[5] <= 0 ? 0 : currentMatrix[5]);

        // Prevent moving outside viewport on bottom and right
        this.svgMoveService.setCurrentMatrixValue(4, currentMatrix[4] >= maxX ? maxX : currentMatrix[4]);
        this.svgMoveService.setCurrentMatrixValue(5, currentMatrix[5] >= maxY ? maxY : currentMatrix[5]);

        entity.xPos = this.svgMoveService.getCurrentMatrixValue(4);
        entity.yPos = this.svgMoveService.getCurrentMatrixValue(5);

        var newMatrixAttribute = 'matrix(' + currentMatrix.join(',') + ')';

        selectedElement.setAttributeNS(null, 'transform', newMatrixAttribute);

        this.svgMoveService.setCurrentX(event.clientX);
        this.svgMoveService.setCurrentY(event.clientY);
    }

    deselectElement(event: any): void {
        console.log('DESELECTED');

        this.svgMoveService.resetCurrentState();
    }

    getMovableElement(element: any) {
        for(var child of element.children) {
            for(var attr of child.attributes) {
                if(attr.name === 'transform' && attr.nodeValue.match(/[matrix]/g)) {
                    return child;
                }
            }
        }
    }
}