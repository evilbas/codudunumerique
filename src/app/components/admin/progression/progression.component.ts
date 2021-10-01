import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeModel } from 'src/app/models/employe.model';
import { EmployeService } from 'src/app/services/employe.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.scss']
})
export class ProgressionComponent implements OnInit {

employe: EmployeModel | null = null; 
idEmploye: string | any;

responses: any;

  constructor(private route: ActivatedRoute,
              private employeService: EmployeService,
              private quizService: QuizService
              ) {
         this.idEmploye = this.route.snapshot.params.id;
         this.employeService.getEmploye(this.idEmploye).subscribe((employe: any) => this.employe = employe);
         this.quizService.getAllResponse().subscribe(responses => {
           this.responses = responses;
           console.log(this.responses);
         });

   }

  ngOnInit(): void {
  }

}
