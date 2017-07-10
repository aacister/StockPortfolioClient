import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { ApiService} from './api.service';
import { User, Stock, UserStock, StockQuote, NewsSource, Article} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService{

	constructor(private apiService: ApiService,
			private _http: Http){
	}

	//User stock routes

	getStockQuotes(username: string): Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/${username}/stockquotes`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res) => {
				let quotes = (<Object[]>res.json())
					.map((quote: any) =>
						new StockQuote(
						quote.symbol,
						quote.name,
						quote.lastPrice,
						quote.percentChange,
						quote.open,
						quote.high,
						quote.low,
						quote.close,
						quote.volume
					));
				return quotes;
			});
	}

	addStockQuote(username: string, symbol: string) : Observable<any>
	{
		return this._http.post(
			`${environment.api_url}/users/{username}/stockquotes/{symbol}`, {},
			{ headers: this.apiService.setHeaders()})
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

	removeStockQuote(username: string, symbol: string) : Observable<any>
	{
		return this._http.delete(
			`${environment.api_url}/users/{username}/stockquotes/{symbol}`,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors);

	}



	//User NewsSource routes

	getNewsSources(username: string) : Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/newssources`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res) => {
				let sources = (<Object[]>res.json())
					.map((source: any) =>
						new NewsSource(
						source.id,
					source.name,
					source.description
					));
				return sources;
			});

	}

	addNewsSource(username: string, sourceId: string) : Observable<any>
	{
		return this._http.post(
			`${environment.api_url}/users/{username}/newssources/{sourceId}`, {},
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json())
			.map((source: any) => {
				return new NewsSource(
				source.id,
				source.name,
				source.description
					);
			});
	}

	removeNewsSource(username: string, sourceId: string) : Observable<any>
	{
		return this._http.delete(
			`${environment.api_url}/users/{username}/newssources/{sourceId}`,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors);

	}

	//User Article routes
	getArticles(username: string) : Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/articles`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res) => {
				let articles = (<Object[]>res.json())
					.map((article: any) =>
						new Article(
						article.author,
						article.title,
						article.description,
						article.url,
						article.publishedAt,
						article.source
					));
				return articles;
			});

	}

}
