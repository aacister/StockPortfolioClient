import { NgModule }            from '@angular/core';

import {navBarRouting } 			from './navbar.routing';
import { NavBarComponent } from './navbar.component';
import { NavBarAuthResolver } from './navbar-auth-resolver.service';

@NgModule({

    declarations: [
    NavBarComponent
    ],
    imports: [
		navBarRouting
    ],
    providers: [NavBarAuthResolver]
})
export class NavBarModule {
}
