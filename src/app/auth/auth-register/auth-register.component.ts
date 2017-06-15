import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { AuthService } 				 from './shared/services/auth.service';
import { User }                                  from './shared/models/user.model';



@Component({
    templateUrl: 'auth-register.component.html'
})
export class RegisterComponent implements OnInit {

    form: FormGroup;
    user = new User();


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
	var result = this._authService.register(this.user);
	result.subscribe(x => {
		//mark as pristine
		this._router.navigate(['home']);
	});
	
     };


}