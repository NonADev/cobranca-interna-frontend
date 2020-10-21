import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private apiUrl = 'http://localhost:8080/user';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    public login(username: string, password: string): Observable<{access_token: string, me: {}}> {
        const body = {
            username,
            password
        };

        return this.httpClient.post<{access_token: string, me: {}}>(`http://localhost:8080/login`, body, this.httpOptions);
    }

    public register(username: string, password: string, email: string, nomeCompleto: string): Observable<User> {
        const body = {
            login: username,
            senha: password,
            email,
            nomeCompleto
        };

        return this.httpClient.post<User>(`${this.apiUrl}/sign-up`, body, this.httpOptions);
    }

    constructor(private httpClient: HttpClient) {
    }
}
