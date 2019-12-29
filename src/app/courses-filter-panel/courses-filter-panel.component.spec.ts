import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFilterPanelComponent } from './courses-filter-panel.component';

describe('CoursesFilterPanelComponent', () => {
  let component: CoursesFilterPanelComponent;
  let fixture: ComponentFixture<CoursesFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
