import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HomeComponent } from './home/home.component';
import { PasswordLessComponent } from './auth/password-less/password-less.component';
import { MessagesComponent } from './messages/messages.component';
import { SingleMessageComponent } from './messages/single-message/single-message.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/passwordLess', component: PasswordLessComponent },
  {
    path: 'projects',
    canActivate: [AuthguardService],
    component: ProjectListComponent
  },

  { path: 'home', component: HomeComponent },
  {
    path: 'projects/new',
    canActivate: [AuthguardService],
    component: ProjectFormComponent
  },
  {
    path: 'projects/view/:id',
    canActivate: [AuthguardService],
    component: SingleProjectComponent
  },
  {
    path: 'issues',
    canActivate: [AuthguardService],
    component: IssueListComponent
  },
  {
    path: 'issues/new',
    canActivate: [AuthguardService],
    component: IssueFormComponent
  },
  {
    path: 'issues/view/:id',
    canActivate: [AuthguardService],
    component: SingleIssueComponent
  },
  {
    path: 'messages',
    canActivate: [AuthguardService],
    component: MessagesComponent
  },
  {
    path: 'messages/view/:id',
    canActivate: [AuthguardService],
    component: SingleMessageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
