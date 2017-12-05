import {Component, OnInit} from '@angular/core';
import {UserPublic} from "../../login/user-public";
import {LoginService} from "../../login/login.service";
import {UsersService} from "../user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersInfo: UserPublic[];
  roles: string[];

  constructor(private loginService: LoginService, private userService: UsersService) {
  }

  ngOnInit() {
    this.updateUsersList();
    this.userService.getRolesList().subscribe(roles => this.roles = roles);
  }

  updateUsersList(){
    if (this.isLogged()) {
      this.userService.getUsersList().subscribe(usersInfo => this.usersInfo = usersInfo);
    }
  }

  isLogged() {
    return this.loginService.isLogged();
  }

  onRoleChange(user: UserPublic) {
    this.userService.changeRole(user).subscribe(next=>{
      this.updateUsersList();
    });
  }
}
