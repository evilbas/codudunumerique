import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

form: FormGroup | any;
  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
                this.form = this.fb.group({
                  email: [],
                  password: []
                });
               }

  SignIn(){
    this.auth.SignIn(this.form?.value.email, this.form?.value.password);
  }

  GoogleAuth(){
    this.auth.login();
  }


}
