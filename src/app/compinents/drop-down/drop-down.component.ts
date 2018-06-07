import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'drop-down',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

    drop = false;

    @Input() public itemDrop: any;
    @Input() public type: any;

    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    constructor() {
    }


    ngOnInit() {
    }

    dropEv() {
        this.drop = !this.drop;
    }

    dropClick(index,  id) {
        this.itemDrop.map((object) => {
            object.active = false;
        });

        this.itemDrop[index].active = true;

        this.modelChange.emit({value: id, type: this.type});
    }

}
