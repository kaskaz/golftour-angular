import { Injectable } from '@angular/core';
import { Course } from './models/course';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private serviceUrl = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<Course[]>(this.serviceUrl + '/courses/list');
  }

}
