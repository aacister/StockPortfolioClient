import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {User, Stock, UsersService} from '../../shared';


@Component({
	selector: 'user-stock-list',
	templateUrl: './user-stock-list.component.html',
  styleUrls: ['./user-stock-list.component.css']
})

export class UserStockListComponent implements OnInit{
 private contactList: Observable<Stock[]>;
 private userStockList: Stock[] = [];

	constructor(
		private usersService: UsersService
	) {

	}

	ngOnInit() {

		loadStocks();

	}
	
	private loadStocks(){
        this.usersService.getStocks()
            .subscribe(stocks => this.userStockList = stocks);
    }



}