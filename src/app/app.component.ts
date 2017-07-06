import { Component, OnInit } from '@angular/core';

import {AuthService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    this.authService.populate();
  }
}
