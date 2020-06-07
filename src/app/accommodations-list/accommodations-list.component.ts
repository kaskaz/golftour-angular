import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Accommodation } from '../models/accommodation';
import { CourseAccommodations } from '../models/course-accommodations';
import { Course } from '../models/course';

@Component({
  selector: 'app-accommodations-list',
  templateUrl: './accommodations-list.component.html',
  styleUrls: ['./accommodations-list.component.css']
})
export class AccommodationsListComponent implements OnInit {

  @Input() 
  courseAccommodations: CourseAccommodations[];

  @Input()
  coursesSelected: Course[];
  
  @Output('selected-accommodations')
  selectedAccommodationsEvent: EventEmitter<Accommodation[]> = new EventEmitter<Accommodation[]>();

  selectedAccommodations: Accommodation[];

  constructor() { 
    this.selectedAccommodations = [];
  }

  ngOnInit() {
  }

  getCourse(id: number): Course {
    return this.coursesSelected.find(c => c.id == id);
  }

  onSelectAccommodation(accommodation: Accommodation) {
    if (this.isSelected(accommodation)) {
      this.selectedAccommodations = this.selectedAccommodations.filter(a => a.id != accommodation.id);
    } else {
      this.selectedAccommodations.push(accommodation);
    }
    this.selectedAccommodationsEvent.emit(this.selectedAccommodations);
  }

  isSelected(accommodation: Accommodation): boolean {
    return this.selectedAccommodations.find(a => a.id == accommodation.id) != undefined;
  }

  hasSelections(): boolean {
    return this.coursesSelected.length > 0;
  }

  hasNoAccommodations(ca: CourseAccommodations): boolean {
    return ca.accommodations == undefined || ca.accommodations.length == 0;
  }

}
