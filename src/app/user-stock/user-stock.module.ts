import { NgModule }            from '@angular/core';

import {userStockRouting } 			from './user-stock.routing';
import { UserStockHomeComponent } from './user-stock-home/user-stock-home.component';
import { UserStockListComponent }    from './user-stock-list/user-stock-list.component';
import { UserStockListRowComponent } from './user-stock-listrow/user-stock-listrow.component';
/*
import { UserStockAddComponent } from './user-stock/user-stock-add/user-stock-add';
import { UserNewsHomeComponent } from './user-news/user-news-home/user-news-home.component';
import { UserNewsListComponent } from './user-news/user-news-list/user-news-list.component';
import { UserNewsRowComponent } from './user-news/user-news-row/user-news-row.component;
import { UserNewsAddComponent } from './user-news/user-news-add/user-news-add.component';
*/
import { SharedModule} from '../shared';

@NgModule({
    imports: [

		SharedModule,
		userStockRouting
    ],
    declarations: [
  
        UserStockHomeComponent,
		UserStockListComponent
		/*
		UserStockRowComponent,
		UserStockAddComponent,
		UserNewsHomeComponent,
		UserNewsListComponent,
		UserNewsRowComponent,
		UserNewsAddComponent */
    ],
    providers: []
})
export class UserStockModule { 
}