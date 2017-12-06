import {Component, OnInit} from '@angular/core';
import {UsersService} from "../management/user.service";
import {UserPublic} from "../login/user-public";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {FileListService} from "../navigation/files-list/file-list.service";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  userInfo: UserPublic;

  constructor(private loginService: LoginService, private router: Router, private fileListService: FileListService) {
  }

  ngOnInit() {
    this.loginService.subscribe(next=> {
      this.updateUserInfo();
    });
  }

  updateUserInfo(){
    if (this.isLogged()) {
      this.loginService.getMyUserInfo().subscribe(userInfo => this.userInfo = userInfo);
    }
  }

  isLogged() {
    return this.loginService.isLogged();
  }

  showUsersList() {
    this.router.navigate(['/usersList']);
  }

  editAccount() {
    this.router.navigate(['/editAccount']);
  }

  showMyFiles() {
    console.log(this.loginService.getSavedUserInfo());
    this.fileListService.loadUserFiles(this.loginService.getSavedUserInfo().id);
    this.router.navigate(['/files']);
  }

  showAllFiles() {
    this.fileListService.loadAllFiles();
    this.router.navigate(['/files']);
  }

  toStartPage() {
    this.router.navigate(['/']);
  }
}
