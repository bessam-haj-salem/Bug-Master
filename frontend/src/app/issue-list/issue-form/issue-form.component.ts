import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Issue } from 'src/app/models/Issue.model';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent implements OnInit {
  issueForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private issuesService: IssuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.issueForm = this.formBuilder.group({
      categorie: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      start_date: ['', Validators.required],
      due_date: ['', Validators.required],
      estimated_time: ['', Validators.required],
      progress: ['', Validators.required],
      spent_time: ['', Validators.required],
      activity: ['', Validators.required],
      updated_by: ['', Validators.required],
      links: ['', Validators.required]
    });
  }
  onSaveIssue() {
    const categorie = this.issueForm.get('categorie').value;
    const subject = this.issueForm.get('subject').value;
    const description = this.issueForm.get('description').value;
    const status = this.issueForm.get('status').value;
    const priority = this.issueForm.get('priority').value;
    const start_date = this.issueForm.get('start_date').value;
    const due_date = this.issueForm.get('due_date').value;
    const estimated_time = this.issueForm.get('estimated_time').value;
    const progress = this.issueForm.get('progress').value;
    const spent_time = this.issueForm.get('spent_time').value;
    const activity = this.issueForm.get('activity').value;
    const updated_by = this.issueForm.get('updated_by').value;
    const links = this.issueForm.get('links').value;
    const newIssue = new Issue(
      categorie,
      subject,
      description,
      status,
      priority,
      start_date,
      due_date,
      estimated_time,
      progress,
      spent_time,
      activity,
      updated_by,
      links
    );
    this.issuesService.createNewIssue(newIssue);
    this.router.navigate(['/issues']);
  }
}
