import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

import {NewsSourcesService} from '../services/newssources.service';
import {NewsSource } from '../models';
import {environment } from '../../../environments/environment';

@Injectable()
export class NewsSourceStore{
	newsSources: Observable<NewsSource[]>;
	private _newsSources: BehaviorSubject<NewsSource[]>;
	private dataStore: {newsSources: NewsSource[] };

	constructor(private newsSourcesService: NewsSourcesService){
		this.dataStore = { newsSources: [] };
		this._newsSources = new BehaviorSubject([]);
		this.newsSources = this._newsSources.asObservable().distinctUntilChanged();

	}

	loadData(){
		this.newsSourcesService.getNewsSources()
			.subscribe(
				(sources) => {
					this.dataStore.newsSources = sources;
					this._newsSources.next(Object.assign({}, this.dataStore).newsSources);
				},
				err => console.log("Error retrieving news sources."));

	}

	addNewsSource(source: NewsSource) {
    		this.newsSourcesService.addNewsSource(source)
      		.subscribe((source: NewsSource) => {
			this.dataStore.newsSources.push(source);
      		this._newsSources.next(Object.assign({}, this.dataStore).newsSources);
    		}, error => console.log('Could not add news source.'
		));
  	}


}
