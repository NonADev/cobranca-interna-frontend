import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../shared/service/user.service';
import {catchError, retry} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    email = new FormControl('', [Validators.required, Validators.email]);
    username = new FormControl('', [Validators.required, Validators.minLength(5)]);
    completeName = new FormControl('', [Validators.required, Validators.minLength(8)]);
    password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    LoginUsername = new FormControl('', [Validators.required, Validators.minLength(5)]);
    LoginPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);

    hide = true;

    register(): void {
        if (this.username.invalid) {
            alert('Username inválido');
            return;
        } else if (this.password.invalid) {
            alert('Senha inválida');
            return;
        } else if (this.email.invalid) {
            alert('Email inválido');
            return;
        } else if (this.completeName.invalid) {
            alert('Nome inválido');
            return;
        }

        this.userService.register(this.username.value, this.password.value, this.email.value, this.completeName.value)
            .pipe(catchError((error) => {
                alert(error.error.error);
                return throwError(error.error.error);
            })).subscribe((data) => {
            alert(`Usuario ${data.login} egistrado com sucesso!`);
            window.location.reload();
        });
    }

    login(): void {
        if (this.LoginUsername.invalid) {
            alert('Login inválido');
            return;
        } else if (this.LoginPassword.invalid) {
            alert('Senha inválida');
            return;
        }

        this.userService.login(this.LoginUsername.value, this.LoginPassword.value)
            .pipe(retry(2), catchError((error: HttpErrorResponse) => {
                alert(error.error.error);
                return throwError(error.error.error);
            })).subscribe((data) => {
            localStorage.setItem('access_token', data.access_token);
            window.location.href = '/home';
        });
    }

    getUsernameErrorMessage(): string {
        if (this.username.hasError('required')) {
            return 'You must enter a value';
        }
        return this.username.hasError('minlength') ? 'Name minimum chars 5' : '';
    }

    getPasswordErrorMessage(): string {
        if (this.password.hasError('required')) {
            return 'You must enter a value';
        }
        return this.password.hasError('minlength') ? 'Name minimum chars 8' : '';
    }

    getLoginUsernameErrorMessage(): string {
        if (this.LoginUsername.hasError('required')) {
            return 'You must enter a value';
        }
        return this.LoginUsername.hasError('minlength') ? 'Name minimum chars 5' : '';
    }

    getLoginPasswordErrorMessage(): string {
        if (this.LoginPassword.hasError('required')) {
            return 'You must enter a value';
        }
        return this.LoginPassword.hasError('minlength') ? 'Name minimum chars 8' : '';
    }

    getEmailErrorMessage(): string {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getNameErrorMessage(): string {
        if (this.completeName.hasError('required')) {
            return 'You must enter a value';
        }
        return this.completeName.hasError('minlength') ? 'Name minimum chars 8' : '';
    }

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

}
