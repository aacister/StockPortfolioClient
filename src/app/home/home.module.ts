import { ModuleWithProviders, NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import {homeRouting } 			from './home.routing';
import { HomeAuthResolver } from './home-auth-resolver.service';


@NgModule({
    imports: [
	  homeRouting
    ],
    declarations: [
      HomeComponent
    ],
    providers: [HomeAuthResolver]
})
export class HomeModule {
}
