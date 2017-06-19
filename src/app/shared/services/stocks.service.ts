import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { ApiService} from './api.service';
import { Stock} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class StocksService{
	
	constructor(private apiService: ApiService,
			private _http: Http){
	}


	getStocks(): Observable<any>{
		return this._http.get(`${environment.api_url}/stocks`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res) => {
				let stocks = (<Object[]>res.json())
					.map((stock: any) => 
						new Stock(
					stock.symbol,
					stock.name,
					stock.logoUrl
					));
				return stocks;
			})
			
			
	}

	deleteStock(symbol: string): Observable<any>{
		return this._http.delete(
			`${environment.api_url}/stocks/{symbol}`,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors);
			
	}

	createStock(stock: Stock): Observable<any>{
		return this._http.post(
			`${environment.api_url}/stocks/`, stock,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map((stock: any) => {
				return new (
					stock.symbol,
					stock.name,
					stock.logoUrl
					);
			});
				

	}



}