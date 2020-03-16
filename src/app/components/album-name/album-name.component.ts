import { Component, Input, OnInit } from '@angular/core';

/**
 * This component shows a hyperlink to the album.
 */
@Component({
  selector: 'app-album-name',
  templateUrl: './album-name.component.html',
  styleUrls: ['./album-name.component.scss']
})
export class AlbumNameComponent implements OnInit {

  @Input()
  albumName: string;

  @Input()
  albumUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
