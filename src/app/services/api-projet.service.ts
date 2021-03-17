import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Project } from './../models/project';

@Injectable({
  providedIn: 'root'
})
export class ApiProjetService {

  urlApi = 'https://www.tunivisions.link/Api/ProjectListingAPI';
  url = 'https://my-json-server.typicode.com/tarchounmarwen/projectjson/projets';

  constructor(private http: HttpClient) { }



  getProjets(): Observable<Project> {
    return this.http.get<Project>(this.url);


  }

  getProject(id: number): Observable<Project>{

    return this.http.get<Project>( this.url + '/' + id);
  }

}
