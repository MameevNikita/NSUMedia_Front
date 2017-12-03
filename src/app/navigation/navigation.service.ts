import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {Folder} from "./folder";
import {LoginService} from "../login/login.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NavigationService extends Subject<Folder> {
  private tokenKey = 'AUTH_TOKEN';

  private SERVER = 'http://localhost:9001/';

  private rootFolder = this.SERVER + '/navigation/rootFolder';
  private folderInfo = this.SERVER + '/navigation/folder/';
  private fileInfo = this.SERVER + '/navigation/file/';

  private currentFolder: Folder;

  constructor(private http: HttpClient, private loginService: LoginService) {
    super();

    this.http.get<Folder>(this.rootFolder).subscribe(folder => {
      this.currentFolder = folder;
      this.next(this.getCurrentFolder());
    });
  }

  gotoFolder(folderId: number): void {
    console.log('Ready to move to: ' + folderId);
    this.http.get<Folder>(this.folderInfo + folderId).subscribe(folder => {
      this.currentFolder = folder;
      console.log('Move to: ' + folder.name);
      this.next(this.getCurrentFolder());
    });
  }

  getFileInfo(fileId: number): Observable<File> {
    return this.http.get<File>(this.fileInfo + fileId);
  }

  getCurrentFolder(): Folder {
    return this.currentFolder;
  }
}
