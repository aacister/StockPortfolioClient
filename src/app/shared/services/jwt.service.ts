import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['stockPortfolio-token'];
  }

  saveToken(token: String) {
    window.localStorage['stockPortfolio-token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('stockPortfolio-token');
  }

}
