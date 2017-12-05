import {Injectable} from "@angular/core";
import {LoginService} from "../login/login.service";
import {FileInfo} from "./file";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import { saveAs } from 'file-saver'

@Injectable()
export class LoadService {
  private SERVER = 'http://localhost:9001/';
  private uploadFile = this.SERVER + 'upload';
  private uploadFileData = this.SERVER + 'uploadData/';
  private downloadFile = this.SERVER + 'download/';


  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  upload(fileInfo: FileInfo, file: File): Observable<FileInfo> {
    console.log('Upload file: ');
    console.log(fileInfo);

    let observable: Observable<FileInfo> = Observable.create(observer => {

        this.http.post<FileInfo>(this.uploadFile, fileInfo, {headers: this.loginService.getAuthHeaders()}).subscribe(savedFileInfo => {
          let formData: FormData = new FormData();
          formData.append('file', file, file.name);
          let headers = this.loginService.getAuthHeaders();
          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');

          this.http.post<FileInfo>(this.uploadFileData + savedFileInfo.id, formData, {headers: headers}).subscribe(
            fileInfo => {
              observer.next(fileInfo);
            }
          );
        })
      }
    );

    return observable;
  }

  download(file: FileInfo) {
    this.http.get(this.downloadFile + file.id, {responseType: 'blob'}).subscribe(
      (response) => {
        let blob = response;
        let filename = file.name;
        saveAs(blob, filename);
      });
  }
}
