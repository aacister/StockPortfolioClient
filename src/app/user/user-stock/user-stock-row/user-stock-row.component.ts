import { Component, Input } from '@angular/core';
import { StockQuote} from '../../../shared';

@Component({
 selector: 'user-stock-row',
 templateUrl: './user-stock-row.component.html'
})

export class UserStockRowComponent {

 constructor() {}

	@Input() quote: StockQuote;
}
