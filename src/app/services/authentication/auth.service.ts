import { Injectable, NgZone } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


import * as firebase from "firebase/app";

import {Observable, of} from "rxjs/";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import { AppUser } from 'src/app/models/app-user.model';
import { UserService } from '../users/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$: Observable<firebase.default.User> | any;

userData: any;

  constructor(private afAuth: AngularFireAuth,
              private route: ActivatedRoute,
              private router: Router,
              private afs: AngularFirestore,
              private userService: UserService,
              private ngZone: NgZone) {
    this.user$ = this.afAuth.authState;

  }


  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());
  }

  logout(){
    localStorage.removeItem('returnUrl');
    return this.afAuth.signOut();
  }




  get appUser$(): Observable<AppUser>{
    return this.user$.pipe(
      switchMap((user: any) => {
        if (user) return this.userService.getUser(user.uid);
        return of(null);
      })
    )}





      /**
       * OTHER SYSTEM AUTHENTICATION
       */

      
      // SIGN IN WITH EMAIL AND PASSWORD

/*       SignIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['dashboard']);
            });
          }).catch((error) => {
            window.alert(error.message)
          })
      } */

      SignUp(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
          .then((result) => {
            this.SendVerificationMail(); // Sending email verification notification, when new user registers
            this.SetUserData(result.user);
          }).catch((error) => {
            window.alert(error.message)
          })
      }


      SignIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
          .then((result: any) => {
            if (result.user.emailVerified !== true) {
              this.SendVerificationMail();
              window.alert('Please validate your email address. Kindly check your inbox.');
            } else {
              this.ngZone.run(() => {
                this.router.navigate(['home']);
              });
            }
            this.SetUserData(result.user);
          }).catch((error) => {
            window.alert(error.message)
          })
      }


      SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: AppUser = {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          imageUser: user.photoURL,
          emailVerified: user.emailVerified,
          isAdmin: user.isAdmin
        }
        return userRef.set(userData, {
          merge: true
        })
      }



      async SendVerificationMail() {
        await (await this.afAuth.currentUser)?.sendEmailVerification()
        .then(() => {
          //this.router.navigate(['<!-- enter your route name here -->']);
          window.alert("Verifier votre mail");
        })
      }



  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }








    // Reset Forggot password
    ForgotPassword(passwordResetEmail: string) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }


  





}
