import {Component, OnInit} from '@angular/core';
import {DataService} from "../../dataService";

@Component({
  selector: 'live-block',
  templateUrl: './live-block.component.html',
  styleUrls: ['./live-block.component.scss']
})
export class LiveBlockComponent implements OnInit {

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

}
