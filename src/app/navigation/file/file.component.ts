import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-file-info',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  private currentFile: File;
  private id: number;

  constructor(private navigationService: NavigationService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    console.log('Opened file view');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.navigationService.getFileInfo(this.id)
      .subscribe(file => {
        console.log(file);
        this.currentFile = file;
      });
  }

  download() {

  }

  goBack() {
    this.location.back();
  }
}
