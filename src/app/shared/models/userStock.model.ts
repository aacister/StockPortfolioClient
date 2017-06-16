export class UserStock {
	symbol: string;
	name: string;
	lastPrice: number;
	percentChange: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;
	logoUrl: string;


	constructor(symbol: string, 
			name: string, 
			lastPrice: number,
			percentChange: number,
			open: number,
			high: number,
			low: number,
			close: number,
			volume: number,
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