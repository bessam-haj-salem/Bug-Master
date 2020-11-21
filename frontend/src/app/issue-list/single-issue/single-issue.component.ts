import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from 'src/app/models/Issue.model';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-single-issue',
  templateUrl: './single-issue.component.html',
  styleUrls: ['./single-issue.component.scss']
})
export class SingleIssueComponent implements OnInit {
  issue: Issue;
  constructor(
    private route: ActivatedRoute,
    private issuesService: IssuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.issue = new Issue('', '', '', '', '', '', '', '', '', '', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.issuesService.getSingleIssue(+id).then((issue: Issue) => {
      this.issue = issue;
    });
  }
  onBack() {
    this.router.navigate(['/issues']);
  }
}
