import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {LoadService} from "../load.service";
import {FileInfo} from "../file";
import {LoginService} from "../../login/login.service";
import {FileManagementService} from "../../management/file-management.service";


@Component({
  selector: 'app-file-info',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  private currentFile: FileInfo;
  private id: number;

  constructor(private navigationService: NavigationService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private loadService: LoadService,
              private loginService: LoginService,
              private fileManagementService: FileManagementService) {
  }

  ngOnInit() {
    console.log('Opened file view');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.updateFileInfo();
  }

  updateFileInfo(){
    this.navigationService.getFileInfo(this.id)
      .subscribe(file => {
        console.log(file);
        this.currentFile = file;
      });
  }

  download() {
    this.loadService.download(this.currentFile);
  }

  goBack() {
    this.location.back();
  }

  canMark(): boolean {
    return !this.currentFile.checked && this.loginService.isLogged() && this.loginService.getSavedUserInfo().role == "ADMINISTRATOR";
  }

  canDelete(): boolean {
    return this.loginService.isLogged() &&
      (this.loginService.getSavedUserInfo().role == "ADMINISTRATOR" ||
        this.currentFile.creator.login == this.loginService.getSavedUserInfo().login);
  }

  markAsChecked() {
    this.fileManagementService.markAsChecked(this.id).subscribe(next=>{
      this.updateFileInfo();
    });
  }

  deleteFile() {
    this.fileManagementService.delete(this.id).subscribe(next => {
      this.location.back();
    });
  }
}
