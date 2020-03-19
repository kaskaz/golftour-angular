import { Component, OnInit } from '@angular/core';
import { AccommodationsService } from '../accommodations.service';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course';
import { CourseAccommodations } from '../models/course-accommodations';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  courseAccommodations: CourseAccommodations[];
  coursesSelected: Course[];

  constructor(
    private accommodationsService: AccommodationsService,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.getSelectedCourses();
    this.getAccommodations();
  }

  getSelectedCourses(): void {
    this.coursesService.getSelectedCourses()
      .subscribe(courses => this.coursesSelected = courses);
  }

  getAccommodations(): void {
    var courseIds = this.coursesSelected.map(c => c.id);
    this.accommodationsService.getAccommodationsNear(courseIds)
      .subscribe(courseAccommodations => this.courseAccommodations = courseAccommodations);
  }
  
}
