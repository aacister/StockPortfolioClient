export class StockQuote {
	symbol: string;
	name: string;
	lastPrice: double;
	percentChange: double;
	open: double;
	high: double;
	low: double;
	close: double;
	volume: int;



	constructor(symbol: string, 
			name: string, 
			lastPrice: double,
			percentChange: double,
			open: double,
			high: double,
			low: double,
			close: double,
			volume: int){
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