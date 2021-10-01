import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AdminModel } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

documentToDomainObject = (_: any) => {
  const object = _.payload.val();
  object.id = _.payload.key;
  return object;
}  

  constructor(private db: AngularFireDatabase) { }


  
  addAdmin(admin: AdminModel): any {
    return this.db.list('/admin').push(admin);
  }


  getAllAdmin(){
    return this.db.list('/admin', ref =>
    ref.orderByChild('nameProp')).snapshotChanges().pipe(
      map(actions => actions.map(this.documentToDomainObject))
    );
  }







  getAdmin(idAdmin: string): any {

    return this.db.object('/admin/' + idAdmin).valueChanges();

  }




  updateAdmin(admin: AdminModel, idAdmin: string){
    return this.db.object('/admin/' + idAdmin).update(admin);
  }







  removeAdmin(idAdmin: string){
    return this.db.object('/admin/' + idAdmin).remove();
  }
}
