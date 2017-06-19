import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {Router } from '@angular/router';

import { UsersService} from './users.service';
import { ApiService, JwtService} from './api.service';
import { User, Credentials} from '../models';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {

 private currentUserSubject = new BehaviorSubject<User>(new User('','','', '','',[],[]));
 public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

 private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
 public isAuthenticated = this.isAuthenticatedSubject.asObservable();

	constructor(private usersService: UsersService,
		 private apiService: ApiService,
		 private jwtService: JwtService,
		 private _http: Http,
		 private _window: Window,
		 private _router: Router){
	}

	setAuth(user: User) {
     this.jwtService.saveToken(user.token);
     this.currentUserSubject.next(user);
     this.isAuthenticatedSubject.next(true);
   }

	 purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(new User('','','', '','',[],[]));
    this.isAuthenticatedSubject.next(false);
  }

	getCurrentUser() {
		return this.currentUserSubject.value;
	}

	register(credentials: Credentials)
	{
		return this._http.post(`${environment.api_url}/register`, JSON.stringify(credentials),
		{headers: this.apiService.setHeaders()})
		.catch(this.apiService.formatErrors)
		.map((res: Response) => res.json())
		.map((user: any) => {
			return new User(
				user.userName,
				user.token,
				user.firstName,
				user.lastName,
				user.zip,
				user.stocks,
				user.news
				);
		})
		.subscribe((user: User) => this.jwtService.setAuth(user));
  }

	login(credentials: Credentials)
	{
		return this._http.post(`${environment.api_url}/login`, JSON.stringify(credentials),
		{headers: this.apiService.setHeaders()})
		.catch(this.apiService.formatErrors)
		.map((res: Response) => res.json())
		.map((user: any) => {
			return new User(
				user.userName,
				user.token,
				user.firstName,
				user.lastName,
				user.zip,
				user.stocks,
				user.news
				);
		})
		.subscribe((user: User) => this.setAuth(user));
	}

	logout() {
		this.purgeAuth();

	}


}
