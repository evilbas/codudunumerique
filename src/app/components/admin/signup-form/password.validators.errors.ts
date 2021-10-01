import { AbstractControl } from "@angular/forms";

export class PasswordValidatorsErrors {

    static passwordsShouldMatch(control: AbstractControl) {

        let password = control.get('password');
        let passwordConfirm = control.get('passwordConfirm');

        if (password?.value !== passwordConfirm?.value)
            return { passwordsShouldMatch: true };
        else 
            return null;

    }
}