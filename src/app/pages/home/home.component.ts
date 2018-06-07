import { Component, OnInit } from '@angular/core';
import {DataService} from "../../dataService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public data: DataService) { }

  ngOnInit() {
    window.scroll(0 ,0);
  }

}
