import { ModuleWithProviders, NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import {homeRouting } 			from './home.routing';
import { SharedModule } from '../shared';


@NgModule({
    imports: [
	  homeRouting,
    SharedModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [HomeAuthResolver]
})
export class HomeModule {
}
