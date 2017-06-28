import { RouterModule  }    		  from '@angular/router';

import { RegisterComponent } 		  from './auth-register/auth-register.component';
import { LoginComponent }    		  from './auth-login/auth-login.component';
import {AuthGuard } 						from '../shared/services/auth-guard.service';

export const authRouting = RouterModule.forChild([
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [AuthGuard]
	}
]);
