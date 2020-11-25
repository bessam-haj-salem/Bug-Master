import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Issue } from '../models/Issue.model';
import { DialogService } from '../services/dialog.service';
import { IssuesService } from '../services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit, OnDestroy {
  issues: Issue[];
  issuesSubscription: Subscription;

  constructor(
    private issuesService: IssuesService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.issuesSubscription = this.issuesService.issuesSubject.subscribe(
      (issues: Issue[]) => {
        this.issues = issues;
      }
    );
    this.issuesService.getIssues();
    this.issuesService.emitIssues();
  }
  onNewIssue() {
    this.router.navigate(['/issues', 'new']);
  }
  onDeleteIssue(issue: Issue) {
   
    this.dialogService
      .openConfirmDialog('Are you sure to delete this issue')
      .afterClosed()
      .subscribe(res => {
       if(res) {
        this.issuesService.removeIssue(issue);
       }
      });
  }
  onViewIssue(id: number) {
    this.router.navigate(['/issues', 'view', id]);
  }
  ngOnDestroy() {
    this.issuesSubscription.unsubscribe();
  }
}
