import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() 
  courses: Course[];
  
  @Output('selected-courses')
  selectedCoursesEvent: EventEmitter<Course[]> = new EventEmitter<Course[]>();

  selectedCourses: Course[];

  constructor() { 
    this.selectedCourses = [];
  }

  ngOnInit() {
  }

  onSelectCourse(course: Course) {
    if (this.isSelected(course)) {
      this.selectedCourses = this.selectedCourses.filter(c => c.id != course.id);
    } else {
      this.selectedCourses.push(course);
    }
    this.selectedCoursesEvent.emit(this.selectedCourses);
  }

  isSelected(course: Course) {
    return this.selectedCourses.includes(course);
  }

}
