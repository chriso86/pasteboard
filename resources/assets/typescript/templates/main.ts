import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationOrganism } from '../organisms/organism.navigation';
import { BoardOrganism } from '../organisms/organism.board';

@Component({
    selector: 'pb-app',
    templateUrl: './templates/main.html'
})

export class MainTemplate {
    constructor() {
        console.debug('MAIN LOADED');
    }
}