import {Component, OnInit , Input} from '@angular/core';
import {DataService} from "../../dataService";


@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  @Input() public hall: any;

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  order(index) {
    if (index.status === 'avalable') {
      index.status = 'selected';
    }
  }
}
