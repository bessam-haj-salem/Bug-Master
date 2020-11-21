import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Issue } from '../models/Issue.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  issues: Issue[] = [];
  issuesSubject = new Subject<Issue[]>();
  constructor() {}
  emitIssues() {
    this.issuesSubject.next(this.issues);
  }
  saveIssues() {
    firebase
      .database()
      .ref('/issues')
      .set(this.issues);
  }
  getIssues() {
    firebase
      .database()
      .ref('/issues')
      .on('value', data => {
        this.issues = data.val() ? data.val() : [];
        this.emitIssues();
      });
  }
  getSingleIssue(id: number) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref('/issues/' + id)
        .once('value')
        .then(
          data => {
            resolve(data.val());
          },
          error => {
            reject(error);
          }
        );
    });
  }
  createNewIssue(newIssue: Issue) {
    this.issues.push(newIssue);
    this.saveIssues();
    this.emitIssues();
  }

  removeIssue(issue: Issue) {
    const issueIndexToRemove = this.issues.findIndex(issueEl => {
      if (issueEl === issue) {
        return true;
      }
    });
    this.issues.splice(issueIndexToRemove, 1);
    this.saveIssues();
    this.emitIssues();
  }
}
