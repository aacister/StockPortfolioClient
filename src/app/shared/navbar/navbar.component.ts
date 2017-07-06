import { Component, OnInit } from '@angular/core';

import {
User,
AuthService,
ShowAuthedDirective
} from '../../shared';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  currentUser: User;

  ngOnInit() {
    this.authService.currentUser.subscribe(
      (userData) => {

        this.currentUser = userData;
      }
    )

  }

  logout(){
    this.authService.logout();
  }


}
