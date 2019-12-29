import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesFilterPanelComponent } from './courses-filter-panel/courses-filter-panel.component';
import { CoursesPipePipe } from './courses-pipe.pipe';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { AccommodationsListComponent } from './accommodations-list/accommodations-list.component';
import { SummaryComponent } from './summary/summary.component';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'accommodations',
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
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursesFilterPanelComponent,
    CoursesPipePipe,
    AccommodationsComponent,
    AccommodationsListComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
//    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
