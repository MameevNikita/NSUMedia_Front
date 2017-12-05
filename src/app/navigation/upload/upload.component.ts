import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {FileInfo} from "../file";
import {LoadService} from "../load.service";


@Component({
  selector: 'app-file-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class FileUploadComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  private currentFile: FileInfo = new FileInfo();
  private file: File;

  constructor(private loadService: LoadService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
  }

  upload() {
    this.loadService.upload(this.currentFile, this.file).subscribe(next=>{
      this.goBack();
    });
  }

  goBack() {
    this.location.back();
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      this.currentFile.name = this.file.name;
    }
  }

  facultyChange(event: any) {
    this.currentFile.faculty = event.target.value;
  }

  disciplineChange(event: any) {
    this.currentFile.discipline = event.target.value;
  }

  documentTypeChange(event: any) {
    this.currentFile.documentType = event.target.value;
  }

  readabilityChanged(event: any) {
    let readability = event.target.value;

    if (readability == null || readability < 1) {
      readability = 1;
    }
    else if (readability > 5) {
      readability = 5;
    }

    this.currentFile.fullness = readability;
    event.target.value = readability;
  }

  fullnessChanged(event: any) {
    let fullness = event.target.value;

    if (fullness == null || fullness < 1) {
      fullness = 1;
    }
    else if (fullness > 5) {
      fullness = 5;
    }

    this.currentFile.fullness = fullness;
    event.target.value = fullness;
  }

  yearChanged(event: any) {
    let year = event.target.value;

    if (year == null || year < 1970) {
      year = 1970;
    }
    else if (year > 2070) {
      year = 2070;
    }

    this.currentFile.year = year;
    event.target.value = year;
  }

  isMetainfoValid(): boolean {
    return this.file != null &&
      this.currentFile.faculty != "" &&
      this.currentFile.discipline != "" &&
      this.currentFile.documentType != "";
  }
}
