import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../shared';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

 constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {}


    private isAuthenticated: boolean;
    private username: string

    ngOnInit() {
        this.authService.isAuthenticated.subscribe(
          (authenticated) => {
            this.isAuthenticated = authenticated;

            if (!authenticated)
              this.setPageTo('login');
            else
            {
              this.route.params.subscribe(params =>
              {
                console.log('Params: ' + JSON.stringify(params));
                this.username = params['username'];
                console.log('Username: ' + this.username);

              });
            }
          }
        );
    }

    setPageTo(type: string = '') {
        if (type === 'login' && !this.isAuthenticated) {
          this.router.navigate(['login']);
          return;
        }
      }

}
