import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  form: FormGroup | any;
  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
                this.form = this.fb.group({
                  email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(254), Validators.email]]
                });
               }

  getField = (field: string) => {
    return this.form.get(field)
  }

  onResetPassword(){
    this.auth.ForgotPassword(this.form.value.email);
  }

}
