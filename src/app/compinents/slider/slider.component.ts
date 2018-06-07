import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../../dataService";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  @Input() public type: any;

  @Input() public item: any;

  sliderContent;
  constructor(public data: DataService) {
  }

  activeSlide = 0;
  sliderTime;

  ngOnInit() {
    if ( this.type ==='slider' ) {
      this.sliderTime = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.item.length;
      }, 10000);
    }
  }

  Slideactive(bulletindex) {
    this.activeSlide = bulletindex;
    clearInterval(this.sliderTime);
    this.sliderTime = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.item.length;
    }, 10000);
  }
}
