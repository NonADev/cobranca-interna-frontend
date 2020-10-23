import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogCobrancaComponent} from './dialog-cobranca/dialog-cobranca.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogCobrancaComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
