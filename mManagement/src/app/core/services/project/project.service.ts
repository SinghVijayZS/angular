import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { Project } from '../../modal/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpService : HttpService) { }

  getAllProjects() : Observable<Project[]>{
    return this.httpService.get('/projects')
  }
  
}
