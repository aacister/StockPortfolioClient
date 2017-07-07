import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { AuthService } 	from '../../shared/services/auth.service';
import { Credentials }  from '../../shared/models/credentials.model';
import { User }         from '../../shared/models/user.model';
import {Errors } from '../../shared/models/errors.model';


@Component({
    selector: 'auth-register',
    templateUrl: 'auth-register.component.html'
})
export class RegisterComponent{

    form: FormGroup;
    credentials = new Credentials('','');
    isSubmitting = false;
    errors: Errors = new Errors();

	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
	       private _authService: AuthService
    ) {
		this.form = fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

  register(){
       this.isSubmitting = true;
       this.errors = new Errors();

       const credentials = this.form.value;

  	    this._authService.register(credentials)
  	     .subscribe((user: User) => {
  		       this._router.navigateByUrl('/')
  	      }, (err) => {
            this.errors = err;
            this.isSubmitting = false;
          });

     };


}
