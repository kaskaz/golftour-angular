import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodations-find',
  templateUrl: './accommodations-find.component.html',
  styleUrls: ['./accommodations-find.component.css']
})
export class AccommodationsFindComponent implements OnInit {

  public distance: number;
  public showDistance: boolean;

  constructor() { }

  ngOnInit() {
    this.distance = 1;
    this.showDistance = false;
  }

  changeDistance(event: any): void {
    this.distance = event.target.value;
  }

}
