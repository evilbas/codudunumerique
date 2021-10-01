import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

import * as firebase from "firebase/app";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

documentToDomainObject = (_: any) => {
  const object = _.payload.val();
  object.id = _.payload.key;
  return object;
}

  constructor(private db: AngularFireDatabase) { }

  saveUser(user: firebase.default.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      imageUser: user.photoURL
    });
  }

  getUser(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }



  getAllUsers(){
    return this.db.list('/users').snapshotChanges().pipe(
      map(actions => actions.map(this.documentToDomainObject))
    );
  }
}