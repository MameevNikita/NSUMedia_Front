import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileComponent} from "./file/file.component";
import {NavigationComponent} from "./folders/navigation.component";
import {FileUploadComponent} from "./upload/upload.component";
import {UsersListComponent} from "../management/users-list/users-list.component";
import {EditAccountComponent} from "../login/edit-account/edit-account.component";


const routes: Routes = [
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },
  { path: 'fileUpload', component: FileUploadComponent },
  { path: 'usersList', component: UsersListComponent },
  { path: 'fileInfo/:id', component: FileComponent },
  { path: 'editAccount', component: EditAccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
