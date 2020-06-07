import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodations-find',
  templateUrl: './accommodations-find.component.html',
  styleUrls: ['./accommodations-find.component.css']
})
export class AccommodationsFindComponent implements OnInit {

  public distance: number;
  public showDistance: boolean;
  public sliderStep: number;

  constructor() { }

  ngOnInit() {
    this.distance = 1;
    this.showDistance = false;
  }

  changeDistance(event: any): void {
    this.distance = event.target.value;
    this.sliderStep = event.target.step;
  }

  changeDistanceInputVisibility(el: HTMLElement): void {
    this.showDistance = (el.id == 'distanceOpt');

    if (this.showDistance) {
      var el = document.getElementById('selector');

      if (el) {
        (el as HTMLInputElement).value = this.distance.toString();
        (el as HTMLInputElement).step = this.sliderStep.toString();
      }
    }
  }

  onChangeFilter(event: any): void {
    this.changeDistanceInputVisibility(event.target);
  }

  

}
