import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
	setHeaders(): Headers {
    		let headersConfig = {
      		'Content-Type': 'application/json',
      		'Accept': 'application/json'
    		};

		return new Headers(headersConfig);
	}
}