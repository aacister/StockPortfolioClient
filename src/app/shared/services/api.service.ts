import { Injectable } from '@angular/core';
import { Headers, Http }       from '@angular/http'
import { Observable } from 'rxjs/Rx';

import {JwtService} from './jwt.service';

@Injectable()
export class ApiService {

 constructor(
 	private http: Http,
	private jwtService: JwtService
 ){}

	setHeaders(): Headers {
    		let headersConfig = {
      		'Content-Type': 'application/json',
      		'Accept': 'application/json'
    		};

				if(this.jwtService.getToken()){
					headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
				}

				return new Headers(headersConfig);
	}

	formatErrors(error: any){
		return Observable.throw(error.json());
	}

}
