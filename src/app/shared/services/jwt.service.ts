import { Injectable } from '@angular/core';

import { User} from '../models';

@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['stockPortfolio-token'];
  }


  saveToken(user: User) {
    window.localStorage['stockPortfolio-token'] = user.token;
     window.localStorage.setItem('stockPortfolio-token', JSON.stringify({ username: user.userName, token: user.token }));
  }

  destroyToken() {
    window.localStorage.removeItem('stockPortfolio-token');
  }

}
