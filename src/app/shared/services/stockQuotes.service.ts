import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { ApiService} from './api.service';
import { StockQuote} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class StockQuotesService{
	
	constructor(private apiService: ApiService,
			private _http: Http){
	}

	getStockQuote(symbol: string): Observable<any>{
		return this._http.get(`${environment.api_url}/stockquotes/{symbol}`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map((quote: any) => {
				return new StockQuote(
					quote.symbol,
					quote.name,
					quote.lastPrice,
					quote.percentChange,
					quote.open,
					quote.high,
					quote.low,
					quote.close,
					quote.volume
				
					);
			});	
	}

	

}