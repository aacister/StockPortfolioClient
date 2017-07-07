import { RouterModule  }     from '@angular/router';
import { HomeComponent } from './home.component';
import  { HomeAuthResolver } from './home-auth-resolver.service';

export const homeRouting = RouterModule.forChild([
    {
		  path: '',
		  component: HomeComponent,
      resolve: {
        isAuthenticated: HomeAuthResolver
      }
	  }
]);
