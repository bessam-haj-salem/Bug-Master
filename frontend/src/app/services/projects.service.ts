import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Project } from '../models/Project.model';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [];
  projectsSubject = new Subject<Project[]>();
  constructor() {}
  emitProjects() {
    this.projectsSubject.next(this.projects);
  }
  saveProjects() {
    firebase
      .database()
      .ref('/projects')
      .set(this.projects);
  }
  getProjects() {
    firebase
      .database()
      .ref('/projects')
      .on('value', data => {
        this.projects = data.val() ? data.val() : [];
        this.emitProjects();
      });
  }
  getSingleProject(id: number) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref('/projects/' + id)
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
  createNewProject(newproject: Project) {
    this.projects.push(newproject);
    this.saveProjects();
    this.emitProjects();
  }

  removeProject(project: Project) {
    const projectIndexToRemove = this.projects.findIndex(projectEl => {
      if (projectEl === project) {
        return true;
      }
    });
    this.projects.splice(projectIndexToRemove, 1);
    this.saveProjects();
    this.emitProjects();
  }
}
