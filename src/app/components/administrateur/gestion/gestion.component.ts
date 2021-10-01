import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

idAdmin: string; 
admin: AdminModel | null = null; 
  constructor(private adminServie: AdminService,
              private route: ActivatedRoute) {
    
        this.idAdmin = this.route.snapshot.params.id;
        this.adminServie.getAdmin(this.idAdmin).subscribe((admin: AdminModel) => this.admin = admin)

   }

  ngOnInit(): void {
  }

}
