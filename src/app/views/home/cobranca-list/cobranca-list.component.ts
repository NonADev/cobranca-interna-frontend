import {Component, OnInit} from '@angular/core';
import {CobrancaService} from '../../../shared/service/cobranca.service';
import {CobrancaInterna} from '../../../shared/models/cobrancaInterna.model';

@Component({
    selector: 'app-cobranca-list',
    templateUrl: './cobranca-list.component.html',
    styleUrls: ['./cobranca-list.component.scss']
})

export class CobrancaListComponent implements OnInit {

    cobrancasRecebidas: CobrancaInterna[];
    cobrancasEnviadas: CobrancaInterna[];

    constructor(private cobrancaService: CobrancaService) {
    }

    ngOnInit(): void {
        this.listCobrancasRecebidas(1);
        this.listCobrancasEnviadas(4);
    }

    listCobrancasRecebidas(areaId: number): void {
        this.cobrancaService.listCobrancasRecebidas(areaId).subscribe((data) => {
            this.cobrancasRecebidas = data;
            console.log(data);
        });
    }

    listCobrancasEnviadas(areaId: number): void {
        this.cobrancaService.listCobrancasEnviadas(areaId).subscribe((data) => {
            this.cobrancasEnviadas = data;
            console.log(data);
        });
    }

}
