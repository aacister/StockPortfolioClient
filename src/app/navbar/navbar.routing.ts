import { RouterModule  }     from '@angular/router';


import { UserStockHomeComponent } from './user-stock-home/user-stock-home.component';



export const navBarRouting = RouterModule.forChild([
   { path: '',
	  component: UserStockHomeComponent
	}
]);
