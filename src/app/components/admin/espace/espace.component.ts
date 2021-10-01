import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeModel } from 'src/app/models/employe.model';
import { EmployeService } from 'src/app/services/employe.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']
})
export class EspaceComponent {
form: FormGroup;  
employesList: EmployeModel[] = [];
idEmploye: string | null = null;

employe: EmployeModel | null = null;

  constructor(private fb: FormBuilder,
              private employeService: EmployeService,
              private route: ActivatedRoute,
              private router: Router) {

                this.route.queryParamMap.subscribe(param => {
                  this.idEmploye = param.get('id');

                  if (this.idEmploye) this.employeService.getEmploye(this.idEmploye).pipe(take(1)).subscribe((employe: EmployeModel) => {
                  this.employe = employe;

                  console.log("Empl ", this.idEmploye)
                  this.form = this.fb.group({
                    nameEmploye: [employe.nameEmploye, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
                    addressEmploye: [employe.addressEmploye, [Validators.required, Validators.minLength(10), Validators.maxLength(254)]],
                    emailEmploye: [employe.emailEmploye, [Validators.required, Validators.email]],
                  });
                  });
                })


                this.form = this.fb.group({
                  nameEmploye: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
                  addressEmploye: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(254)]],
                  emailEmploye: ['',[Validators.required, Validators.email]],
                });

                this.employeService.getAllEmployes().subscribe(employes => {
                  this.employesList = employes;
                });
            }

  
  getField(field: string){
    return this.form.get(field);   
  }   
  
  

  getContent(){
    return this.idEmploye ? 'Update' : 'Save';
  }



  addEmploye(){
    if (this.form?.invalid) return;

    this.idEmploye 
      ? this.employeService.updateEmploye(this.form.value, this.idEmploye)
      : this.employeService.addEmploye(this.form.value);

    return this.router.navigateByUrl('/admin/espace');

  }


  deleteEmploye(employe: EmployeModel){
    return this.employeService.removeEmploye(employe.id);
  }



}
