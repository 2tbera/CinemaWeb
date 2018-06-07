import {Component, OnInit} from '@angular/core';
import {DataService} from "../../dataService";

@Component({
    selector: 'item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

    constructor( public data: DataService) {}

  time = '' ;
  cienma = '';
  show = '';

    modelChange(ev) {
      let dayChange = false;
      let cinemaChange = false;

      if (ev.type === 'cinema') {this.cienma = ev.value.id; this.show= '';  cinemaChange = true;}
      if (ev.type === 'time') {this.show = ev.value.time;}
      if (ev.type === 'date') { this.time = ev.value.time; dayChange = true; cinemaChange = true; this.show= ''; this.cienma= '';} else { dayChange = false; }

      this.data.Items('show?' + this.data.urlGenerator(this.time,this.cienma,this.show), 'show',dayChange ,cinemaChange,false);
    };

    ngOnInit() {
      this.data.Items('show?' + this.data.urlGenerator('','',''), 'show', true,true,true);
    }
}
