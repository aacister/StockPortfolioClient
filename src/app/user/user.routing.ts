import { RouterModule  }     from '@angular/router';

import { UserHomeComponent} from './user-home/user-home.component';
import { UserStockHomeComponent } from './user-stock/user-stock-home/user-stock-home.component';

export const userRouting = RouterModule.forChild([
    { path: 'user:username',
	  component: UserHomeComponent
		,
	  children:
	  [
  		{
  			path: 'stocks',
  			component: UserStockHomeComponent

  		},
      {
        path: 'news',
        component: UserStockHomeComponent
      }

	  ]

	}
]);
