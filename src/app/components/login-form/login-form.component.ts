import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {


form: FormGroup;  
  constructor(private fb: FormBuilder, private auth: AuthService) {
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



  onSignIn(){
    this.auth.SignIn(this.form?.value.username, this.form?.value.password);
  }


  

  GoogleAuth(){
    return this.auth.login();
  }

}
