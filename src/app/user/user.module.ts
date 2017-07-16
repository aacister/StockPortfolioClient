import { NgModule }            from '@angular/core';

import {userRouting } 			from './user.routing';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserStockHomeComponent } from './user-stock/user-stock-home/user-stock-home.component';
import { UserStockListComponent }    from './user-stock/user-stock-list/user-stock-list.component';
import { StockModule } from '../stock';
import { SharedModule} from '../shared';

@NgModule({
    imports: [

		SharedModule,
    StockModule,
		userRouting
    ],
    declarations: [
    UserHomeComponent,
    UserStockHomeComponent,
		UserStockListComponent

    ],
    providers: []
})
export class UserModule {
}
