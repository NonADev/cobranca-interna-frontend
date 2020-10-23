import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dialog-cobranca',
    templateUrl: './dialog-cobranca.component.html'
})
export class DialogCobrancaComponent implements OnInit {
    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
