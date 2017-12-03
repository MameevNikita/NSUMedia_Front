import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./login/login.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavigationComponent} from "./navigation/folders/navigation.component";
import {NavigationService} from "./navigation/navigation.service";
import {AppRoutingModule} from "./navigation/app-routing.module";
import {FileComponent} from "./navigation/file/file.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
