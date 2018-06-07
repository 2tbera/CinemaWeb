import {Component, OnInit, Input} from '@angular/core';
import {DataService} from "../../dataService";

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input() public item: any;

    @Input() public modifier: string[];

  classNames: string;

    constructor(public data: DataService) {
    }

    ngOnInit() {
        this.classNames = !this.modifier ? '' : ['item'].concat(this.modifier.map((modifier) => 'item--' + modifier)).join(' ');
    }

}
