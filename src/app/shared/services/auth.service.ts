import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {Router } from '@angular/router';

import { UsersService} from './users.service';
import { ApiService} from './api.service';
import { JwtService } from './jwt.service';
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
		 private _router: Router){
	}

  populate() {
   let token = this.jwtService.getToken();
   console.log('Token: ' + token);

   if (token) {
     let objToken = JSON.parse(token);
     console.log('Username: ' + objToken.username);
     console.log('User token: ' + objToken.token);
     let username = objToken.username;
     this._http.get(`${environment.api_url}/users/${username}`,
     {headers: this.apiService.setHeaders()})
     .catch(this.apiService.formatErrors)
     .map((res: Response) => res.json())
    . map((user: any) => {
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
     .subscribe((user:User) => this.setAuth(user),
        err => this.purgeAuth()
      );
   }
   else
   {
    this.purgeAuth();
   }
  }


	setAuth(user: User) {
     this.jwtService.saveToken(user);
     this.currentUserSubject.next(user);
     this.isAuthenticatedSubject.next(true);
   }

	 purgeAuth(){
    console.log('Purging auth.');
    this.jwtService.destroyToken();
    this.currentUserSubject.next(new User('','','', '','',[],[]));
    this.isAuthenticatedSubject.next(false);

  }

	getCurrentUser() {
		return this.currentUserSubject.value;
	}

	register(credentials: Credentials): Observable<User>
	{
		return this._http.post(`${environment.api_url}/auth/register`, JSON.stringify(credentials),
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
		.map((user: User) => {
			this.setAuth(user);
			return user;
		});
  }

	login(credentials: Credentials):Observable<User>
	{
		return this._http.post(`${environment.api_url}/auth/login`, JSON.stringify(credentials),
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
		.map((user: User) => {
			this.setAuth(user);
			return user;
		});
	}

	logout() {
		this.purgeAuth();
    this._router.navigate(['login']);
	}

}
