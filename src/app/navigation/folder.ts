import {FolderShortInfo} from "./folder-short-info";
import {UserPublic} from "../login/user-public";

export class Folder{
    id: number;
    name: string;
    creator: UserPublic;
    parentFolder: FolderShortInfo[];
    subfolders: FolderShortInfo[];
    files: File[];
}
