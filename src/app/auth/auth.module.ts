import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { RegisterComponent }      from './auth-register/auth-register.component';
import { LoginComponent }      from './auth-login/auth-login.component';
import {NoAuthGuard } 						from '../shared/services/no-auth-guard.service';
import {authRouting } 			from './auth.routing';
import { SharedModule} from '../shared';

@NgModule({
    imports: [
		SharedModule,
		authRouting
    ],
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    providers: [
    NoAuthGuard
    ]
})
export class AuthModule {
}
