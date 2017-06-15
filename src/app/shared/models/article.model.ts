import {NewsSource} from './newsSource.model';

export class Article {
	author: string;
	title: string;
	description: string;
	url: string;
	publishedAt: string;
	source: NewsSource;


	constructor(author: string,
			 title: string,
			 description: string,
			 url: string,
			 publishedAt: string,
			 source: NewsSource
			){
		this.author = author;
		this.title = title;
		this.description = description;
		this.url = url;
		this.publishedAt = publishedAt;
		this.source = source;

	}
}