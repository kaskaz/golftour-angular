import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Accommodation } from './models/accommodation';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CourseAccommodations } from './models/course-accommodations';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  private serviceUrl = environment.serverUrl + '/accommodations';

  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Request-Method': 'POST'
    })
  };

  constructor(private http: HttpClient) { }

  getAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.serviceUrl);
  }

  getAccommodationsNear(courseIds: number[]): Observable<CourseAccommodations[]> {
    return this.http.post<CourseAccommodations[]>(this.serviceUrl + '/near', courseIds);
  }

}
