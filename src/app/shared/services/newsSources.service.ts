import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

import { HelperService} from './helper.service';
import { NewsSource} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class NewsSourcesService{
	
	constructor(private helperService: HelperService,
			private _http: Http
	}

	getNewsSource(sourceId: string): Observable<any>{
		return this._http.get(`${environment.api_url}/newssources/{sourceId}`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map((source: any) => {
				return new NewsSource(
					source.id,
					source.name,
					source.description
					);
			});	
	}

	getNewSources(): Observable<any>{
		return this._http.get(`${environment.api_url}/newssources`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map(source => {
				let result = Array<NewsSource> = [];
				sources.forEach((source) => {
					result.push(new NewsSource(
						source.id,
						source.name,
						source.description
					));
				});
				return result;
			});
			
	}



	addNewsSource(source: NewsSource): Observablae<any>{
		return this._http.post(
			`${environment.api_url}/newssources/`, source,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map((newSource: any) => {
				return new NewsSource(
					newsource.id,
					newSource.name,
					newSource.description

					);
			});	
	}



}