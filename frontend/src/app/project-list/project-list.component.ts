import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../models/Project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: Project[];
  projectsSubscription: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectsSubscription = this.projectsService.projectsSubject.subscribe(
      (projects: Project[]) => {
        this.projects = projects;
      }
    );
    this.projectsService.emitProjects();
  }
  onNewProject() {
    this.router.navigate(['/projects', 'new']);
  }
  onDeleteProject(project: Project) {
    this.projectsService.removeProject(project);
  }
  onViewProject(id: number) {
    this.router.navigate(['/projects', 'view', id]);
  }
  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }
}
