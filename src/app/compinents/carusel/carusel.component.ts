import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {

  @Input() public item: any;

  @Input() public modifier: any;

  @ViewChild('holder') holder: ElementRef;

  constructor(private  element: ElementRef) {
  }

  modifierItem = ['carusel'];
  classNames;

  ngOnInit() {
    this.classNames = !this.modifier ? '' : [''].concat(this.modifier.map((modifier) => 'carusel--' + modifier)).join(' ');
    this.modifierItem.push(this.modifier);
  }

  caruselLocal: any = [];

  wrapperLeft = false;
  wrapperRight = false;


  carouselLeft() {
    this.caruselLocal = this.item;
    this.caruselLocal.unshift(this.caruselLocal[this.caruselLocal.length - 1]);
    this.caruselLocal.splice(this.caruselLocal.length - 1, 1);
    this.wrapperRight = true;

    setTimeout(() => {
      this.wrapperRight = false;
    }, 200);
  }

  carouselRight() {

    this.wrapperLeft = true;
    this.caruselLocal = this.item;

    setTimeout(() => {
      this.caruselLocal.push(this.caruselLocal[0]);
      this.caruselLocal.splice(0, 1);
      this.wrapperLeft = false;
    }, 200);
  }

}
