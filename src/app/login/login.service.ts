import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AuthData} from "./auth-data";
import {Token} from "./token";
import {UserPublic} from "./user-public";

@Injectable()
export class LoginService extends Subject<any> {
  private tokenKey = 'AUTH_TOKEN';

  private SERVER = 'http://localhost:9001/';

  private userLogin = this.SERVER + 'login';
  private userLogout = this.SERVER + 'logoff';
  private userInfo = this.SERVER + 'register';

  private token: string;

  constructor(private http: HttpClient) {
    super();
    let savedToken = Cookie.get(this.tokenKey);
    console.log("Get saved token: " + savedToken);
    if (savedToken != null) {
      this.token = savedToken;
      this.next();
    }
  }

  isLogged(): boolean {
    return this.token != null;
  }

  getToken(): string {
    return this.token;
  }

  getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders({'X-Auth-Token': this.getToken()});
    if (this.isLogged()) {
      headers.set('X-Auth-Token', this.getToken());
    }
    return headers;
  }

  register(authData: AuthData): Observable<UserPublic> {
    return this.http.post<UserPublic>(this.userInfo, authData);
  }

  enter(authData: AuthData): Observable<Token> {
    let observable = this.http.post<Token>(this.userLogin, authData);

    observable.subscribe(token => {
      console.log('Got token: ' + token.data);
      Cookie.set(this.tokenKey, token.data);
      this.token = token.data;
    });

    return observable;
  }

  logout(): Observable<Token> {
    let observable = this.http.get<Token>(this.userLogout, {headers: this.getAuthHeaders()});

    observable.subscribe(data => {
      Cookie.delete(this.tokenKey);
      this.token = null;
    });

    return observable;
  }
}
