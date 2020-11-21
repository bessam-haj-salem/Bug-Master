import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Issue } from '../models/Issue.model';
import { IssuesService } from '../services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit, OnDestroy {
  issues: Issue[];
  issuesSubscription: Subscription;

  constructor(private issuesService: IssuesService, private router: Router) {}

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
    this.issuesService.removeIssue(issue);
  }
  onViewIssue(id: number) {
    this.router.navigate(['/issues', 'view', id]);
  }
  ngOnDestroy() {
    this.issuesSubscription.unsubscribe();
  }
}
