import { Injectable } from '@angular/core';
import { Headers, Http }       from '@angular/http'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HelperService {
	setHeaders(): Headers {
    		let headersConfig = {
      		'Content-Type': 'application/json',
      		'Accept': 'application/json'
    		};

		return new Headers(headersConfig);
	}

	formatErrors(error: any){
		return Observable.throw(error.json());
	}

}