import { Component } from '@angular/core';
import { SvgMoveDirective } from '../directives/directive.svg.move';
import { ImageClass } from '../classes/class.image';
import { NoteClass } from '../classes/class.note';

@Component({
    selector: 'pb-board',
    templateUrl: './templates/board.html',
    directives: [
        SvgMoveDirective
    ]
})

export class BoardOrganism {
    entities: any = [];
    
    constructor() {
        var url = '../images/planet.jpg';
        var height = 300;
        var width = 400;
        var text = 'This is a test block of text this is a test block of text'
            + ' this is a test block of text this is a test block of text'
            + ' this is a test block of text this is a test block of text';
        
        console.log(text.length);

        var image = new ImageClass(url, 0, 0, height, width);
        var image2 = new ImageClass(url, 500, 0, height, width);
        var note = new NoteClass(0, 0, 300, 100, text);
        
        this.entities.push(image);
        this.entities.push(note);
    }
 }