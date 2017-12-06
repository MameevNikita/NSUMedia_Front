import {Injectable} from "@angular/core";
import {FileInfo} from "../file";
import {Subject} from "rxjs/Subject";
import {NavigationService} from "../navigation.service";

@Injectable()
export class FileListService extends Subject<FileInfo[]>{
  files: FileInfo[];

  getFiles(): FileInfo[]{
    return this.files;
  }

  constructor(private navigationService: NavigationService){
    super();
  }

  loadAllFiles(){
    this.navigationService.getAllFiles().subscribe(files=>{
      this.setFiles(files);
    });
  }

  setFiles(files: FileInfo[]){
    files.sort((a: FileInfo, b:FileInfo) => {
      let ai = a.checked ? 1 : 0;
      let bi = b.checked ? 1 : 0;
      return ai - bi;
    });
    this.files = files;
    this.next(files);
  }

  loadUserFiles(userId: number){
    this.navigationService.getUserFiles(userId).subscribe(files=>{
      this.setFiles(files);
    });
  }
}
