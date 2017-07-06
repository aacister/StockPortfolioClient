import { RouterModule  }    		  from '@angular/router';

import { RegisterComponent } 		  from './auth-register/auth-register.component';
import { LoginComponent }    		  from './auth-login/auth-login.component';
import {NoAuthGuard } 						from '../shared/services/no-auth-guard.service';


export const authRouting = RouterModule.forChild([
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [NoAuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [NoAuthGuard]
	}
]);
