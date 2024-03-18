import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ValidatorIsEqualTwoValueControlsMatcher } from './shared/custom-errors/validate-is-equal-two-value-controls-matcher.error';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpResponseInterceptor } from './interceptors/http-response.interceptor';
import { SharingService } from './core/services/sharing.service';
import { AuthComponent } from './modules/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {provide: ValidatorIsEqualTwoValueControlsMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi:true},
    SharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
