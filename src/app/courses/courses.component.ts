import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy{


  coursesList: Course[];

  @Input()
  coursesSelected: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getSelectedCourses();
    this.getCourses();
  }

  ngOnDestroy(): void {
    this.coursesService.setSelectedCourses(this.coursesSelected);
  }

  getCourses(): void {
    this.coursesService.getCourses()
      .subscribe(courses => this.coursesList = courses);
  }

  getSelectedCourses(): void {
    this.coursesService.getSelectedCourses()
      .subscribe(courses => this.coursesSelected = courses);
  }

  receiveSelectedCourses(courses: Course[]): void {
    this.coursesSelected = courses;
  }

}
