import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      title: 'Courses',
      next: 'Accomodations'
    }
  },
  {
    path: 'accomodations',
    component: AccommodationsComponent,
    data: {
      title: 'Accomodations',
      previous: 'Courses',
      next: 'Summary'
    }
  },  
  {
    path: 'summary',
    component: SummaryComponent,
    data: {
      title: 'Summary',
      previous: 'Accomodations',
    }
  },
  { 
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
