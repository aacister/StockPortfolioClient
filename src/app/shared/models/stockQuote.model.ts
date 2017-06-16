export class StockQuote {
	symbol: string;
	name: string;
	lastPrice: number;
	percentChange: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;



	constructor(symbol: string, 
			name: string, 
			lastPrice: number,
			percentChange: number,
			open: number,
			high: number,
			low: number,
			close: number,
			volume: number){
		this.symbol = symbol;
		this.name = name;
		this.percentChange = percentChange;
		this.open = open;
		this.high = high;
		this.low = low;
		this.close = close;
		this.volume = volume;

	}
}