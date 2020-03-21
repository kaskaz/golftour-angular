import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsFindComponent } from './accommodations-find.component';

describe('AccommodationsFindComponent', () => {
  let component: AccommodationsFindComponent;
  let fixture: ComponentFixture<AccommodationsFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationsFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationsFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
