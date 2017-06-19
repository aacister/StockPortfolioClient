import {Stock} from './stock.model';
import {NewsSource} from './newsSource.model';

export class User {
	userName: string;
	token: string;
	firstName: string;
	lastName: string;
	zip: string;
	stocks: Array<Stock>;
	news: Array<NewsSource>;


	constructor(username, token, first, last, zip, stocks, news){
		this.userName = username;
		this.token = token;
		this.firstName = first;
		this.lastName = last;
		this.zip = zip;
		this.stocks = stocks;
		this.news = news;

	}
}
