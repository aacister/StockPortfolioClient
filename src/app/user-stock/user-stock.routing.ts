import { RouterModule  }     from '@angular/router';


import { UserStockHomeComponent } from './user-stock-home/user-stock-home.component';
//import { UserNewsHomeComponent } from './user-news/user-news-home/user-news-home.component';


export const userStockRouting = RouterModule.forChild([
   /* { path: 'user:username', 
	  component: UserHomeComponent
		,
	  children:
	  [ */
		{
			path: 'stocks',
			component: UserStockHomeComponent
			
		}
		/*
		{
			path: 'news',
			component: UserNewsHomeComponent
		}
	  ]
		
	}*/
]);