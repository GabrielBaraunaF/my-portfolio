import { inforepo } from './../../model/inforepo';
import { ProjectService } from './../../services/project.service';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from "../../repo-card/repo-card.component";




@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AppComponent, CommonModule, RepoCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  response = new Observable<any>();
  inforepo = new Observable<inforepo[]>();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.inforepo = this.projectService.getRepositories();
  }

  loadproducts() {}
}
