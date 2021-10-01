import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {

adminEnterprise: Observable<AdminModel[]> | null = null;

  constructor(private adminService: AdminService) {
    this.adminEnterprise = this.adminService.getAllAdmin();

   }

  ngOnInit(): void {
  }

}
