import { RouterModule  }    		  from '@angular/router';

import { RegisterComponent } 		  from './auth-register.component';
import { LoginComponent }    		  from './auth-login.component';

export const authRouting = RouterModule.forChild([
	{ 
		path: 'register', 
		component: RegisterComponent
	},
	{ 
		path: 'login', 
		component: LoginComponent

	}
]);