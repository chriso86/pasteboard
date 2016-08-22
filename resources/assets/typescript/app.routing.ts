import { Routes, RouterModule } from '@angular/router';
import { BoardOrganism } from './organisms/organism.board';

const appRoutes: Routes = [
    { 
        path: '', 
        component: BoardOrganism
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);