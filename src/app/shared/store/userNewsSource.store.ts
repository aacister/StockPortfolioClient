import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

import {UsersService} from '../services/users.service';
import {NewsSource } from '../models';
import {environment } from '../../../environments/environment';

@Injectable()
export class UserNewsSourceStore{
	userNewsSources: Observable<NewsSource[]>;
	private _userNewsSources: BehaviorSubject<NewsSource[]>;
	private dataStore: {userNewsSources: NewsSource[] };

	constructor(private usersService: UsersService){
		this.dataStore = { userNewsSources: [] };
		this._userNewsSources = new BehaviorSubject([]);
		this.userNewsSources = this._userNewsSources.asObservable();

	}

	loadData(username: string){
		this.usersService.getNewsSource(username)
			.subscribe(
				quotes => {
					this.dataStore.userQuotes = quotes;
					this._userQuotes.next(Object.assign({}, this.dataStore).userQuotes);
				},
				err => console.log("Error retrieving user stock quotes")

			);

	}

	addNewsSource(string username, string sourceId) {
    		this.newsSourcesService.addNewsSource(username, sourceId)
      		.subscribe((source: NewsSource) => {
			this.dataStore.newsSources.push(source);
      		this._newsSources.next(Object.assign({}, this.dataStore).newsSources);
    		}, error => console.log('Could not add news source.'
		));
  	}

		deleteNewsSource(string username, string sourceId){
			this.newsSourceService.removeNewsSource(username, sourceId)
			.subscribe(response => {
						this.dataStore.newsSources.forEach((s, i) => {
						if (s.sourceId === sourceId) {
								this.dataStore.newsSources.splice(i, 1);
						}
					});

					this._newsSources.next(Object.assign({}, this.dataStore).newsSources);
				}, error => console.log('Could not delete news source.'));
		}

}
