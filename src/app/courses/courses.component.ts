import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesService.getCourses()
      .subscribe(courses => this.coursesList = courses);
  }

}
