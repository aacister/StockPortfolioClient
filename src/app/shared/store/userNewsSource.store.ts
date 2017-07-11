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
		this.userNewsSources = this._userNewsSources.asObservable().distinctUntilChanged();

	}

	loadData(username: string){
		this.usersService.getNewsSources(username)
			.subscribe(
				quotes => {
					this.dataStore.userNewsSources = quotes;
					this._userNewsSources.next(Object.assign({}, this.dataStore).userNewsSources);
				},
				err => console.log("Error retrieving user stock quotes")

			);

	}

	addNewsSource(username: string, sourceId: string) {
    		this.usersService.addNewsSource(username, sourceId)
      		.subscribe((source: NewsSource) => {
			this.dataStore.userNewsSources.push(source);
      		this._userNewsSources.next(Object.assign({}, this.dataStore).userNewsSources);
    		}, error => console.log('Could not add news source.'
		));
  	}

		deleteNewsSource(username: string, sourceId: string){
			this.usersService.removeNewsSource(username, sourceId)
			.subscribe(response => {
						this.dataStore.userNewsSources.forEach((s, i) => {
						if (s.id === sourceId) {
								this.dataStore.userNewsSources.splice(i, 1);
						}
					});

					this._userNewsSources.next(Object.assign({}, this.dataStore).userNewsSources);
				}, error => console.log('Could not delete news source.'));
		}

}
