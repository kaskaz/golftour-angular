import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../models/accommodation';
import { AccommodationsService } from '../accommodations.service';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  accommodationsList: Accommodation[];

  constructor(private accommodationsService: AccommodationsService) { }

  ngOnInit() {
    this.getAccommodations();
  }

  getAccommodations(): void {
    this.accommodationsService.getAccommodations()
      .subscribe(accommodations => this.accommodationsList = accommodations);
  }
  
}
