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

	//User routes

	getUser(username: string): Observable<any>{
		return this._http.get(`${environment.api_url}/users/{username}`,
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
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
			{headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res) => {
				let users = (<Object[]>res.json())
					.map((user: any) => 
						new User(
						user.userName,
						user.password,
						user.firstName,
						user.lastName,
						user.zip,
						user.stocks,
						user.news
					));
				return users;
			});	
	}

	deleteUser(username: string): Observable<any>{
		return this._http.delete(
			`${environment.api_url}/users/{username}`,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
			.map((res: Response) => res.json());
	}

	addUser(user: User): Observable<any>{
		return this._http.post(
			`${environment.api_url}/users/`, user,
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
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
			{ headers: this.apiService.setHeaders()})
			.catch(this.apiService.formatErrors)
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

	getStockQuotes(username: string): Observable<any>
	{
		return this._http.get(`${environment.api_url}/users/{username}/stockquotes`,
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
			.catch(this.apiService.formatErrors);	
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