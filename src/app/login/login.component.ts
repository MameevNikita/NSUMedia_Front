import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {AuthData} from "./auth-data";

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authData: AuthData = new AuthData;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  isLogged() {
    return this.loginService.isLogged();
  }

  logout(): void{
    this.loginService.logout().subscribe(next => {
        console.log('Exited');
      },
      error => {
        console.error(error);
      });
  }

  register(): void {
    this.loginService.register(this.authData).subscribe(next => {
        console.log('Registered user ');
        console.log(next.login);
      },
      error => {
        console.error(error);
      })
  }

  enter(): void {
    this.loginService.enter(this.authData).subscribe(next => {
        console.log('Entered');
      },
      error => {
        console.error(error);
      })
  }
}
