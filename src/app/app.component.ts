import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from './services/authentication/auth.service';
import { UserService } from './services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {

    this.auth.user$.subscribe((user: any) => {
      if (user) {
        this.userService.saveUser(user);
        let returnUrl = localStorage.getItem('returnUrl') || '/';
        this.router.navigateByUrl(returnUrl);
      }
    });
  }

}
