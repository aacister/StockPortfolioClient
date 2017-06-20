import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { AuthService }  from '../../shared/services/auth.service';
import { User }         from '../../shared/models/user.model';
import { Credentials }  from '../../shared/models/credentials.model';



@Component({
    templateUrl: 'auth-register.component.html'
})
export class RegisterComponent  {

    form: FormGroup;
    user = new User('', '', '', '', '', [], []);
	credentials = new Credentials('','');

	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
	private _authService: AuthService
    ) {
		this.form = fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			zip:[]
		});
	}
    


     register(){
	this._authService.register(this.credentials)
	.subscribe((user: User)=> {
		//mark as pristine
		this._router.navigate(['home']);
	});
	
     };


}