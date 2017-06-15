export class UserStock {
	symbol: string;
	name: string;
	lastPrice: double;
	percentChange: double;
	open: double;
	high: double;
	low: double;
	close: double;
	volume: int;
	logUrl: string;


	constructor(symbol: string, 
			name: string, 
			lastPrice: double,
			percentChange: double,
			open: double,
			high: double,
			low: double,
			close: double,
			volume: int,
			logoUrl: string){
		this.symbol = symbol;
		this.name = name;
		this.percentChange = percentChange;
		this.open = open;
		this.high = high;
		this.low = low;
		this.close = close;
		this.volume = volume;
		this.logoUrl = logoUrl;

	}
}