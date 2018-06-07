import {Component, ElementRef, OnInit, Inject, Input, ViewChild} from '@angular/core';
import {DataService} from "../../dataService";

@Component({
    selector: 'coming-soon',
    templateUrl: './coming-soon.component.html',
    styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

    constructor(public data: DataService) {
    }

    ngOnInit() {
    }

}



