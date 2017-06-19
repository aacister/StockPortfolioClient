import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { ApiService} from './api.service';
import { NewsSource} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class NewsSourcesService{
	
	constructor(private apiService: ApiService,
			private _http: Http){
	}


	getNewsSources(): Observable<any>{
		return this._http.get(`${environment.api_url}/newssources`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res) => {
				let sources = (<Object[]>res.json())
					.map((source: any) => 
						new NewsSource(source.id, source.name, source.description));
				return sources;
			});
	}



	addNewsSource(source: NewsSource): Observable<any>{
		return this._http.post(
			`${environment.api_url}/newssources/`, source,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map((source: any) => {
				return new (
					source.id,
					source.name,
					source.description
					);
			});
	}



}