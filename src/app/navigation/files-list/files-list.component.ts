import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {FileInfo} from "../file";
import {FileListService} from "./file-list.service";


@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  files: FileInfo[];

  constructor(private fileListService: FileListService, private router: Router,
              private route: ActivatedRoute,
              private location: Location) {

  }

  gotoFile(file: FileInfo) {
    this.router.navigate(['/fileInfo', file.id]);
  }

  ngOnInit() {
    this.files = this.fileListService.getFiles();

    this.fileListService.subscribe(
      files => {
        this.files = files
      }
    );
  }
}
