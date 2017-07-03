import { NgModule }            from '@angular/core';

import {stockRouting } 			from './stock.routing';
//import { StockQuoteComponent }    from './stock-quote/stock-quote.component';

import { SharedModule} from '../shared';

@NgModule({
    imports: [

		SharedModule
	//	stockRouting
    ],
    declarations: [
     //   StockQuoteComponent

    ],
    providers: []
})
export class StockModule {
}
