import { NgModule }            from '@angular/core';

import {userRouting } 			from './user.routing';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserStockHomeComponent } from './user-stock/user-stock-home/user-stock-home.component';
import { UserStockListComponent }    from './user-stock/user-stock-list/user-stock-list.component';
import { UserStockRowComponent } from './user-stock/user-stock-row/user-stock-row.component';

import { SharedModule} from '../shared';

@NgModule({
    imports: [

		SharedModule,
		userRouting
    ],
    declarations: [
    UserHomeComponent,
    UserStockHomeComponent,
		UserStockListComponent,
    UserStockRowComponent

    ],
    providers: []
})
export class UserModule {
}
