import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../global-constants';

/**
 * This component provides a description of the website and some useful information.
 */
@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  now: number;
  iTunesApi: string;

  constructor() { }

  ngOnInit(): void {
    this.iTunesApi =  GlobalConstants.iTunesApi;

    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

}
