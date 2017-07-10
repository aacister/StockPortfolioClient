import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {User, StockQuote, UserStockQuoteStore} from '../../../shared';


@Component({
	selector: 'user-stock-list',
	templateUrl: './user-stock-list.component.html',
  styleUrls: ['./user-stock-list.component.css']
})

export class UserStockListComponent implements OnInit{
 private userStockQuoteList: StockQuote[] = [];

	constructor(
		private userStockQuoteStore: UserStockQuoteStore
	) {

	}

	ngOnInit() {

		this.loadStocks();

	}

	private loadStocks(){
				console.log('loading stocks.');
        this.userStockQuoteStore.loadData('aacister');
    }



}
