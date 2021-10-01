import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AdministrateurModel } from '../models/administrateur.model';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {


  documentToDomainObject = (_: any) => {
    const object = _.payload.val();
    object.id = _.payload.key;
    return object;
  }  
  
    constructor(private db: AngularFireDatabase) { }
  
  
    
    addAdministrateur(administrateur: AdministrateurModel): any {
      return this.db.list('/admin').push(administrateur);
    }
  
  
}
