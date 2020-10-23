import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CobrancaListComponent} from './views/home/cobranca-list/cobranca-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginComponent} from './views/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorInterceptor} from './shared/helper/error.interceptor';
import {JwtInterceptor} from './shared/helper/jwt.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogCobrancaComponent } from './views/home/dialog-cobranca/dialog-cobranca.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CobrancaListComponent,
        LoginComponent,
        DialogCobrancaComponent
    ],
    imports: [
        MatOptionModule,
        MatSelectModule,
        HttpClientModule,
        MatInputModule,
        MatDialogModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        FlexLayoutModule,
        MatFormFieldModule,
        ReactiveFormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
