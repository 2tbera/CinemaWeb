import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../dataService";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private  element: ElementRef) {
  }

  scroll = false;

  @ViewChild('cursor') cursor: ElementRef;
  @ViewChild('cursorFollower') cursorFollower: ElementRef;

  mouseX = 0;
  mouseY = 0;


  ngOnInit() {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100 ? this.scroll = true : this.scroll = false;
    });

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
      this.cursor.nativeElement.style.left = this.mouseX + 'px';
      this.cursor.nativeElement.style.top = this.mouseY + 'px';
      this.cursorFollower.nativeElement.style.left = this.mouseX  + 'px';
      this.cursorFollower.nativeElement.style.top = this.mouseY + 'px';
    });

    document.addEventListener('mousedown', (e) => {
      this.cursor.nativeElement.classList.add('active');
      this.cursorFollower.nativeElement.classList.add('active');
    });

    document.addEventListener('mouseup', (e) => {
      this.cursor.nativeElement.classList.remove('active');
      this.cursorFollower.nativeElement.classList.remove('active');
    });

  }

}
