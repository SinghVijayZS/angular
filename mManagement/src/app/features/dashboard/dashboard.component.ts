import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { Project } from 'src/app/core/modal/project.interface';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects : Project[] = [];

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (data)=>{
        this.projects = data;
        console.log(this.projects);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
