import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CobrancaInterna} from '../models/cobrancaInterna.model';

@Injectable({
    providedIn: 'root'
})
export class CobrancaService {

    private apiUrl = 'http://localhost:8080/cobranca-interna';
    private awtToken: string;
    private httpOptions: { headers: HttpHeaders };

    constructor(private httpClient: HttpClient) {
        this.awtToken = localStorage.getItem('access_token');

        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    public listCobrancas(): Observable<CobrancaInterna[]> {
        return this.httpClient.get<CobrancaInterna[]>(`${this.apiUrl}/list-cobrancas`, this.httpOptions);
    }

    public listCobrancasByStatus(status: number): Observable<CobrancaInterna[]> {
        return this.httpClient.get<CobrancaInterna[]>(`${this.apiUrl}/get-cobrancas-by-status?status=${status}`, this.httpOptions);
    }

    public listCobrancasRecebidas(areaId: number): Observable<CobrancaInterna[]> {
        return this.httpClient.get<CobrancaInterna[]>(`${this.apiUrl}/get-cobrancas-recebidas?areaId=${areaId}`, this.httpOptions);
    }

    public listCobrancasEnviadas(areaId: number): Observable<CobrancaInterna[]> {
        return this.httpClient.get<CobrancaInterna[]>(`${this.apiUrl}/get-cobrancas-enviadas?areaId=${areaId}`, this.httpOptions);
    }
}
