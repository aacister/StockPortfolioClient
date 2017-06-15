import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import {Router } from '@angular/router';

import { UserService} from './user.service';
import { HelperService} from './helper.service';
import { User, Credential} from '../models';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {
	
	

	constructor(private userService: UserService,
		 private helperService: HelperService,
		 private _http: Http,
		 private _window: Window,
		 private _router: Router){
	}

	

	
	saveToken(token) {
		this._window.localStorage['stockPortfolio-token'];
	}

	getToken(){
		return this._window.localStorage['stockPortfolio-token'];
	}

	isLoggedIn(){
		let token = this.getToken();
		if(token){
			let payload = JSON.parse(_window.atob(token.split('.')[1]));

			return payload.exp > Date.now() /1000;
		
		}
		else
			return false;
	}

	getCurrentUser() {
		if(this.isLoggedIn())
		{
			let token = this.getToken();
			let payload = JSON.parse($window.atob(token.split('.')[1]));

			let id = payload._id
			return this.userService.getUser(id).then(function(res){
				return res.data;
			});
		}
	}

	register(user: User){
		return this._http.post(`${environment.api_url}/register`, JSON.stringify(user),
		{headers: this.helperService.setHeaders()})
		.catch(this.helperService.formatErrors)
		.map((res: Response) => res.json())
		.subscribe((data) => this.saveToken(data.accessToken));
    	}

	login(credential: Credential)
	{
		return this._http.post(`${environment.api_url}/login`, JSON.stringify(credential),
		{headers: this.helperService.setHeaders()})
		.catch(this.helperService.formatErrors)
		.map((res: Response) => res.json())
		.subscribe((data) => this.saveToken(data.accessToken));
	}

	logout() {
		this._window.localStorage.removeItem('stockPortfolio-token');
		this._router.navigate(['login']);
		
	}

    	
}