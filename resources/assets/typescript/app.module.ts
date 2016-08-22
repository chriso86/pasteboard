// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Material design modules for Angular 2
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';

// Paste board components
import { MainTemplate } from './templates/main';
import { NavigationOrganism } from './organisms/organism.navigation';
import { BoardOrganism } from './organisms/organism.board';
import { routing, appRoutingProviders } from './app.routing';
import { environment  } from './app.environment';

// Directives
import { SvgMoveDirective } from './directives/directive.svg.move';

// Debug
import { enableProdMode } from '@angular/core';

if (environment.production) {
    enableProdMode();
}

@NgModule({
    declarations:   [
                        MainTemplate,
                        SvgMoveDirective,
                        NavigationOrganism,
                        BoardOrganism
                    ],
    imports:        [
                        BrowserModule,
                        // Forms
                        FormsModule,
                        // Routing
                        routing,
                        // Material Design
                        MdCoreModule, 
                        MdButtonModule,
                        MdCardModule,
                        MdCheckboxModule,
                        MdGridListModule,
                        MdIconModule,
                        MdInputModule,
                        MdListModule,
                        MdMenuModule,
                        MdProgressBarModule,
                        MdProgressCircleModule,
                        MdRadioModule,
                        MdSidenavModule,
                        MdSlideToggleModule,
                        MdTabsModule,
                        MdToolbarModule
                    ],
    providers:      [
                        // Routing
                        appRoutingProviders,
                        // Material Design
                        MdCoreModule,
                        MdButtonModule,
                        MdCardModule,
                        MdCheckboxModule,
                        MdGridListModule,
                        MdIconModule,
                        MdInputModule,
                        MdListModule,
                        MdMenuModule,
                        MdProgressBarModule,
                        MdProgressCircleModule,
                        MdRadioModule,
                        MdSidenavModule,
                        MdSlideToggleModule,
                        MdTabsModule,
                        MdToolbarModule
                    ],
    bootstrap:      [ MainTemplate ]
})

export class AppModule {
}