import {UserPublic} from "../login/user-public";

export class FileInfo{
    id: number;
    name: string;
    creator: UserPublic;
    checked: boolean;
    faculty: string;
    discipline: string;
    documentType: string;
    year: number;
    readability: number;
    fullness: number;

    constructor(){
      this.id = 0;
      this.name = "";
      this.checked = false;
      this.faculty = "";
      this.discipline = "";
      this.documentType = "";
      this.year = 1970;
      this.readability = 1;
      this.fullness = 1;
      this.creator = null;
    }
}
