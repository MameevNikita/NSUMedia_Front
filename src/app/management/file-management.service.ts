import {Injectable} from "@angular/core";
import {LoginService} from "../login/login.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FileManagementService {
  private SERVER = 'http://localhost:9001/';

  private deleteFile = this.SERVER + '/management/deleteFile/';
  private markFileAsChecked = this.SERVER + '/management/markFileAsChecked/';

  constructor(private http: HttpClient, private loginService: LoginService){

  }

  delete(fileId: number): Observable<any> {
    return this.http.get<any>(this.deleteFile + fileId, {headers: this.loginService.getAuthHeaders()});
  }

  markAsChecked(fileId: number): Observable<any> {
    return this.http.get<any>(this.markFileAsChecked + fileId, {headers: this.loginService.getAuthHeaders()});
  }
}
