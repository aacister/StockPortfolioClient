import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 constructor(private router: Router,
    private authService: AuthService) {
}

isAuthenticated: boolean;

ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        if (authenticated) {
          this.setPageTo('user');
        } else {
          this.setPageTo('all');
        }
      }
    );
}

setPageTo(type: string = '') {
    if (type === 'user' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }
  }
}
