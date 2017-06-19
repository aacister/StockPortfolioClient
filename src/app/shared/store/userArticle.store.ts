import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

import {UsersService} from '../services/users.service';
import {Article } from '../models';
import {environment } from '../../../environments/environment';

@Injectable()
export class UserArticleStore{
	userArticles: Observable<Article[]>;
	private _userArticles: BehaviorSubject<Article[]>;
	private dataStore: {userArticles: Article[] };
	
	constructor(private usersService: UsersService){
		this.dataStore = { userArticles: [] };
		this._userArticles = new BehaviorSubject([]);
		this.userArticles = this._userArticles.asObservable();
		
	}
	
	loadData(username: string){
		this.usersService.getArticles(username)
			.subscribe(
				articles => {
					this.dataStore.userArticles = articles;
					this._userArticles.next(Object.assign({}, this.dataStore).userArticles);
				},
				err => console.log("Error retrieving user articles")
				
			);
					
	}
	
}