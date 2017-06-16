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

	getStock(symbol: string): Observable<any>{
		return this._http.get(`${environment.api_url}/stocks/{symbol}`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map((stock: any) => {
				return new Stock(
					stock.symbol,
					stock.name,
					stock.logoUrl
					);
			});	
	}

	getStocks(): Observable<any>{
		return this._http.get(`${environment.api_url}/stocks`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map(stocks => {
				let result = new Array<Stock>();
				stocks.forEach((stock) => {
					result.push(new Stock(
						stock.symbol,
						stock.symbol,
						stock.logoUrl
					));
				});
				return result;
			});
			
	}

	deleteStock(symbol: string): Observable<any>{
		return this._http.delete(
			`${environment.api_url}/stocks/{symbol}`,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json());
	}

	createStock(stock: Stock): Observable<any>{
		return this._http.post(
			`${environment.api_url}/stocks/`, stock,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map((newStock: any) => {
				return new Stock(
					newStock.symbol,
					newStock.name,
					newStock.logoUrl
					);
			});		

	}



}