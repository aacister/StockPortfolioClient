export class StockQuote {
	symbol: string;
	name: string;
	lastPrice: number;
	percentChange: number;
	current: string;
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
		this.current = (percentChange >0) ? (open * (percentChange*.01)).toFixed(2) : (open -(open * (percentChange *.01))).toFixed(2);
		this.open = open;
		this.high = high;
		this.low = low;
		this.close = close;
		this.volume = volume;

	}
}
