
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule} from "@angular/fire/database";

import { MDBBootstrapModule } from 'angular-bootstrap-md';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/admin/signup-form/signup-form.component';
import { EspaceComponent } from './components/admin/espace/espace.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressionComponent } from './components/admin/progression/progression.component';
import { QuizComponent } from './components/admin/quiz/quiz.component';
import { environment } from 'src/environments/environment';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { EmailComponent } from './components/connexion/email/email.component';
import { ForgotPasswordComponent } from './components/connexion/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/connexion/sign-up/sign-up.component';
import { GestionComponent } from './components/administrateur/gestion/gestion.component';
import { EmployeQuizComponent } from './components/employe/employe-quiz/employe-quiz.component';
import { GestionQuizComponent } from './components/admin/gestion-quiz/gestion-quiz.component';
import { AddComponent } from './components/admin/gestion-quiz/add/add.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent,
    EspaceComponent,
    ProgressionComponent,
    QuizComponent,
    AdministrateurComponent,
    EmailComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    GestionComponent,
    EmployeQuizComponent,
    GestionQuizComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),


    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
