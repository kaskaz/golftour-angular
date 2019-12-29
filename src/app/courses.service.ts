import { Injectable } from '@angular/core';
import { Course } from './models/course';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private serviceUrl = 'api/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.serviceUrl);
  }

}
