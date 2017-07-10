import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, User } from '../shared';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 constructor(private router: Router,
    private authService: AuthService) {
}

private isAuthenticated: boolean;
private currentUser: User

ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        if (authenticated){

          this.authService.currentUser.subscribe(
            (userData) => {
              this.currentUser = userData;
              this.setPageTo('user', this.currentUser.userName);
            }
          )
          }
      }
    );


}

setPageTo(type: string = '', username: string = '') {
    if (type === 'user' && this.isAuthenticated && username.length > 0 ) {
      this.router.navigate(['user', username]);
      return;
    }
  }
}
