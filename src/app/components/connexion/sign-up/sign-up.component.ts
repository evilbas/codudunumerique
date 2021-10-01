import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

  form: FormGroup | any;
  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
        this.form = this.fb.group({
          email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(254), Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
      });
    }  


  getField = (field: string) => {
    return this.form.get(field)
  }


  onSignUp(){
    this.auth.SignUp(this.form?.value.email, this.form?.value.password);
  }


  GoogleAuth(){
    return this.auth.login();
  }

}
