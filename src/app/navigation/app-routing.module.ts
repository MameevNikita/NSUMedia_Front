import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileComponent} from "./file/file.component";
import {NavigationComponent} from "./folders/navigation.component";
import {FileUploadComponent} from "./upload/upload.component";


const routes: Routes = [
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  { path: 'navigation', component: NavigationComponent },
  { path: 'fileUpload', component: FileUploadComponent },
  { path: 'fileInfo/:id', component: FileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
