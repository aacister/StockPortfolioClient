import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

import {UsersService} from '../services/users.service';
import {StockQuote } from '../models';
import {environment } from '../../../environments/environment';

@Injectable()
export class UserStockQuoteStore{
	userQuotes: Observable<StockQuote[]>;
	private _userQuotes: BehaviorSubject<StockQuote[]>;
	private dataStore: {userQuotes: StockQuote[] };

	constructor(private usersService: UsersService){
		this.dataStore = { userQuotes: [] };
		this._userQuotes = new BehaviorSubject([]);
		this.userQuotes = this._userQuotes.asObservable();

	}

	loadData(username: string){
		console.log('loadData: ' + username);
		this.usersService.getStockQuotes(username)
			.subscribe(
				quotes => {
					console.log('quotes: ' + JSON.stringify(quotes));
					this.dataStore.userQuotes = quotes;
					this._userQuotes.next(Object.assign({}, this.dataStore).userQuotes);
				},
				err => console.log("Error retrieving user stock quotes")

			);
	}

	addStockQuote(username: string, symbol: string) {
    		this.usersService.addStockQuote(username, symbol)
      		.subscribe((quote: StockQuote) => {
			this.dataStore.userQuotes.push(quote);
      		this._userQuotes.next(Object.assign({}, this.dataStore).userQuotes);
    		}, error => console.log('Could not add user quote.'
		));
  	}

		deleteStockQuote(username: string, symbol: string){
			this.usersService.removeStockQuote(username, symbol)
			.subscribe(response => {

						this.dataStore.userQuotes.forEach((s, i) => {
						if (s.symbol === symbol) {
								this.dataStore.userQuotes.splice(i, 1);
						}
					});

					this._userQuotes.next(Object.assign({}, this.dataStore).userQuotes);
				}, error => console.log('Could not delete user quote.'));
		}

}
