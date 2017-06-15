@Injectable()
export class Helper {
	setHeaders(): Headers {
    		let headersConfig = {
      		'Content-Type': 'application/json',
      		'Accept': 'application/json'
    		};

		return new Headers(headersConfig);
	}
}