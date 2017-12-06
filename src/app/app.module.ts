import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from "./login/user-info/login.component";
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
import {EditAccountComponent} from "./login/edit-account/edit-account.component";
import {FileManagementService} from "./management/file-management.service";
import {FilesListComponent} from "./navigation/files-list/files-list.component";
import {FileListService} from "./navigation/files-list/file-list.service";
import {SearchComponent} from "./navigation/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    FileComponent,
    FileUploadComponent,
    ManagementComponent,
    UsersListComponent,
    EditAccountComponent,
    FilesListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, NavigationService, LoadService, UsersService, FileManagementService, FileListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
