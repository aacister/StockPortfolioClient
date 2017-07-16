import { NgModule }            from '@angular/core';

import { SharedModule} from '../shared';
import { StockAddComponent } from './stock-add/stock-add.component';

@NgModule({
    imports: [
		SharedModule
    ],
    declarations: [
       StockAddComponent

    ],
    exports: [
      StockAddComponent
    ],
    providers: []
})
export class StockModule {
}
