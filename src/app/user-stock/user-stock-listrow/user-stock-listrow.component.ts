import { Component, Input } from '@angular/core';
import { StockQuote} from '../../shared';

@Component({
 selector: 'user-stock-listrow',
 templateUrl: './user-stock-listrow.component.html',
 styleUrls: ['./user-stock-listrow.component.css']
})

export class UserStockListRowComponent {

 constructor() {}

	@Input() quote: StockQuote;
}
