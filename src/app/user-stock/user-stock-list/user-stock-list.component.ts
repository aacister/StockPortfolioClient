import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {User, StockQuote, UserStockQuoteStore} from '../../shared';


@Component({
	selector: 'user-stock-list',
	templateUrl: './user-stock-list.component.html',
  styleUrls: ['./user-stock-list.component.css']
})

export class UserStockListComponent implements OnInit{
 private contactList: Observable<Stock[]>;
 private userStockQuoteList: StockQuote[] = [];

	constructor(
		private userStockQuoteStore: UserStockQuoteStore
	) {

	}

	ngOnInit() {

		loadStocks();

	}

	private loadStocks(){
        this.userStockQuoteStore.loadData();
    }



}
