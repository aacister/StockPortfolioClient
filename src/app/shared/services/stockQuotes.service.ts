import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

import { HelperService} from './helper.service';
import { StockQuote} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class StockQuotesService{
	
	constructor(private helperService: HelperService,
			private _http: Http
	}

	getStockQuote(symbol: string): Observable<any>{
		return this._http.get(`${environment.api_url}/stockquotes/{symbol}`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map((quote: any) => {
				return new StockQuote(
					quote.symbol,
					quote.name,
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