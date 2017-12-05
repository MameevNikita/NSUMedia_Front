import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {LoginService} from "../login/login.service";
import {Observable} from "rxjs/Observable";
import {UserPublic} from "../login/user-public";

@Injectable()
export class UsersService {
  private SERVER = 'http://localhost:9001/';

  private allUsers = this.SERVER + '/users/all';
  private userInfo = this.SERVER + '/users/user/';
  private allRoles = this.SERVER + '/roles/all';
  private changeUserRole = this.SERVER + '/roles/change';

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  getUsersList(): Observable<UserPublic[]> {
    return this.http.get<UserPublic[]>(this.allUsers, {headers: this.loginService.getAuthHeaders()});
  }

  getRolesList(): Observable<string[]> {
    return this.http.get<string[]>(this.allRoles, {headers: this.loginService.getAuthHeaders()});
  }

  getUserInfo(userid: number): Observable<UserPublic> {
    return this.http.get<UserPublic>(this.userInfo + userid, {headers: this.loginService.getAuthHeaders()});
  }

  changeRole(user: UserPublic): Observable<UserPublic> {
    return this.http.post<UserPublic>(this.changeUserRole, user, {headers: this.loginService.getAuthHeaders()});
  }
}
