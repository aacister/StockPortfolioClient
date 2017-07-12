import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import {User, StockQuote,  UserStockQuoteStore} from '../../../shared';


@Component({
	selector: 'user-stock-list',
	templateUrl: './user-stock-list.component.html',
  styleUrls: ['./user-stock-list.component.css']
})

export class UserStockListComponent implements OnInit{

 private username : string = '';
 private stockQuotes : Observable<StockQuote[]>;


	constructor(private route: ActivatedRoute,
     private router: Router,
		private userStockQuoteStore: UserStockQuoteStore
	) {
	}

	ngOnInit() {
		this.stockQuotes = this.userStockQuoteStore.userQuotes;
		this.route.parent.params.subscribe(params =>
		{
		  console.log('Params: ' + JSON.stringify(params));
			this.username = params['username'];
			console.log('Username: ' + this.username);
			this.loadStocks();

		});

	}

	loadStocks(){
        this.userStockQuoteStore.loadData(this.username);
    }

		delete(quote) {

	    this.userStockQuoteStore.deleteStockQuote(this.username, quote.symbol);
	  }

		add(event) {

  }

}
