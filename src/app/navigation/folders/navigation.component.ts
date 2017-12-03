import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {Folder} from "../folder";
import {Router} from "@angular/router";
import {File} from "../file";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private currentFolder: Folder;

  constructor(private navigationService: NavigationService, private router: Router) {
  }

  ngOnInit() {
    this.navigationService.subscribe(folder=>{
      this.currentFolder = folder;
    });

    this.currentFolder = this.navigationService.getCurrentFolder();
  }

  gotoFolder(folder: Folder) {
    this.navigationService.gotoFolder(folder.id);
  }

  gotoFile(file: File) {
    this.router.navigate(['/fileInfo', file.id]);
  }
}
