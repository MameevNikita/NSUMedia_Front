import {UserPublic} from "../login/user-public";

export class File{
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
}
