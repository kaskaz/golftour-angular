import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Accommodation } from './models/accommodation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  private serviceUrl = 'api/accommodations';

  constructor(private http: HttpClient) { }

  getAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.serviceUrl);;
  }

}
