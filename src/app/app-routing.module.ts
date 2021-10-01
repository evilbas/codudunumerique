import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceComponent } from './components/admin/espace/espace.component';
import { AddComponent } from './components/admin/gestion-quiz/add/add.component';
import { GestionQuizComponent } from './components/admin/gestion-quiz/gestion-quiz.component';
import { ProgressionComponent } from './components/admin/progression/progression.component';
import { QuizComponent } from './components/admin/quiz/quiz.component';
import { SignupFormComponent } from './components/admin/signup-form/signup-form.component';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { GestionComponent } from './components/administrateur/gestion/gestion.component';
import { ForgotPasswordComponent } from './components/connexion/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/connexion/sign-up/sign-up.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './services/admin/admin.guard';
import { AdministrateurGuard } from './services/administrateur/administrateur.guard';
import { AuthGuard } from './services/authentication/auth.guard';
import { EmployeGuard } from './services/employe/employe.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'administrateur', component: AdministrateurComponent, canActivate: [AuthGuard, AdministrateurGuard] },
  { path: 'administrateur/gestion/:id', component: GestionComponent, canActivate: [AuthGuard, AdministrateurGuard] },
  { path: 'admin/sign-up', component: SignupFormComponent },

  { path: 'admin/espace', component: EspaceComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/gestion/quiz', component: GestionQuizComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/gestion/quiz/add', component: AddComponent, canActivate: [AuthGuard, AdminGuard] },


  { path: 'employe/quiz', component: QuizComponent, canActivate: [AuthGuard, EmployeGuard] },


  { path: 'admin/espace/employe-progression/:id', component: ProgressionComponent, canActivate: [AuthGuard, AdminGuard] },

  { path: 'sign-up', component: SignUpComponent },
  { path: 'forget-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
