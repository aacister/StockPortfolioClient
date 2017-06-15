import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {StocksService} from './user.service';
import {Stock } from '../models';
import {environment } from '../../../environments/environment';

@Injectable()
export class StockStore{
	stocks: Observable<Stock[]>;
	private _stocks: BehaviorSubject<StockQuote[]>;
	private dataStore: {stocks: Stock[] };
	
	constructor(private stocksService: StocksService){
		this.dataStore = { stocks: [] });
		this._stocks = new BehaviorSubject([]);
		this.stocks = this._stocks.asObservable();
		
	}
	
	loadData(){
		this.stocksService.getStocks()
			.subscribe(
				stocks => {
					this.dataStore.stocks = stocks;
					this._stocks.next(Object.assign({}, this.dataStore).stocks);
				},
				err => console.log("Error retrieving stocks");
			};
					
	}

	addStock(stock: Stock) {
    		this.stocksService.createStock(stock)
      		.subscribe(stockAdded => {
      		this.dataStore.stocks.push(stockAdded);
      		this._stocks.next(Object.assign({}, this.dataStore).stocks);
    		}, error => console.log('Could not add stock.'
		));
  	}

	deleteStock(symbol: string) {
    		this.stocksService.delete(symbol).subscribe(response => {
      			this.dataStore.stocks.forEach((s, i) => {
        		if (s.symbol === symbol) {
          			this.dataStore.stocks.splice(s, 1);
        		}
      		});

      		this._stocks.next(Object.assign({}, this.dataStore).stocks);
    		}, error => console.log('Could not delete stock.'));
  	}
	
}