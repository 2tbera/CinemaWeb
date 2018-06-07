import { Component, OnInit} from '@angular/core';
import {DataService} from "../../dataService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sub;
  id;
  showid;

  constructor(public data: DataService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.showid = +params['showid'];
      this.data.Items('show/'+params['id'], 'derailItem',false, false,false);
    });
    window.scroll(0, 0);
  }

}
