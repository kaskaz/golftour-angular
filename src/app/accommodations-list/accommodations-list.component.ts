import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Accommodation } from '../models/accommodation';

@Component({
  selector: 'app-accommodations-list',
  templateUrl: './accommodations-list.component.html',
  styleUrls: ['./accommodations-list.component.css']
})
export class AccommodationsListComponent implements OnInit {

  @Input() 
  accommodations: Accommodation[];
  
  @Output('selected-accommodations')
  selectedAccommodationsEvent: EventEmitter<Accommodation[]> = new EventEmitter<Accommodation[]>();

  selectedAccommodations: Accommodation[];

  constructor() { 
    this.selectedAccommodations = [];
  }

  ngOnInit() {
  }

  onSelectAccommodation(accommodation: Accommodation) {
    if (this.isSelected(accommodation)) {
      this.selectedAccommodations = this.selectedAccommodations.filter(c => c.id != accommodation.id);
    } else {
      this.selectedAccommodations.push(accommodation);
    }
    this.selectedAccommodationsEvent.emit(this.selectedAccommodations);
  }

  isSelected(accommodation: Accommodation) {
    return this.selectedAccommodations.includes(accommodation);
  }

}
