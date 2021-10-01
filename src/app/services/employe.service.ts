import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { EmployeModel } from '../models/employe.model';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  documentToDomainObject = (_: any) => {
    const object = _.payload.val();
    object.id = _.payload.key;
    return object;
  }  

  constructor(private db: AngularFireDatabase) { }



  addEmploye(employe: EmployeModel): any {
    return this.db.list('/employes').push(employe);
  }


  getAllEmployes(){
    return this.db.list('/employes', ref =>
    ref.orderByChild('nameEmploye')).snapshotChanges().pipe(
      map(actions => actions.map(this.documentToDomainObject))
    );
  }







  getEmploye(idEmpl: string): any {

    return this.db.object('/employes/' + idEmpl).valueChanges();

  }




  updateEmploye(employe: EmployeModel, idEmpl: string){
    return this.db.object('/employes/' + idEmpl).update(employe);
  }





  removeEmploye(idEmpl: string){
    return this.db.object('/employes/' + idEmpl).remove();
  }
}
