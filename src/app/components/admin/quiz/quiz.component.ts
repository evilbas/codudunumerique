import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'src/app/models/app-user.model';
import { CategoryModel } from 'src/app/models/category.model';
import { QuizModel } from 'src/app/models/quiz.model';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

categories: CategoryModel[] | any;

allQuiz: QuizModel[] = []
filteredQuiz: QuizModel[] = [];




score: number = 0;

isVerified: boolean = false;

responses: any;

form: FormGroup | any;

appUser: AppUser | any;


nomCategory: string | any;
  constructor(private categoryService: CategoryService,
              private quizService: QuizService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private fb: FormBuilder) {
                this.categories = this.categoryService.allCategories();

                this.auth.appUser$.subscribe((appUser) => {
                   this.appUser = appUser;
                    this.form = this.fb.group({
                        question: [''],
                        response: ['', ],
                        email: [appUser.email],
                        name: [appUser.name],
                        score: []
                    });

                });


                
           
                this.quizService.getAllQuiz().subscribe(quiz => {
                  this.allQuiz = quiz;

                  this.route.queryParamMap.subscribe(param => {
                    this.nomCategory = param.get('category');
  
                    this.filteredQuiz = (this.nomCategory) ? 
                      this.allQuiz.filter((quiz: any) => quiz.category.toLowerCase() === this.nomCategory) : 
                      this.allQuiz;
                  });
                }); 



              }

  ngOnInit(): void {



  }




 getResponse({response}: any){
    if (response.responseString === (this.form?.value.response)){
       this.score += response.score;
       this.form.value.score = response.score;
       return this.quizService.addResponse(this.form?.value);
    }else{
      this.form.value.score = this.score;
      return this.quizService.addResponse(this.form?.value);
    }
 }

}
