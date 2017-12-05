import {Component, OnInit} from '@angular/core';
import {UsersService} from "../management/user.service";
import {UserPublic} from "../login/user-public";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  userInfo: UserPublic;

  constructor(private loginService: LoginService, private router: Router) {
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

  }

  showMyFiles() {

  }

  showFilesList() {

  }
}
