import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

categories: any;

  form: FormGroup;  
  constructor(private fb: FormBuilder, 
              private auth: AuthService, 
              private categoryService: CategoryService,
              private quizService: QuizService) {
    this.categoryService.allCategories().subscribe((categories) => this.categories = categories);
    this.form = this.fb.group({
      questionAsk: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(254)]],
      category: [this.categories],
      response: this.fb.group({
        responseString: ['',],
        responseOne: ['', ],
        responseTwo: ['',],
        responseThree: ['',],
        score: ['', Validators.required],
        isVerified: [false, ]
      }),
    });
   }

  getField = (field: string) => {
    return this.form.get(field)
  }
  ngOnInit(): void {
  }



  addQuiz(){
    //if (this.form.invalid) return;
    return this.quizService.addQuiz(this.form?.value);
  }

}
