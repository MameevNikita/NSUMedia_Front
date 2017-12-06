import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {Router} from "@angular/router";
import {FileListService} from "../files-list/file-list.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchRequest: string;

  constructor(private navigationService: NavigationService,
              private router: Router,
              private fileListService: FileListService) {
  }

  ngOnInit() {
  }

  search() {
    this.navigationService.searchFiles(this.searchRequest).subscribe(files => {
      this.fileListService.setFiles(files, false);
      this.router.navigateByUrl('/files');
    });
  }

  clearRequest() {
    this.searchRequest = '';
    this.router.navigateByUrl('/');
  }
}
