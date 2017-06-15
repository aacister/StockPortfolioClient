import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {HelperService} from './helper.service';
import {StockQuote } from '../models';
import {environment } from '../../../environments/environment';

@Injectable()
export class StockQuoteStore{
	private _quotes: BehaviorSubject<StockQuote[]>;
	quotes: Observable<StockQuote[]>;
	private dataStore; {quotes: StockQuote[] };
	
	constructor(private helperService: HelperService){
		this.dataStore = { quotes: [] });
		this._quotes = new BehaviorSubject([]);
		this.quotes = this._quotes.asObservable();
		this.loadInitialData();
	}
	
	loadInitialData(){
		this.helperService.getAllStockQuotes()
			.subscribe(
				res => {
					json = (res.json());
					let quotes = json.map((quote: any) =>
						new StockQuote({
							symbol: quote.symbol, 
							name: quote.name,
							percentChange: quote.percentChange,
							open: quote.open,
							high: quote.high,
							low: quote.low,
							close: quote.close,
							volume: quote.volume
							}));
					this.dataStore.quotes = quotes;
					this._quotes.next(Object.assign({}, this.dataStore).quotes);
				},
				err => console.log("Error retrieving stock quotes");
			};
					
	}
	
}