import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { AuthService } from '../../services';

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
