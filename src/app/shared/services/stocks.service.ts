import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

import { HelperService} from './helper.service';
import { Stock} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class StocksService{
	
	constructor(private helperService: HelperService,
			private _http: Http
	}

	getStock(symbol: string): Observable<any>{
		return this._http.get(`${environment.api_url}/stocks/{symbol}`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
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
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map(stocks => {
				let result = Array<Stock> = [];
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
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json());
	}

	createStock(stock: Stock): Observablae<any>{
		return this._http.post(
			`${environment.api_url}/stocks/`, stock,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
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