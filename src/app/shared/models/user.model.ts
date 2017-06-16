import {Stock} from './stock.model';
import {NewsSource} from './newsSource.model';

export class User {
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
	zip: string;
	stocks: Array<Stock>;
	news: Array<NewsSource>;


	constructor(username: string, password: string, first, last, zip, stocks, news){
		this.userName = username;
		this.password = password;
		this.firstName = first;
		this.lastName = last;
		this.zip = zip;
		this.stocks = stocks;
		this.news = news;

	}
}