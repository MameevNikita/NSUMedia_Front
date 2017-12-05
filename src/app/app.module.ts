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
import {FileUploadComponent} from "./navigation/upload/upload.component";
import {LoadService} from "./navigation/load.service";
import {UsersService} from "./management/user.service";
import {ManagementComponent} from "./management/management.component";
import {UsersListComponent} from "./management/users-list/users-list.component";
import {FileManagementService} from "./management/file-management.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    FileComponent,
    FileUploadComponent,
    ManagementComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, NavigationService, LoadService, UsersService, FileManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
