import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SingleProjectComponent } from './project-list/single-project/single-project.component';
import { ProjectFormComponent } from './project-list/project-form/project-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { SingleIssueComponent } from './issue-list/single-issue/single-issue.component';
import { IssueFormComponent } from './issue-list/issue-form/issue-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { ProjectsService } from './services/projects.service';
import { IssuesService } from './services/issues.service';
import { AuthguardService } from './services/authguard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PasswordLessComponent } from './auth/password-less/password-less.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProjectListComponent,
    SingleProjectComponent,
    ProjectFormComponent,
    IssueListComponent,
    SingleIssueComponent,
    IssueFormComponent,
    HeaderComponent,
    HomeComponent,
    PasswordLessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, ProjectsService, IssuesService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
