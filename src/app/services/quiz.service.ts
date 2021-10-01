import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { QuizModel } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

quiz = [
  { idQuiz: 1, questionAsk: 'A propos des données personnelles', content: 'Les données personnelles sont à proprement parler, tous ce qui vous qualifie, que ce soit....', response: true, idCategory: 1, isVerified: false},
  { idQuiz: 2, questionAsk: 'A propos de la Sécurité Informatique', content: 'La sécurité a une importance capitale....', response: false, idCategory: 2, isVerified: true},
  { idQuiz: 3, questionAsk: 'A propos des réseaux informatique', content: 'La cybersécurité et la cyberdéfense sont à l\'ordre du jour....', response: [{int: ["Tous les deux mois", "tous les trois mois"]}], idCategory: 1, isVerified: false},
  { idQuiz: 4, questionAsk: 'A propos des données personnelles', content: 'La cybersécurité et la cyberdéfense sont à l\'ordre du jour....', response: [{reA: "Reponse A", reB: "ReponseB"}], idCategory: 3, isVerified: true},
  { idQuiz: 5, questionAsk: 'A propos des attaques', content: 'Les attaques sont elles nuisibles....', response: ['A', 'B', 'C'], idCategory: 1, isVerified: true},
];

documentToDomainObject = (_: any) => {
  const object = _.payload.val();
  object.id = _.payload.key;
  return object;
}

  constructor(private db: AngularFireDatabase) { }


  get Allquiz(): any {
    return this.quiz;
  }


  allQuiz(){
    return this.quiz;
  }


  getAllQuiz(){
    return this.db.list('/quiz', ref =>
    ref.orderByChild('response')).snapshotChanges().pipe(
      map(actions => actions.map(this.documentToDomainObject))
    );
  }




  addQuiz(quiz: QuizModel): any {
    return this.db.list('/quiz').push(quiz);
  }



  addResponse(response: any): any {
    return this.db.list('/responses').push(response);
  }





  getAllResponse(){
    return this.db.list('/responses', ref =>
    ref.orderByChild('response')).snapshotChanges().pipe(
      map(actions => actions.map(this.documentToDomainObject))
    );
  }
}
