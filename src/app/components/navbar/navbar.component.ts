import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/app-user.model';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

title: string = "Code du numérique";
  
    appUser: AppUser | any
    constructor(private auth: AuthService, private router: Router) {
      this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    }

  ngOnInit(): void {
  }


  onLogout(){
    this.auth.logout();
    return this.router.navigateByUrl('/login');
  }

}
