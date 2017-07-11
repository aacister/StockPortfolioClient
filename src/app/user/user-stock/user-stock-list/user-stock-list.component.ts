import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import {User, StockQuote, UserStockQuoteStore} from '../../../shared';


@Component({
	selector: 'user-stock-list',
	templateUrl: './user-stock-list.component.html',
  styleUrls: ['./user-stock-list.component.css']
})

export class UserStockListComponent implements OnInit{
 private userStockQuoteList : Observable<StockQuote[]> = [];
 private username : string
 

	constructor(private route: ActivatedRoute,
     private router: Router,
		private userStockQuoteStore: UserStockQuoteStore
	) {

	}

	ngOnInit() {
	this.userStockQuoteList = this.userStockQuoteStore.userQuotes;
	this.route.params.subscribe(params =>
	{
		this.username = params['username'];
		console.log('Username: ' + this.username);
		this.loadStocks();

	});



		this.loadStocks();

	}

	private loadStocks(){

				console.log('loading stocks.');
        this.userStockQuoteStore.loadData(this.username);
    }



}
