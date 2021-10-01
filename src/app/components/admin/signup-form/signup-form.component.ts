import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { PasswordValidatorsErrors } from './password.validators.errors';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

form: FormGroup | any;  
  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nameEnterprise: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      nameProp: ['',  [ Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      emailEnterprise: ['',  [ Validators.required, Validators.minLength(6), Validators.maxLength(254), Validators.email]],
      numTel: ['',  [ Validators.required, Validators.maxLength(10),]],
      numSiret: ['',  [ Validators.required, Validators.minLength(9), Validators.maxLength(14)]],
      address: ['',  [ Validators.required, Validators.minLength(10), Validators.maxLength(254)]],
      password: ['',  [ Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      imageUrl: ['',  [ , ]],
      passwordConfirm: ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    }, {
      validator: PasswordValidatorsErrors.passwordsShouldMatch
    });
   }

  getField = (field: string) => {
    return this.form.get(field)
  }




  addAdmin(){
    this.adminService.addAdmin(this.form.value);
  }
}
