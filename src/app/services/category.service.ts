import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private db: AngularFireDatabase) { }




  allCategories(){
    return this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
  }



}
