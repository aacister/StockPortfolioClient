import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models';
import { AuthService } from '../../shared/services';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  currentUser: User;
  isAuthenticated: boolean = false;

  ngOnInit() {
    this.authService.currentUser.subscribe(
      (userData) => {
        console.log('here');
        this.currentUser = userData;
      }
    )

    this.authService.isAuthenticated.subscribe(
        (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      }
    )

  }

  logout(){
    this.authService.logout();
  }


}
