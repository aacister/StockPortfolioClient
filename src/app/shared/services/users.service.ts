import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

import { HelperService} from './helper.service';
import { User, Stock, UserStock} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService{
	
	constructor(private helperService: HelperService,
			private _http: Http
	}

	//User routes

	getUser(username: string): Observable<any>{
		return this._http.get(`${environment.api_url}/users/{username}`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map((user: any) => {
				return new User(
					user.userName,
					user.password,
					user.firstName,
					user.lastName,
					user.zip,
					user.stocks,
					user.news
					);
			});	
	}

	getUsers(): Observable<any>{
		return this._http.get(`${environment.api_url}/users`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map(users => {
				let result = Array<User> = [];
				users.forEach((user) => {
					result.push(new User(
						user.userName,
						user.password,
						user.firstName,
						user.lastName,
						user.zip,
						user.stocks,
						user.news
					));
				});
				return result;
			});
			
	}

	deleteUser(username: string): Observable<any>{
		return this._http.delete(
			`${environment.api_url}/users/{username}`,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json());
	}

	addUser(user: User): Observablae<any>{
		return this._http.post(
			`${environment.api_url}/users/`, user,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map((newUser: any) => {
				return new User(
					newUser.userName,
					newUser.password,
					newUser.firstName,
					newUser.lastName,
					newUser.zip,
					newUser.stocks,
					newUser.news
					);
			});	
	}

	updateUser(user: User) : Observable<any>{
		return this._http.put(
			`${environment.api_url}/users/{user.userName}`,
			user,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helpersService.formatErrors)
			.map((res: Response) => res.json())
			.map((updatedUser: any) => {
				return new User(
					updatedUser.userName,
					updatedUser.password,
					updatedUser.firstName,
					updatedUser.lastName,
					updatedUser.zip,
					updatedUser.stocks,
					updatedUser.news
					);
			});	
	}

	//User stock routes

	getStock(username: string, symbol: string) : Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/stocks/{symbol}`,
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

	getStocks(username: string) : Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/stocks`,
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

	getStockQuotes(username: string): Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/stockquotes`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map(quotes => {
				let result = Array<StockQuote> = [];
				quotes.forEach((quote) => {
					result.push(new StockQuote(
						quote.symbol, 
						quote.name,
						quote.percentChange,
						quote.open,
						quote.high,
						quote.low,
						quote.close,
						quote.volume
					));
				});
				return result;
			});
	}

	

	addStock(username: string, symbol: string) : Observable<any>
	{
		return this._http.post(
			`${environment.api_url}/users/{username}/stocks/{symbol}`, {},
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map((addStock: any) => {
				return new Stock(
					addStock.symbol,
					addStock.name,
					addStock.logoUrl
					);
			});	
	}

	removeStock(username: string, symbol: string) : Observable<any>
	{
		return this._http.delete(
			`${environment.api_url}/users/{username}/stocks/{symbol}`,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json());
	}

	//User NewsSource routes

	getNewsSource(username: string, sourceId: string) : Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/newssources/{sourceId}`,
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

	addNewsSource(username: string, sourceId: string) : Observable<any>
	{
		return this._http.post(
			`${environment.api_url}/users/{username}/newssources/{sourceId}`, {},
			{ headers: this.helperService.setHeaders()})
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

	removeNewsSource(username: string, sourceId: string) : Observable<any>
	{
		return this._http.delete(
			`${environment.api_url}/users/{username}/newssources/{sourceId}`,
			{ headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json());
	}

	//User Article routes
	getArticles(username: string, sourceId: string) : Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/newssources/{sourceId}/articles`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map(articles => {
				let result = Array<Article> = [];
				articles.forEach((article) => {
					result.push(new Article(
						article.author,
						article.title,
						article.description,
						article.url,
						article.publishedAt,
						article.source
					));
				});
				return result;
			});
	}

	getArticles(username: string): Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/stockquotes`,
			{headers: this.helperService.setHeaders()})
			.catch(this.helperService.formatErrors)
			.map((res: Response) => res.json())
			.map(quotes => {
				let result = Array<StockQuote> = [];
				quotes.forEach((quote) => {
					result.push(new StockQuote(
						quote.symbol, 
						quote.name,
						quote.percentChange,
						quote.open,
						quote.high,
						quote.low,
						quote.close,
						quote.volume
					));
				});
				return result;
			});
	}


}