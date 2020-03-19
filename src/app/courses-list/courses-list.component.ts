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
  
  @Output()
  selectedCoursesEvent: EventEmitter<Course[]> = new EventEmitter<Course[]>();

  @Input()
  selected: Course[];

  constructor() {
  }

  ngOnInit() {
  }

  onSelectCourse(course: Course) {
    if (this.isSelected(course)) {
      this.selected = this.selected.filter(c => c.id != course.id);
    } else {
      this.selected.push(course);
    }
    this.selectedCoursesEvent.emit(this.selected);
  }

  isSelected(course: Course) {
    return this.selected.find(c => c.id == course.id) != undefined;
  }

}
