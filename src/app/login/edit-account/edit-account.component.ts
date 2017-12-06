import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login.service";
import {AuthData} from "../auth-data";
import {UsersService} from "../../management/user.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  authData: AuthData = new AuthData;

  constructor(private loginService: LoginService, private userService: UsersService, private router: Router, private location: Location) {
  }

  ngOnInit() {

  }

  isLogged() {
    return this.loginService.isLogged();
  }

  applyChanges(): void {
    this.loginService.edit(this.authData).subscribe(next=>{
      this.location.back();
    })
  }

  goBack(): void {
    this.location.back();
  }
}
